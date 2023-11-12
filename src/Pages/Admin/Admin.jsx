import React, { useEffect, useState } from "react";
import key from "./key.png";
import eye from "./eye.svg";
import "./Admin.scss";
import Button from "@mui/material/Button";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = () => {};
  return (
    <section id="admin">
      <h2>Enter admin password</h2>
      <div className="registerInputContainer">
        <img src={key} alt="" className="lIcon" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img
          src={eye}
          alt=""
          className={`key ${showPassword ? "show" : ""}`}
          onClick={togglePasswordVisibility}
        />
      </div>
      <Button variant="contained" id="signinBtn" onClick={handleSubmit}>
        Sign in
      </Button>
    </section>
  );
}
