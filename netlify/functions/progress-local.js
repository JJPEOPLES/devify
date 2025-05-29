// In-memory storage (will reset on function cold starts)
const progressData = {};

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
    // Handle GET request - retrieve progress
    if (event.httpMethod === 'GET') {
      const params = event.queryStringParameters;
      const userId = params?.userId || 'anonymous';

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          progress: progressData[userId] || {},
          note: "This is using the serverless function's memory storage which resets periodically. For persistent storage, use the database version."
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

      // Initialize user data if it doesn't exist
      if (!progressData[userId]) {
        progressData[userId] = {};
      }

      // Update progress
      progressData[userId][courseId] = progress;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Progress updated successfully',
          note: "This is using the serverless function's memory storage which resets periodically. For persistent storage, use the database version."
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

      // Remove the course progress if user data exists
      if (progressData[userId] && progressData[userId][courseId] !== undefined) {
        delete progressData[userId][courseId];
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Progress reset successfully',
          note: "This is using the serverless function's memory storage which resets periodically. For persistent storage, use the database version."
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