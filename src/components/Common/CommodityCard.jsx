import React, { useState } from "react";
import commodityPic from "../../assets/img/commodity.png";
import CommodityQuantity from "../Page/Home/CommodityQuantity/CommodityQuantity";

const CommodityCard = ({
  commodity,
  handleIncrement,
  handleDecrement,
  getQuantity,
}) => {
  return (
    <div className="commodity">
      <a href="./product.html">
        <h2>{commodity.name}</h2>
      </a>
      <p>{commodity.stock}</p>
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
