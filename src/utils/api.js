// API utility functions for progress tracking

// Base URL for API calls
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:8888/.netlify/functions';

// Generate a unique user ID if one doesn't exist
const getUserId = () => {
  let userId = localStorage.getItem('devify_user_id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('devify_user_id', userId);
  }
  return userId;
};

// Get progress for all courses
export const getProgress = async () => {
  try {
    // First try to get from local storage
    const localProgress = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('course_') && key.endsWith('_progress')) {
        const courseId = key.split('_')[1];
        localProgress[courseId] = parseInt(localStorage.getItem(key));
      }
    }

    // Then try to get from API
    try {
      const userId = getUserId();
      const response = await fetch(`${API_BASE_URL}/progress-local?userId=${userId}`);
      const data = await response.json();
      
      if (data.success) {
        // Merge API data with local data, preferring the higher progress value
        const mergedProgress = { ...localProgress };
        
        Object.entries(data.progress).forEach(([courseId, progress]) => {
          if (!mergedProgress[courseId] || progress > mergedProgress[courseId]) {
            mergedProgress[courseId] = progress;
            // Update local storage
            localStorage.setItem(`course_${courseId}_progress`, progress.toString());
          }
        });
        
        return mergedProgress;
      }
    } catch (error) {
      console.log('API error, using local progress only:', error);
    }
    
    return localProgress;
  } catch (error) {
    console.error('Error getting progress:', error);
    return {};
  }
};

// Update progress for a specific course
export const updateProgress = async (courseId, progress) => {
  try {
    // Update local storage
    localStorage.setItem(`course_${courseId}_progress`, progress.toString());
    
    // Try to update API
    try {
      const userId = getUserId();
      await fetch(`${API_BASE_URL}/progress-local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          courseId,
          progress,
        }),
      });
    } catch (error) {
      console.log('API error, progress saved locally only:', error);
    }
    
    return true;
  } catch (error) {
    console.error('Error updating progress:', error);
    return false;
  }
};

// Reset progress for a specific course
export const resetProgress = async (courseId) => {
  try {
    // Remove from local storage
    localStorage.removeItem(`course_${courseId}_progress`);
    
    // Try to reset in API
    try {
      const userId = getUserId();
      await fetch(`${API_BASE_URL}/progress-local`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          courseId,
        }),
      });
    } catch (error) {
      console.log('API error, progress reset locally only:', error);
    }
    
    return true;
  } catch (error) {
    console.error('Error resetting progress:', error);
    return false;
  }
};