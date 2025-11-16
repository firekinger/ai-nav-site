import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, url, description } = await request.json();

    if (!name || !url || !description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    
    // 动态添加工具名称到邮件主题
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New AI Tool Submission: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6a0dad;">🎉 New AI Tool Submission Received!</h2>
          <p>Hi there,</p>
          <p>A new AI tool has been submitted via the website form. Below are the details:</p>
          
          <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Tool Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Website URL</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="${url}" style="color: #6a0dad; text-decoration: none;">${url}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd; font-weight: bold;">Description</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${description}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; font-style: italic; color: #777;">
            This email was automatically generated.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Submission successful' }, { status: 200 });

  } catch (error) {
    console.error('Submission failed:', error);
    return NextResponse.json({ message: 'Submission failed' }, { status: 500 });
  }
}