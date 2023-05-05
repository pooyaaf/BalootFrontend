import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./User.css";
import CommodityQuantity from "../Home/CommodityQuantity/CommodityQuantity";

const CartCommodity = ({
  commodity,
  handleIncrement,
  handleDecrement,
  getQuantity,
}) => {
  if (commodity.id === undefined) return <></>;
  const quantity = commodity.inCart;
  console.log(commodity);
  return (
    <>
      {quantity > 0 ? (
        <tr>
          <td>
            <img
              src={commodity.image}
              alt="Product Image"
              className="table-image"
            />
          </td>
          <td className="table-td-gray-color">{commodity.name}</td>
          <td className="table-td-gray-color">
            {commodity.categories.toString()}
          </td>
          <td className="table-td-gray-color">${commodity.price}</td>
          <td className="table-td-gray-color">{commodity.providerId}</td>
          <td className="table-td-gold-color">{commodity.rating}</td>
          <td className="table-td-red-color">{commodity.inStock}</td>
          <CommodityQuantity
            commodity={commodity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            getQuantity={getQuantity}
          />
        </tr>
      ) : (
        <tr>
          <td colSpan="8" className="emptyCart">
            your cart is empty
          </td>
        </tr>
      )}
    </>
  );
};

export default CartCommodity;
