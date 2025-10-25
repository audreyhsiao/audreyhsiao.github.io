// Vercel serverless function for secure resume download
// This function handles password validation and file streaming

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Rate limiting storage (in production, use Redis or similar)
const rateLimitStore = new Map();

// Rate limiting function
function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxAttempts = 5;
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { attempts: 0, resetTime: now + windowMs });
    return true;
  }
  
  const data = rateLimitStore.get(ip);
  
  // Reset if window has passed
  if (now > data.resetTime) {
    rateLimitStore.set(ip, { attempts: 0, resetTime: now + windowMs });
    return true;
  }
  
  // Check if exceeded limit
  if (data.attempts >= maxAttempts) {
    return false;
  }
  
  return true;
}

// Increment rate limit counter
function incrementRateLimit(ip) {
  const data = rateLimitStore.get(ip);
  if (data) {
    data.attempts++;
  }
}

// Constant-time string comparison to prevent timing attacks
function constantTimeCompare(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}

// Get client IP address
function getClientIP(req) {
  return req.headers['x-forwarded-for'] || 
         req.headers['x-real-ip'] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
         '127.0.0.1';
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const clientIP = getClientIP(req);
    
    // Check rate limiting
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({ 
        message: 'Too many failed attempts. Please try again later.' 
      });
    }

    // Get password from request body
    const { password } = req.body;
    
    if (!password || typeof password !== 'string') {
      incrementRateLimit(clientIP);
      return res.status(400).json({ message: 'Password is required' });
    }

    // Get the correct password from environment variable
    const correctPassword = process.env.RESUME_PASSWORD;
    
    if (!correctPassword) {
      console.error('RESUME_PASSWORD environment variable not set');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Validate password with constant-time comparison
    if (!constantTimeCompare(password, correctPassword)) {
      incrementRateLimit(clientIP);
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Reset rate limit on successful authentication
    rateLimitStore.delete(clientIP);

    // Option A: Stream local file (recommended for simple deployment)
    const resumePath = path.join(process.cwd(), 'private', 'Audrey_Hsiao_Resume.pdf');
    
    // Check if file exists
    if (!fs.existsSync(resumePath)) {
      console.error('Resume file not found at:', resumePath);
      return res.status(500).json({ message: 'Resume file not available' });
    }

    // Get file stats
    const stats = fs.statSync(resumePath);
    const fileSize = stats.size;

    // Set appropriate headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Audrey_Hsiao_Resume.pdf"');
    res.setHeader('Content-Length', fileSize);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    // Stream the file
    const fileStream = fs.createReadStream(resumePath);
    
    fileStream.on('error', (error) => {
      console.error('Error streaming file:', error);
      if (!res.headersSent) {
        res.status(500).json({ message: 'Error reading resume file' });
      }
    });

    fileStream.pipe(res);

  } catch (error) {
    console.error('Error in get-resume handler:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Alternative Option B: S3 Presigned URL (uncomment if using S3)
/*
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1'
});

async function getPresignedURL() {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: 'resume/Audrey_Hsiao_Resume.pdf',
    Expires: 300 // 5 minutes
  };
  
  return s3.getSignedUrl('getObject', params);
}

// Replace the file streaming section with:
// const presignedURL = await getPresignedURL();
// return res.status(200).json({ downloadUrl: presignedURL });
*/
