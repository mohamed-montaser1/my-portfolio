type setString = React.Dispatch<React.SetStateAction<string>> | null;

export type sendMailContextType = {
  name: string;
  setName: setString;
  email: string;
  setEmail: setString;
  message: string;
  setMessage: setString;
};
