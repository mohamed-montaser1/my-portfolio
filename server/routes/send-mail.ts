import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
import { mailOptions } from "../types/send-mail";
const router = Router();

router.post("/", (req: Request, res: Response) => {
  let { email } = req.query;
  let { name, message } = req.body.data;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  let mailOptions: mailOptions = {
    from: "my Portfolio",
    to: process.env.USER as string,
    subject: "Mohamed Montaser Portfolio Review",
    html: `
    <div style="text-align: center">
    <h1 style="text-align: center; font-size: 30px;">New Review 🎉</h1>
    <p style="text-align: center; font-size: 24px;">Reviewer Name: ${name}</p>
    <p style="text-align: center; font-size: 24px;">Reviewer Email: ${email}</p>
    <p style="text-align: center; font-size: 24px;">Reviewer Message:  ${message}</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({
        success: true,
        msg: err.message,
      });
    }
    return res.status(200).json({
      success: true,
      accepted: true,
      msg: message,
    });
  });
});

export default router;
