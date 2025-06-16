const nodemailer = require('nodemailer');

exports.contactCont = async (req, res) => {
  const { fullName, email, message } = req.body;

  try {
    // Setup transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,  // Your email, shown as if it's from the user
      to: process.env.EMAIL_USER,                         // You receive the mail
      replyTo: email,                                     // Clicking reply goes to user's email
      subject: `Message from Portfolio - ${fullName}`,
      text: `You received a new message from your portfolio website.

Name: ${fullName}
Email: ${email}
Message: ${message}
`,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Email failed to send' });
  }
};
