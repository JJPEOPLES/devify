<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Simple file-based storage for progress data
$dataFile = 'progress_data.json';

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Handle GET request - retrieve progress
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $userId = isset($_GET['userId']) ? $_GET['userId'] : 'anonymous';
    
    if (file_exists($dataFile)) {
        $data = json_decode(file_get_contents($dataFile), true);
        $userProgress = isset($data[$userId]) ? $data[$userId] : [];
        
        echo json_encode([
            'success' => true,
            'progress' => $userProgress
        ]);
    } else {
        echo json_encode([
            'success' => true,
            'progress' => []
        ]);
    }
    exit();
}

// Handle POST request - update progress
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['userId']) || !isset($input['courseId']) || !isset($input['progress'])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Missing required fields'
        ]);
        exit();
    }
    
    $userId = $input['userId'];
    $courseId = $input['courseId'];
    $progress = $input['progress'];
    
    // Load existing data
    $data = [];
    if (file_exists($dataFile)) {
        $data = json_decode(file_get_contents($dataFile), true);
    }
    
    // Update progress
    if (!isset($data[$userId])) {
        $data[$userId] = [];
    }
    
    $data[$userId][$courseId] = $progress;
    
    // Save data
    file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));
    
    echo json_encode([
        'success' => true,
        'message' => 'Progress updated successfully'
    ]);
    exit();
}

// Handle DELETE request - reset progress
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['userId']) || !isset($input['courseId'])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Missing required fields'
        ]);
        exit();
    }
    
    $userId = $input['userId'];
    $courseId = $input['courseId'];
    
    // Load existing data
    if (file_exists($dataFile)) {
        $data = json_decode(file_get_contents($dataFile), true);
        
        if (isset($data[$userId]) && isset($data[$userId][$courseId])) {
            unset($data[$userId][$courseId]);
            file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));
        }
    }
    
    echo json_encode([
        'success' => true,
        'message' => 'Progress reset successfully'
    ]);
    exit();
}

// If we get here, it's an unsupported method
http_response_code(405);
echo json_encode([
    'success' => false,
    'message' => 'Method not allowed'
]);
?>