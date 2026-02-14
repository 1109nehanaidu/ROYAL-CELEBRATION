import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("Logged Out Successfully!");
    navigate("/");
  }, []);

  return null;
};

export default Logout;
