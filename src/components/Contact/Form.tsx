// @ts-nocheck
import Button from "../Button/Button";
import { useContext } from "react";
import { sendMailContext } from "../../Context/sendMail";
import axios from "axios";

// let apiUrl = "http://localhost:4000/api/send-mail";
let apiUrl = "https://my-portfolio-send-mail.onrender.com/api/send-mail";

function Form() {
  const { name, setName, email, setEmail, message, setMessage } =
    useContext(sendMailContext); // It Works Just Ignore The Error

  const submitSendEmail = async (e: React.MouseEvent<HTMLElement>) => {
    if (name == "" || email == "" || message == "") {
      alert("Please Fillout The Inputs");
      return;
    }
    let x: string = name as string;
    let y: string = email as string;
    let z: string = message as string;
    let emailRegex: RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!y.match(emailRegex)) {
      alert("Please Enter A Valid Email!");
      return;
    }

    e.preventDefault();
    await axios
      .post(`${apiUrl}?email=${email}`, {
        data: {
          name: x,
          message: z,
        },
      })
      .then(() => alert("Email Sent Successfully!"));
  };

  return (
    <>
      <form className="mt-10 mx-auto w-fit">
        <div className="input-container flex gap-5 mb-5 w-[800px] max-[792px]:w-[500px] max-[1040px]:w-[600px] max-[638px]:w-[400px] max-[430px]:w-[300px] max-[430px]:flex-col">
          <input
            type={"text"}
            placeholder={"Your Name"}
            className="bg-transparent border border-solid border-slate-300 px-4 py-2 w-[400px] outline-none text-slate-200 max-[638px]:w-[200px] max-[430px]:w-[300px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type={"email"}
            placeholder={"Your Email"}
            className="bg-transparent border border-solid border-slate-300 px-4 py-2 w-[400px] outline-none text-slate-200 max-[430px]:w-[300px] max-[638px]:w-[200px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="bg-transparent border border-solid border-slate-300 px-4 py-2 w-[800px] mb-5 min-h-[200px] outline-none text-slate-200 resize-y max-[792px]:w-[500px] max-[1040px]:w-[600px] max-[638px]:w-[420px] max-[430px]:w-[300px]"
          placeholder="Your Message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        ></textarea>
        <Button
          variant="blue"
          text="Submit"
          className="mx-auto block"
          onClick={submitSendEmail}
        />
      </form>
    </>
  );
}

export default Form;
