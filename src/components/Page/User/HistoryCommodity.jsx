import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./User.css";

const HistoryCommodity = ({
  commodity,
}) => {
  if (commodity.id === undefined) return <></>;
  const quantity = commodity.inCart;
  console.log(commodity);
  return (
    <>
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
          <td className="table-td-gray-color">{commodity.inCart}</td>
        </tr>
    </>
  );
};

export default HistoryCommodity;
