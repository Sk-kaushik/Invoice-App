import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Prompt = ({ show, handleClose }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSpinner = (e) => {
    let modalEmail = document.querySelector(`input[name="modalEmail"]`);

    if (modalEmail.value) {
      setShowSpinner(true);
      setTimeout(() => {
        handleClose();
        setShowSpinner(false);
      }, 2000);
    } else {
      modalEmail.style.borderColor = "red";
      document.querySelector("#emailHelp").style.display = "block";
    }
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      id="modal"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="email"
          className="form-control w-75"
          placeholder="Enter email"
          name="modalEmail"
        />
        <small
          id="emailHelp"
          className="form-text text-danger"
          style={{ display: "none" }}
        >
          Please fill the box
        </small>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSpinner}>
          {showSpinner ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <span>Send</span>
          )}
        </Button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};

export default Prompt;
