import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import { postApiLogin } from "../api";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [codeApi, setCodeApi] = useState("");

  const showHidePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (e) => {
    const input_username = document.getElementById("username");
    const input_password = document.getElementById("password");

    if (
      name.length == 0 ||
      name == null ||
      name === "" ||
      password.length == 0 ||
      password == null ||
      password === "" ||
      input_username.style.border === "2px solid red" ||
      input_password.style.border === "2px solid red"
    ) {
      console.log("no se puede enviar");
      e.preventDefault();
    } else {
      console.log("enviado");
      console.log(name);
      console.log(password);
      e.preventDefault();
      const apiLogin = await postApiLogin(name, password);
      console.log(apiLogin.code);
    }
  };

  const onChange = (e) => {
    console.log(e.target.name);

    //Validation Name
    if (e.target.name === "name") {
      setName(e.target.value);
      const nameRegex = /^[a-zA-Z]{5,}/gi;
      const input_username = document.getElementById("username");
      const icon_username = document.getElementById("user-icon");

      e.target.value.length == 0 ||
      e.target.value == null ||
      e.target.value === ""
        ? (setErrorName("El nombre no puede ir vacio"), e.preventDefault())
        : setErrorName("el nombre debe contener mas de 5 caracteres");

      nameRegex.test(e.target.value.trim())
        ? (setErrorName(""),
          (input_username.style.border = "2px solid lime"),
          (icon_username.style.color = "lime"))
        : ((input_username.style.border = "2px solid red"),
          (icon_username.style.color = "red"));
    }

    //Validation Password
    if (e.target.name === "password") {
      setPassword(e.target.value);
      const passwordRegex = /^[a-zA-Z]{5,}/gi;
      const input_password = document.getElementById("password");
      const icon_password = document.getElementById("password-icon");

      e.target.value.length == 0 ||
      e.target.value == null ||
      e.target.value === ""
        ? setErrorPassword("El password no puede ir vacio")
        : setErrorPassword("el password debe contener mas de 5 caracteres");

      passwordRegex.test(e.target.value.trim())
        ? (setErrorPassword(""),
          (input_password.style.border = "2px solid lime"),
          (icon_password.style.color = "lime"))
        : ((input_password.style.border = "2px solid red"),
          (icon_password.style.color = "red"));
    }
  };

  useEffect(() => {}, [name, password]);

  return (
    <div class="loginForm-container" id="">
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
            name="name"
            onChange={onChange}
          />
          <span className="error-span">{errorName}</span>
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
              name="password"
              onChange={onChange}
            />
            {passwordShown ? (
              <FontAwesomeIcon icon={faEye} onClick={showHidePassword} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} onClick={showHidePassword} />
            )}
          </div>
          <span className="error-span">{errorPassword}</span>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
