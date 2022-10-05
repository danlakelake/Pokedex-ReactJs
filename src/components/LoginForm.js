import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const showHidePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let nameRegex = /^[a-zA-Z]{5,}/i;
    let input_username = document.getElementById("username");
    let icon_username = document.getElementById("user-icon");

    let input_password = document.getElementById("password");
    let icon_password = document.getElementById("password-icon");

    //Validation Name
    if (nameRegex.test(name.trim())) {
      setErrorName("");
      input_username.style.border = "2px solid lime";
      icon_username.style.color = "lime";
    } else if (name.length == 1) {
      setErrorName("el nombre debe contener mas de 5 caracteres");
      input_username.style.border = "2px solid red";
      icon_username.style.color = "red";
    } else if (name.length == 0 || name == null || name === "") {
      setErrorName("");
    }

    //Validation Password
    if (nameRegex.test(password.trim())) {
      setErrorPassword("");
      input_password.style.border = "2px solid lime";
      icon_password.style.color = "lime";
    } else if (password.length == 1) {
      setErrorPassword("el password debe contener mas de 5 caracteres");
      input_password.style.border = "2px solid red";
      icon_password.style.color = "red";
    } else if (password.length == 0 || password == null || password === "") {
      setErrorPassword("");
      input_password.style.border = "2px solid red";
    }
  }, [name, password]);

  return (
    <div class="loginForm-container">
      <form id="form" class="form">
        <h2>Ingresar</h2>
        <div class="form-control">
          <label for="username">
            <FontAwesomeIcon icon={faUser} id="user-icon" />
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <span>{errorName}</span>
        </div>
        <div class="form-control">
          <label for="password">
            <FontAwesomeIcon icon={faLock} id="password-icon" />
            Password
          </label>
          <div>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {passwordShown ? (
              <FontAwesomeIcon icon={faEye} onClick={showHidePassword} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} onClick={showHidePassword} />
            )}
          </div>
          <span>{errorPassword}</span>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
