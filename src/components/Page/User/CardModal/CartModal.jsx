import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import product from "../../../../assets/img/commodity.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Common/style.css";
import "../User.css";

const CartModal = ({ show, handleClose, buyList, buyListPrice }) => {
  const [discount, setDiscount] = useState("");
  const [activeDiscount, setActiveDiscount] = useState(false);

  const handleBuySubmit = () => {
    paymentHandler();
    handleClose();
  };
  const hadnleDiscount = async () => {
    const response = await fetch(
      `http://localhost:8080/addDiscount?discount=${discount}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
        mode: "cors",
      }
    );
    if (response.ok) {
      console.log("Applied Discount!");
      setActiveDiscount(true);
    } else {
      console.log("Discount unsuccussfuly!");
    }
  };

  async function paymentHandler() {
    const response = await fetch(`http://localhost:8080/payment`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      mode: "cors",
    });
    if (response.ok) {
      console.log("Payment succussfuly");
    } else {
      console.log("Payment unsuccussfuly!");
    }
  }
  const calculatePrice = (buyList) => {
    let price = 0;
    buyList.forEach((commodity) => {
      price += commodity.inCart * commodity.price;
    });

    return price;
  };
  const totalPrice = calculatePrice(buyList);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          /* Items List */
          <ul>
            {buyList.map((commodity) => (
              <li className="buyListItem">
                {commodity.name} &#10005; {commodity.inCart} ${commodity.price}
              </li>
            ))}
          </ul>
        }
        {
          /* Discount Code Input */
          <div className="form-group">
            <label htmlFor="discountCode">Discount Code:</label>
            <input
              type="text"
              className="form-control col-10"
              id="discountCode"
              placeholder="Enter discount code"
              value={discount}
              onChange={(event) => {
                setDiscount(event.target.value);
              }}
            />
            <Button
              variant="primary"
              classNAme="col-2"
              onClick={hadnleDiscount}
            >
              Discount
            </Button>
          </div>
        }
        {
          /* Total Price */
          <div className="total-price">
            <h5> Total Price: {totalPrice}</h5>
            {activeDiscount && <h5>with discount: {buyListPrice}</h5>}
          </div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="btn-link  modalclose" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary " onClick={handleBuySubmit}>
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
