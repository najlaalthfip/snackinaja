// api/sendMessage.js
export default function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      const nodemailer = require("nodemailer");
  
      // Konfigurasi email
      const transporter = nodemailer.createTransport({
        service: "gmail", // Atau SMTP lain
        auth: {
          user: "n.l.pradanti1805@gmail.com", // Ganti dengan email Anda
          pass: "studysukses6", // Ganti dengan password
        },
      });
  
      const mailOptions = {
        from: email,
        to: "n.l.pradanti1805@gmail.com", // Ganti dengan email tujuan
        subject: `Pesan dari ${name}`,
        text: `Nama: ${name}\nEmail: ${email}\nPesan:\n${message}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send("Gagal mengirim pesan.");
        } else {
          res.status(200).send("Pesan berhasil dikirim!");
        }
      });
    } else {
      res.status(405).send("Metode pengiriman tidak valid.");
    }
  }
  