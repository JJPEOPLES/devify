const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Initialize connection once
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(process.env.MONGODB_DB);
  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {
  // Allow CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Connect to database
    const db = await connectToDatabase();
    const collection = db.collection('progress');

    // Handle GET request - retrieve progress
    if (event.httpMethod === 'GET') {
      const params = event.queryStringParameters;
      const userId = params?.userId || 'anonymous';

      const userProgress = await collection.findOne({ userId });
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          progress: userProgress?.courses || {},
        }),
      };
    }

    // Handle POST request - update progress
    if (event.httpMethod === 'POST') {
      const data = JSON.parse(event.body);
      
      if (!data.userId || !data.courseId || data.progress === undefined) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'Missing required fields',
          }),
        };
      }

      const { userId, courseId, progress } = data;

      // Update or insert progress
      await collection.updateOne(
        { userId },
        { 
          $set: { 
            [`courses.${courseId}`]: progress 
          } 
        },
        { upsert: true }
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Progress updated successfully',
        }),
      };
    }

    // Handle DELETE request - reset progress
    if (event.httpMethod === 'DELETE') {
      const data = JSON.parse(event.body);
      
      if (!data.userId || !data.courseId) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'Missing required fields',
          }),
        };
      }

      const { userId, courseId } = data;

      // Remove the course progress
      await collection.updateOne(
        { userId },
        { 
          $unset: { 
            [`courses.${courseId}`]: "" 
          } 
        }
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Progress reset successfully',
        }),
      };
    }

    // If we get here, it's an unsupported method
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Method not allowed',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Server error: ' + error.message,
      }),
    };
  }
};