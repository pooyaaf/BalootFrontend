import React, { useState } from "react";
import commodityPic from "../../assets/img/commodity.png";
import CommodityQuantity from "../Page/Home/CommodityQuantity/CommodityQuantity";
import { Link } from "react-router-dom";

const CommodityCard = ({
  commodity,
  handleIncrement,
  handleDecrement,
  getQuantity,
}) => {
  return (
    <div className="commodity">
      <Link to="/product">
        <h2>{commodity.name}</h2>
      </Link>
      <p>{commodity.inStock} left in stock</p>
      <img
        src={commodity.image || commodityPic}
        alt={`Commodity ${commodity.id}`}
      />
      <p className="price">{`$${commodity.price}`}</p>
      {getQuantity(commodity.id) === 0 ? (
        <button className="btn" onClick={() => handleIncrement(commodity.id)}>
          Add to Cart
        </button>
      ) : (
        <CommodityQuantity
          commodity={commodity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          getQuantity={getQuantity}
        />
      )}
    </div>
  );
};

export default CommodityCard;
