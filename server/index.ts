import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import sendMail from "./routes/send-mail";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use("/api/send-mail/", sendMail);

app.listen(process.env.PORT, () => {
  console.log(`Listen On Localhost:${process.env.PORT}`);
});
