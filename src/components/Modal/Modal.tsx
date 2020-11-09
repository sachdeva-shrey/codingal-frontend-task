import React, { useState } from "react";
import { FiX } from "react-icons/fi";

import FormComponent from "../Form/FormComponent";
import "./modal.css";

interface ModalProps {
  closeModal: () => void;
  endClass: () => void;
}

const Modal = ({ closeModal, endClass }: ModalProps) => {
  return (
    <div className="modal">
      <FormComponent closeModal={closeModal} endClass={endClass} />
    </div>
  );
};

export default Modal;
