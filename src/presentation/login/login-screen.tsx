import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../main/hooks/main-hooks";
import { RootState } from "../../main/store";
import { handleLogin } from "./actions/login-actions";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const statusRequest = useSelector((state: RootState) => state.userAccess.status);

  useEffect(() => {
    if (statusRequest === 'success') {
      navigate('/');
    }
  }, [statusRequest])

  return (
    <div className="
      bg-gray
        flex
        items-center
        justify-center
        flex-col
        w-screen
        h-screen
      ">
      <div>
        <button onClick={(_) => setEmail("email_example")}>| setEmail |</button>
        <button onClick={(_) => setPassword("password_example")}>| setPassword | </button>
        <button onClick={(_) => handleLogin(email, password, dispatch)}>| handleLogin |</button>
        <h4>{email}</h4>
        <h4>{password}</h4>
      </div>
    </div>
  );
}
