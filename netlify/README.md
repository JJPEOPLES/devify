# Netlify Functions for Devify

This directory contains serverless functions that handle progress tracking for the Devify learning platform.

## Functions

### progress.js

This function uses MongoDB to store and retrieve user progress data. To use this function, you need to set up the following environment variables in your Netlify dashboard:

- `MONGODB_URI`: Your MongoDB connection string
- `MONGODB_DB`: The name of your MongoDB database

### progress-local.js

This is a simpler version that stores data in memory. It's useful for development or if you don't want to set up a MongoDB database. Note that data will be lost when the function instance is recycled (typically after 10-15 minutes of inactivity).

## API Endpoints

Both functions expose the same API endpoints:

### GET /.netlify/functions/progress-local

Retrieves progress data for a user.

Query parameters:
- `userId` (optional): The user ID to retrieve progress for. If not provided, "anonymous" is used.

Response:
```json
{
  "success": true,
  "progress": {
    "1": 50,
    "2": 25,
    "3": 100
  }
}
```

### POST /.netlify/functions/progress-local

Updates progress for a specific course.

Request body:
```json
{
  "userId": "user123",
  "courseId": "1",
  "progress": 75
}
```

Response:
```json
{
  "success": true,
  "message": "Progress updated successfully"
}
```

### DELETE /.netlify/functions/progress-local

Resets progress for a specific course.

Request body:
```json
{
  "userId": "user123",
  "courseId": "1"
}
```

Response:
```json
{
  "success": true,
  "message": "Progress reset successfully"
}
```

## Deployment

These functions are automatically deployed when you deploy your Netlify site. The `netlify.toml` file in the root directory configures the functions directory and sets up redirects from `/api/*` to `/.netlify/functions/*`.

## Local Development

To test these functions locally, install the Netlify CLI:

```
npm install -g netlify-cli
```

Then run:

```
netlify dev
```

This will start a local development server that includes your React app and the serverless functions.