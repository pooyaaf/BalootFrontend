import React, { useState, useEffect } from "react";
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
import CartModal from "./CardModal/CartModal";
import CartCommodity from "./CartCommodity";
import HistoryCommodity from "./HistoryCommodity";
import AmountModal from "./CardModal/AmountModal";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [quantity, setQuantity] = useState(1);
  //amount
  const [currentAmount, setCurrentAmount] = useState(10000000);
  const [buyList, setBuyList] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [enteredAmount, setEnteredAmount] = useState("");
  async function updateUserAmount() {
    const response = await fetch(
      `http://localhost:8080/credit?credit=${parseFloat(enteredAmount)}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        mode: "cors",
      }
    );
    if (response.ok) {
      console.log("Add credit succussfuly");
    } else {
      console.log("Add credit unsuccussfuly!");
    }
  }
  const handleConfirmationShow = (event) => {
    event.preventDefault();
    setShowConfirmationModal(true);
  }
  const handleConfirmationClose = () => {
    const newAmount = parseFloat(enteredAmount);
    setCurrentAmount(currentAmount + newAmount);
    setShowConfirmationModal(false);
    updateUserAmount();
  };
  const handleNotConfirmationClose = () => {
    setShowConfirmationModal(false);
  };
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities({ ...quantities, [id]: (quantities[id] || 0) + 1 });
  };

  const handleDecrement = (id) => {
    if (quantities[id] > 0) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const getQuantity = (id) => {
    return quantities[id] || 0;
  };

  const navigate = useNavigate(); // add this

  const handleLogoutSuccess = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("username", "#Username");
    navigate("/login"); // use `navigate` to go to the login page
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/buyList`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (response.ok) {
          console.log("BuyList fetch succussfuly");
        } else {
          console.log("BuyList fetch unsuccussfuly!");
        }
        return response.json();
      })
      .then((data) => {
        setBuyList(data);
        setCurrentAmount(data.userModel.credit);
      });
  }, []);

  if (buyList.userModel === undefined)
    return (<></>);

  return (
    <main>
      <div className="user-box">
        <div className="user-details">
          <div className="user-meta">
            <p>
              <img src={usericon} alt="User" className="User" />
              <span className="user-box-info"> {buyList.userModel.username}</span>
            </p>
            <p>
              {" "}
              <img src={mailicon} alt="Mail" className="Mail" />
              <span className="user-box-info"> {buyList.userModel.email}</span>
            </p>
            <p>
              {" "}
              <img src={calendericon} alt="Calender" className="Calender" />
              <span className="user-box-info"> {buyList.userModel.birthDate}</span>
            </p>
            <p>
              {" "}
              <img src={locationicon} alt="Location" className="Location" />
              <span className="user-box-info">
                {" "}
                {buyList.userModel.address}
              </span>
            </p>
            <p>
              <Button variant="primary" onClick={handleLogoutSuccess}>
                logout
              </Button>
            </p>
          </div>
        </div>
        <div className="credit">
          <form action="" method="post">
            <div className="form-group">
              <label htmlFor="currentAmount">${currentAmount}</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="amountInput"
                placeholder="$Amount"
                value={enteredAmount}
                onChange={(e) => setEnteredAmount(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleConfirmationShow}
            >
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
                {buyList.buyList.map((commodity) => (
                  <CartCommodity
                    commodity={commodity}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    getQuantity={getQuantity}
                  />
                ))}
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

        <CartModal show={show} handleClose={handleClose} />

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
                {buyList.purchasedList.map((commodity) => (
                  <HistoryCommodity
                    commodity={commodity}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <AmountModal
          show={showConfirmationModal}
          handleClose={handleClose}
          handleNotConfirmationClose={handleNotConfirmationClose}
          handleConfirmationClose={handleConfirmationClose}
          enteredAmount={enteredAmount}
        />
      </div>
    </main>
  );
};

export default User;
