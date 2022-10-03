import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  return (
    <div class="loginForm-container">
      <form id="form" class="form">
        <h2>Ingresar</h2>
        <div class="form-control">
          <label for="username">
            <FontAwesomeIcon icon={faUser} />
            Username
          </label>
          <input type="text" id="username" placeholder="Enter username" />
          <small>Error message</small>
        </div>
        <div class="form-control">
          <label for="password">
            <FontAwesomeIcon icon={faLock} />
            Password
          </label>
          <div>
            {}
            <input type="password" id="password" placeholder="Enter password" />
            <FontAwesomeIcon icon={faEye} />
            <FontAwesomeIcon icon={faEyeSlash} />
          </div>
          <small>Error message</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
