import React from "react";

async function AllCommodities() {
  const response = await fetch(`http://127.0.0.1:8080/commodities`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "GET",
    mode: "cors",
  }).then((response) => {
    if (response.ok) {
      console.log("Commodities fetch succussfuly");
    } else {
      console.log("Commodities fetch unsuccussfuly!");
    }
    return response.json();
  });
  let commodities = [];
  response.commoditiesList.forEach((item) => {
    let commodity = {};
    commodity.id = item.id;
    commodity.name = item.name;
    commodity.inStock = item.inStock;
    commodity.image = item.image;
    commodity.price = item.price;
    commodities.push(commodity);
  });
  return commodities;
}

export default AllCommodities;
