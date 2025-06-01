import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddUser from "../components/AddUser";

const Register = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      navigate("/log-in");
    }
  }, [open, navigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f4f6] dark:bg-slate-900">
      <AddUser open={open} setOpen={setOpen} />
    </div>
  );
};

export default Register;