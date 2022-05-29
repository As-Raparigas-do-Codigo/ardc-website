import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastMessage = ({ show = false, title, children, onClose, autohide = false, delay = 3000, variant = "secondary" }) => (
  <ToastContainer className="position-fixed p-3" position="top-center">
    <Toast className="toast-message p-3" show={show} onClose={onClose} autohide={autohide} delay={delay}>
      <Toast.Header>
        <div className={`w-100 fw-bold text-${variant}`}>
          {title}
        </div>
      </Toast.Header>
      <Toast.Body>
        {children}
      </Toast.Body>
    </Toast>
  </ToastContainer>
);


export default ToastMessage;