import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
// import "../Home.css";
import "../../User/User.css";
const CommodityQuantity = ({
  commodity,
  handleIncrement,
  handleDecrement,
  getQuantity,
}) => {
  const handleAddToBuyListSubmit = () => {
    handleAddToBuyList();
    handleIncrement(commodity.id);
  };
  const handleRemoveFromBuyListSubmit = () => {
    handleRemoveFromBuyList();
    handleDecrement(commodity.id);
  };
  async function handleAddToBuyList() {
    const response = await fetch(
      `http://127.0.0.1:8080/addToBuyList/${commodity.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
      }
    );
    if (response.ok) {
      console.log("Add to buyLit succussfuly");
    } else {
      console.log("Add to buyLit unsuccussfuly!");
    }
  }
  async function handleRemoveFromBuyList() {
    const response = await fetch(
      `http://127.0.0.1:8080/removeFromBuyList?commodityId=${commodity.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
      }
    );
    if (response.ok) {
      console.log("Remove from buyLit succussfuly");
    } else {
      console.log("Remove from buyLit unsuccussfuly!");
    }
  }
  return (
    <td>
      <div className="in-card">
        <button className="btn minus" onClick={handleRemoveFromBuyListSubmit}>
          −
        </button>

        <span>{getQuantity(commodity.id)}</span>

        <button className="btn plus" onClick={handleAddToBuyListSubmit}>
          +
        </button>
      </div>
    </td>
  );
};

export default CommodityQuantity;
