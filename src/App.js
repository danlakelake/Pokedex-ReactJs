import React, { useEffect, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import ModalInfo from "./components/Modal";
import { postApiLogin, postAuthLogin } from "./api";
import PokemonPage from "./components/PokemonPage";

export default function App() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [codeResponseApi, setCodeResponseApi] = useState("");
  const [messageResponseApi, setMessageResponseApi] = useState("");
  const [keyResponseApi, setKeyResponseApi] = useState("");
  const [userIdApi, setUserIdApi] = useState("");
  const [modal, setModal] = useState(false);

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
      e.preventDefault();
      const res_ApiLogin = await postApiLogin(name.trim(), password.trim());

      setCodeResponseApi(res_ApiLogin.code);
      setMessageResponseApi(res_ApiLogin.message);
      setKeyResponseApi(res_ApiLogin.data.key);
      setUserIdApi(res_ApiLogin.data.usuario_id);
      console.log(res_ApiLogin);

      const resApi = await postAuthLogin(
        res_ApiLogin.data.usuario_id,
        res_ApiLogin.data.key
      );
      console.log(resApi);

      //VALIDATION CODE RESPONSES
      if (codeResponseApi === 0) {
        setModal(true);
      } else {
        setModal(true);
        e.preventDefault();
      }
    }
  };

  const onChange = (e) => {
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
        : setErrorName("el nombre debe contener al menos 5 caracteres");

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
        : setErrorPassword("el password debe contener al menos 5 caracteres");

      passwordRegex.test(e.target.value.trim())
        ? (setErrorPassword(""),
          (input_password.style.border = "2px solid lime"),
          (icon_password.style.color = "lime"))
        : ((input_password.style.border = "2px solid red"),
          (icon_password.style.color = "red"));
    }
  };

  useEffect(() => {}, [
    name,
    password,
    codeResponseApi,
    keyResponseApi,
    userIdApi,
  ]);

  return (
    <div>
      {codeResponseApi === 0 ? (
        <PokemonPage />
      ) : (
        <div className="loginForm-container">
          {modal === true ? (
            <ModalInfo
              message={"Mensaje de success"}
              codeResponseApi={codeResponseApi}
              setModal={setModal}
              messageResponseApi={messageResponseApi}
            />
          ) : null}
          <form id="form" className="form">
            <h2>Ingresar</h2>
            <div className="form-control">
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
            <div className="form-control">
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
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={showHidePassword}
                  />
                )}
              </div>
              <span className="error-span">{errorPassword}</span>
            </div>
            <button type="submit" onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
