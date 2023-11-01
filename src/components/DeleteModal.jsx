import React from "react";
import { useState } from "react";

const DeleteModal = ({ onClose, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div
      className="modal"
      id="my_modal">
      <div className="modal-content">
        <div className="text__delete">
          <p>Are you sure you want delete</p>
        </div>
        <div className="btn__delete__modal">
          <button
            className="cancel__btn"
            onClick={onClose}>
            Cancel
          </button>
          <button
            className="danger__confirm"
            onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
