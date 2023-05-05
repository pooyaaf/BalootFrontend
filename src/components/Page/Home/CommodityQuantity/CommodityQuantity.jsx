import React from "react";
import { Button } from "react-bootstrap";

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
      <div className="d-flex align-items-center justify-content-center">
        <div className="in-card">
          <span>
            <Button onClick={handleRemoveFromBuyListSubmit}>-</Button>
            {getQuantity(commodity.id)}
            <Button onClick={handleAddToBuyListSubmit}>+</Button>
          </span>
        </div>
      </div>
    </td>
  );
};

export default CommodityQuantity;
