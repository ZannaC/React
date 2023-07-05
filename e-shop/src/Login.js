import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({ userName: "", password: "" });

  const onChangeUserName = (event) => {
    setData((currentData) => ({
      ...currentData,
      userName: event.target.value,
    }));
  };

  const onChangePassword = (event) => {
    setData((currentData) => ({
      ...currentData,
      password: event.target.value,
    }));
  };

  return (
    <div>
      <div className="logInBlock">
        <div>Log in</div>
        <div>
          <img className="user" src="./user-icon.png" alt="user-icon" />
        </div>
      </div>

      <p>User name: {data.userName}</p>
      <input className="loginField" type="text" onChange={onChangeUserName} />
      <p>Password: {data.password}</p>
      <input
        className="loginField"
        type="password"
        onChange={onChangePassword}
      />
      <button className="signIn">Sign in</button>
    </div>
  );
}
export default Login;
