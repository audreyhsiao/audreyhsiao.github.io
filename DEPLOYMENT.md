ㄕ# Secure Resume Download - Deployment Guide

## Overview

This implementation adds a secure password-protected resume download feature to your portfolio site. The system includes:

- Password-protected download button
- Rate limiting (5 attempts per hour per IP)
- Constant-time password comparison
- Secure file streaming
- Keyboard accessibility
- Mobile-responsive design

## Setup Instructions

### 1. Environment Variables

Set the following environment variable in your deployment platform:

```bash
RESUME_PASSWORD=your_secure_password_here
```

**Important**: Choose a strong password and never commit it to version control.

### 2. Resume File

1. Place your actual resume PDF in the `private/` directory
2. Name it exactly: `Audrey_Hsiao_Resume.pdf`
3. The `private/` directory is already in `.gitignore` to prevent accidental commits

### 3. Deployment Platforms

#### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set the environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `RESUME_PASSWORD` with your chosen password
3. Deploy - the serverless function will be automatically created

#### Netlify

1. Use Netlify Functions instead of Vercel's API routes
2. Move the function to `netlify/functions/get-resume.js`
3. Set environment variables in Netlify dashboard

#### Other Platforms

The serverless function can be adapted for other platforms like:
- AWS Lambda
- Google Cloud Functions
- Azure Functions

### 4. Testing

1. Deploy your site
2. Navigate to the About Me section
3. Click "Get Resume" button
4. Enter the password you set in `RESUME_PASSWORD`
5. Verify the download works correctly

## Security Features

### Rate Limiting
- Maximum 5 failed attempts per IP address per hour
- Prevents brute force attacks
- Automatically resets after successful authentication

### Password Security
- Constant-time comparison prevents timing attacks
- Password is never stored in client-side code
- Server-side validation only

### File Security
- Resume file is stored in private directory
- Not accessible via direct URL
- Requires authentication to download

## Customization

### Styling
The button and modal use your existing design system:
- Pink accent color (`#ff2e63`)
- Dark theme compatibility
- Responsive design
- Glassmorphism effects

### File Storage Options

#### Option A: Local File (Current Implementation)
- Simple and secure
- File stored in `private/` directory
- Direct streaming from serverless function

#### Option B: S3 Storage (Alternative)
To use S3 instead of local files:

1. Uncomment the S3 code in `api/get-resume.js`
2. Set these environment variables:
   ```bash
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_REGION=us-east-1
   S3_BUCKET_NAME=your_bucket_name
   ```
3. Upload your resume to S3 bucket

## Troubleshooting

### Common Issues

1. **"Resume file not available"**
   - Check that `Audrey_Hsiao_Resume.pdf` exists in `private/` directory
   - Verify file permissions

2. **"Server configuration error"**
   - Ensure `RESUME_PASSWORD` environment variable is set
   - Check deployment platform's environment variable configuration

3. **"Too many failed attempts"**
   - Rate limiting is working correctly
   - Wait 1 hour or use a different IP address

4. **Download not working**
   - Check browser console for errors
   - Verify serverless function is deployed correctly
   - Test with a simple password first

### Development Testing

For local testing, you can use a simple HTTP server:

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally
vercel dev
```

## Security Considerations

1. **Password Strength**: Use a strong, unique password
2. **Environment Variables**: Never commit passwords to version control
3. **Rate Limiting**: Monitor for suspicious activity
4. **File Access**: Ensure private directory is not web-accessible
5. **HTTPS**: Always use HTTPS in production

## Support

If you encounter issues:

1. Check the browser console for JavaScript errors
2. Verify environment variables are set correctly
3. Test the serverless function directly
4. Check deployment platform logs

The implementation is designed to be secure, accessible, and user-friendly while maintaining your site's design consistency.
