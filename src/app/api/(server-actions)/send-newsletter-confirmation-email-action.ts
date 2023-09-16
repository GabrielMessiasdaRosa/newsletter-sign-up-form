"use server";

import nodemailer from "nodemailer";

export async function sendNewsletterConfirmationEmailAction(
  destination: string
): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const removeSubscriptionLink = `${process.env.NEXT_PUBLIC_BASE_URL}/newsletter/remove-subscription?email=${destination}`;

  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tank You for Subscribing to Our Newsletter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
        }

        .container {
            background-color: #fff;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
            width: 100px;
            height: 100px;
            margin: 0 auto 20px;
            background-color: #f48c06;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logobal {
            width: 30px;
            height: 30px;
            background-color: #fff;
            border-radius: 99px;
        }

        h1 {
            color: #333;
        }

        p {
            color: #777;
        }

        .unsubscribe-button {
            margin-top: 20px;
        }

        .unsubscribe-button a {
            display: inline-block;
            text-decoration: none;
            background-color: #f48c06;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <div class="logobal"></div>
            <div class="logobal"></div>
        </div>
        <h1>Thank You for Subscribing to Our Newsletter</h1>
        <p>We appreciate your interest in our newsletter. Stay tuned for the latest updates and news.</p>
        <div class="unsubscribe-button">
            <a href="${removeSubscriptionLink}">Unsubscribe</a>
        </div>
    </div>
</body>
</html>
  `;

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: destination,
    subject: "Thank You for Subscribing to Our Newsletter",
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error: any) {
    throw new Error(error);
  }
}
