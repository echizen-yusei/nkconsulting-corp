import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import sanitizeHtml from "sanitize-html";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
})
);

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
});

app.post("/api/contact", async (req, res) => {
  const {
    company,
    name,
    kana,
    email,
    phone,
    message,
  } = req.body;

  if (!name || !email || !message){
    return res.status(400).json({ success: false});
  }

  if (message.length > 1000) {
    return res.status(400).json({ success: false});
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false});
  }

  const safeCompany = sanitizeHtml(company || "", { allowedTags: [], allowedAttributes: {}});
  const safeName = sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} });
  const safeKana = sanitizeHtml(kana || "", { allowedTags: [], allowedAttributes: {} });
  const safeEmail = sanitizeHtml(email, {allowedTags: [], allowedAttributes: {} });
  const safePhone = sanitizeHtml(phone || "", { allowedTags: [], allowedAttributes: {} });
  const safeMessage = sanitizeHtml(message, { allowedTags: [], allowedAttributes: {} });


  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

  // 管理者宛
  await transporter.sendMail({
    from: `"お問い合わせフォーム" <${process.envMAIL_USER}>`,
    to: process.env.MIAL_USER,
    replyTo: safeEmail,
    subject: "【お問い合わせ】NKCフォームからの送信",
    text: `
    会社名：${safeCompany}
    お名前：${safeName}
    ふりがな：${safeKana}
    メール：${safeEmail}
    電話番号：${safePhone}
    お問い合わせ：${safeMessage}
    `,
  });

// ユーザー控え
await transporter.sendMail({
    from: `"株式会社 NK CONSULTING" <${process.env.MAIL_USER}>`,
    to: safeEmail,
    subject: "【株式会社 NK CONSULTING】お問い合わせありがとうございます",
    text: `
${safeName} 様

以下の内容でお問い合わせを受け付けました。

${safeMessage}

※このメールは自動送信です。本メールに返信しても対応できませんのでご注意ください。
メール内容確認後、1営業日以内にご連絡させていただきます。

--------------------------
株式会社 NK CONSULTING
神奈川県横浜市南区通町3丁目61-2 3F
nk.consulting@noriken.info
--------------------------
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
