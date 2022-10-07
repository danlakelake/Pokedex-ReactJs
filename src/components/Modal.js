import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const ModalInfo = (props) => {
  const { messageResponseApi, codeResponseApi, setModal } = props;
  const [iconCheck, setIconCheck] = useState("");

  const hideModal = () => {
    console.log("hide modal");
    setModal(false);
  };

  useEffect(() => {
    codeResponseApi == 0
      ? setIconCheck(<FontAwesomeIcon icon={faCheckCircle} />)
      : setIconCheck(<FontAwesomeIcon icon={faCircleXmark} />);
  }, [codeResponseApi]);

  return (
    <div className="modal-background">
      <div className="modal-card">
        <h3>Modal Info</h3>
        <div>{iconCheck}</div>
        <div className="message-response">{messageResponseApi}</div>
        <button onClick={hideModal}>ok</button>
      </div>
    </div>
  );
};

export default ModalInfo;
