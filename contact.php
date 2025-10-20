<?php
// Contact form handler
header('Content-Type: application/json');

// Check if form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'audrey.yh.cs@gmail.com';
$subject = 'New Contact Form Submission from ' . $name;
$headers = [
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/html; charset=UTF-8'
];

// Create email body
$emailBody = "
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Message:</strong></p>
    <p>{$message}</p>
    <hr>
    <p><em>This message was sent from your website contact form.</em></p>
</body>
</html>
";

// Send email
$mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message. Please try again later.']);
}
