const nodemailer = require("nodemailer");

app.post("/api/contact", async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",       // replace with your email
      pass: "your_app_password",         // use an app password, not your real password
    },
  });

  const mailOptions = {
    from: email,
    to: "yourgmail@gmail.com",           // where you want to receive the message
    subject: `Contact Form: ${subject}`,
    text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});
