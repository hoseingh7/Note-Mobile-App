import React from "react";
import { useState } from "react";
const InfoModal = () => {
  const [infoShowModal, setInfoShowModal] = useState(false);
  const handleClose = () => {
    setInfoShowModal(false);
  };
  return (
    <div
      className="modal-overlay"
      onClick={handleClose}>
      <div className="modal-content">
        <p>Disigned by - hosein</p>
        <p>app verion 1.0.0</p>
      </div>
    </div>
  );
};

export default InfoModal;
