import { useState } from "react";

interface Alert {
  show: boolean;
  text: string;
  type: "danger" | "warning" | "info" | "success"; 
}

interface ShowAlertProps {
  text: string;
    type?: "danger" | "success";
    show: boolean
}

const UseAlert = () => {
  const [alert, setAlert] = useState<Alert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: ShowAlertProps) =>
    setAlert({ show: true, text, type });

  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default UseAlert;
