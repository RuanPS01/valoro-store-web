import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../main/store";
import { handleLogin } from "./actions/login-actions";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const statusRequest = useSelector((state: RootState) => state.userAccess.status);

  useEffect(() => {
    if (statusRequest === 'success') {
      navigate('/');
    }
  }, [statusRequest])

  return (
    <div className="
      bg-dark
        flex
        items-center
        justify-center
        flex-col
        w-screen
        h-screen
      ">
      <button onClick={(_) => setEmail("_")}></button>
      <button onClick={(_) => setPassword("_")}></button>
      <button onClick={(_) => handleLogin(email, password)}></button>
    </div>
  );
}
