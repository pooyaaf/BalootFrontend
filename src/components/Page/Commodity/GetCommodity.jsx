import React from "react";

async function GetCommodity(id) {
  const response = await fetch(
    `http://127.0.0.1:8080/commodities/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
      mode: "cors",
    }
  ).then((response) => {
    if (response.ok) {
      console.log("Commodity fetch succussfuly");
    } else {
      console.log("Commodity fetch unsuccussfuly!");
    }
    return response.json();
  });
  return response;
}

export default GetCommodity;
