import nodemailer from "nodemailer";

export async function sendInvoiceEmail(to, booking) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `Invoice for ${booking.serviceName}`,
    text: `Thank you for booking ${booking.serviceName}.
Total Amount: ৳${booking.totalAmount}
Date: ${new Date(booking.createdAt).toLocaleString()}`,
  };

  return transporter.sendMail(mailOptions);
}
