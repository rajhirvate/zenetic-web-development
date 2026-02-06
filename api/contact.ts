import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, requirements, pageUrl, timestamp, honeypot } = request.body;

    // 1. Basic Validation
    if (honeypot) {
        // If honeypot is filled, it's a bot. Silently fail or return success to fool them.
        return response.status(200).json({ success: true, message: 'Message sent successfully.' });
    }

    if (!name || !email || !requirements) {
        return response.status(400).json({ error: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return response.status(400).json({ error: 'Invalid email format' });
    }

    try {
        // 2. Transporter Setup

        // Check for missing credentials
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
            return response.status(500).json({ error: 'Server configuration error: Missing email credentials' });
        }

        // Default to Gmail if HOST is not set (Common fallback)
        const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
        const port = Number(process.env.EMAIL_PORT) || 587;
        const secure = process.env.EMAIL_SECURE === 'true'; // Explicitly check for string 'true'

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 3. Send Email
        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // Sender address
            to: process.env.EMAIL_TO, // List of receivers (The site owner)
            subject: `New Lead: ${name} - ${requirements.join(', ')}`,
            text: `
        New Lead Received!
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Requirements: ${requirements.join(', ')}
        
        Page URL: ${pageUrl}
        Time: ${timestamp}
      `,
            html: `
        <h2>New Lead Received!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Requirements:</strong> ${requirements.join(', ')}</p>
        <hr />
        <p><strong>Page URL:</strong> ${pageUrl}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        // 4. Return Success
        return response.status(200).json({ success: true });

    } catch (error: any) {
        console.error('Email send error:', error);
        return response.status(500).json({ error: 'Failed to send email' });
    }
}
