import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

   if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: process.env.GMAIL_TO,
      replyTo: email,

      subject: `Portfolio Contact - ${name}`,
      
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr>

        <p>${message}</p>
      `,
      
    });

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}