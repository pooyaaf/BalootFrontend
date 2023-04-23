import React from "react";
import { Modal, Button } from "react-bootstrap";

const AmountModal = ({
  show,
  handleClose,
  handleNotConfirmationClose,
  handleConfirmationClose,
  enteredAmount,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add More Credit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to add {enteredAmount} to your credit?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleNotConfirmationClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirmationClose}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AmountModal;
