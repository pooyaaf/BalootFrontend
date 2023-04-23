import React from "react";
import { Modal, Button } from "react-bootstrap";
import product from "../../../../assets/img/commodity.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Common/style.css";
import "../User.css";

const CartModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          /* Items List */
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={product}
                    alt="Product Image"
                    className="table-image"
                  />
                </td>
                <td>Galaxy S21</td>
                <td>$21000000</td>
              </tr>
            </tbody>
          </table>
        }
        {
          /* Discount Code Input */
          <div className="form-group">
            <label htmlFor="discountCode">Discount Code:</label>
            <input
              type="text"
              className="form-control"
              id="discountCode"
              placeholder="Enter discount code"
            />
          </div>
        }
        {
          /* Total Price */
          <div className="total-price">
            <h5>Total Price: $21000000</h5>
          </div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="btn-link  modalclose" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary " onClick={handleClose}>
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
