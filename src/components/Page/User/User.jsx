import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import product from "../../../assets/img/commodity.png";
import productmamaspagetti from "../../../assets/img/momsSp.png";
import productmic from "../../../assets/img/mic.png";
import shopcardicon from "../../../assets/img/Cart.png";
import usericon from "../../../assets/img/User.png";
import mailicon from "../../../assets/img/Mail.png";
import locationicon from "../../../assets/img/Location.png";
import calendericon from "../../../assets/img/Calender.png";
import historyicon from "../../../assets/img/History.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./User.css";

const User = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <main>
      <div className="user-box">
        <div className="user-details">
          <div className="user-meta">
            <p>
              <img src={usericon} alt="User" className="User" />
              <span className="user-box-info"> Marshal</span>
            </p>
            <p>
              {" "}
              <img src={mailicon} alt="Mail" className="Mail" />
              <span className="user-box-info"> example@gmail.com</span>
            </p>
            <p>
              {" "}
              <img src={calendericon} alt="Calender" className="Calender" />
              <span className="user-box-info"> 1972/10/17</span>
            </p>
            <p>
              {" "}
              <img src={locationicon} alt="Location" className="Location" />
              <span className="user-box-info">
                {" "}
                20785 Schultes Avenue, Warren, MI 48091
              </span>
            </p>
          </div>
        </div>
        <div className="credit">
          <form action="" method="post">
            <div className="form-group">
              <label for="currentAmount">$10000000</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="amountInput"
                placeholder="$Amount"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Add More Credit
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="cart">
          <p className="text-left section-title">
            <img src={shopcardicon} alt="Cart" className="Cart" />
            Cart
          </p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Price</th>
                  <th scope="col">Provider ID</th>
                  <th scope="col">Rating</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">In Cart</th>
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
                  <td className="table-td-gray-color">Galaxy S21</td>
                  <td className="table-td-gray-color">Technology, Phone</td>
                  <td className="table-td-gray-color">$21000000</td>
                  <td className="table-td-gray-color">1234</td>
                  <td className="table-td-gold-color">8.3</td>
                  <td className="table-td-red-color">17</td>
                  <td>
                    <div className="in-card">
                      <button className="btn minus">−</button>
                      <span> 1 </span>
                      <button className="btn plus">+</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="pay-now-button btn"
            onClick={handleShow}
          >
            Pay now!
          </button>
        </div>

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

        <div className="history">
          <p className="section-title">
            <img src={historyicon} alt="History" className="History" />
            History
          </p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Price</th>
                  <th scope="col">Provider ID</th>
                  <th scope="col">Rating</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={productmamaspagetti}
                      alt="Product Image"
                      className="table-image"
                    />
                  </td>
                  <td className="table-td-gray-color">Mom's Spaghetti</td>
                  <td className="table-td-gray-color">Food</td>
                  <td className="table-td-gray-color">$6000</td>
                  <td className="table-td-gray-color">313</td>
                  <td className="table-td-gold-color">10</td>
                  <td className="table-td-red-color">0</td>
                  <td className="table-td-gray-color">3</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <img
                      src={productmic}
                      alt="Product Image"
                      className="table-image"
                    />
                  </td>
                  <td className="table-td-gray-color">Dre's Microphone</td>
                  <td className="table-td-gray-color">Technology</td>
                  <td className="table-td-gray-color">$42000000</td>
                  <td className="table-td-gray-color">4321</td>
                  <td className="table-td-gold-color">8.5</td>
                  <td className="table-td-red-color">22</td>
                  <td className="table-td-gray-color">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;
