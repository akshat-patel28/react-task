import React, { useState } from "react";

const Task6 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onClick = () => {
    setErrorMessage("");
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") setErrorMessage("email field is empty");
    else if (password === "") setErrorMessage("password field is empty");
    else if (email === "" && password === "") setErrorMessage("fill all field");
    else if (email.match(emailFormat) === null)
      setErrorMessage("invalid email address");
    else {
      setErrorMessage("");
      alert("login successful");
    }
  };
  return (
    <div>
      <h1>Login Form</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          margin: "0 auto",
        }}
      >
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onClick}>Login</button>
        <span style={{ color: "red" }}>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Task6;
