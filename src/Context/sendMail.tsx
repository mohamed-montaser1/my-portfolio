import { createContext, useState } from "react";
import { sendMailContextType } from "../allTypes";

export const sendMailContext = createContext<sendMailContextType>({
  email: "",
  name: "",
  message: "",
  setEmail: null,
  setMessage: null,
  setName: null,
});
type Props = { children: JSX.Element };

export const Provider = ({ children }: Props) => {
  let [name, setName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [message, setMessage] = useState<string>("");

  let value = {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
  };
  return (
    <sendMailContext.Provider value={value}>
      {children}
    </sendMailContext.Provider>
  );
};
