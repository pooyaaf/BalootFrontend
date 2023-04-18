import React from "react";
import { Button } from "react-bootstrap";

const CommodityQuantity = ({
  commodity,
  handleIncrement,
  handleDecrement,
  getQuantity,
}) => {
  return (
    <td>
      <div className="d-flex align-items-center justify-content-center">
        <div className="in-card">
          <span>
            <Button onClick={() => handleDecrement(commodity.id)}>-</Button>
            {getQuantity(commodity.id)}
            <Button onClick={() => handleIncrement(commodity.id)}>+</Button>
          </span>
        </div>
      </div>
    </td>
  );
};

export default CommodityQuantity;
