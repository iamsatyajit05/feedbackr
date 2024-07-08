import { createTransport, TransportOptions } from 'nodemailer';

export async function sendEmail(to: string, subject: string, text: string) {
  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  } as TransportOptions);

  const mailOptions = {
    from: 'Satyajit from Feedbackr ' + 'thisissatyajit05@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error:', error);
    }
  });
}
