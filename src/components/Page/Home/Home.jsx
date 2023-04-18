import React, { useState } from "react";
import ToggleOn from "../../../assets/img/toggle-on.png";
import ToggleOff from "../../../assets/img/toggle-off.png";
import commodityPic from "../../../assets/img/commodity.png";
import "./Home.css";
import { Button } from "react-bootstrap";
import CommodityCard from "../../Common/CommodityCard";

const Home = () => {
  const [showAvailableCommodities, setShowAvailableCommodities] =
    useState(false);
  const [sortBy, setSortBy] = useState("");
  const [quantities, setQuantities] = useState({});

  const sortByName = () => {
    setSortBy("name");
  };

  const sortByPrice = () => {
    setSortBy("price");
  };

  const commodities = [
    {
      id: 1,
      name: "Huawei nova 9",
      stock: "1 left in stock",
      image: commodityPic,
      price: 300,
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      stock: "0 left in stock",
      image: commodityPic,
      price: 400,
    },
    {
      id: 3,
      name: "iPhone 13 Pro",
      stock: "3 left in stock",
      image: commodityPic,
      price: 1200,
    },
  ];

  const sortedCommodities = () => {
    let sorted = commodities;
    if (sortBy === "name") {
      sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }
    return showAvailableCommodities
      ? sorted.filter((c) => c.stock !== "0 left in stock")
      : sorted;
  };

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

  return (
    <div>
      <main>
        <section className="commodities">
          <div className="section">
            <div className="commodities-toggle d-flex align-items-center justify-content-between">
              <h2>Available Commodities</h2>
              <div className="available-commodities-toggle form-check form-switch">
                <a
                  href="#"
                  onClick={() =>
                    setShowAvailableCommodities(!showAvailableCommodities)
                  }
                >
                  <img
                    src={showAvailableCommodities ? ToggleOn : ToggleOff}
                    className="toggle-off"
                  />
                  <div className="overlay">
                    <img src={ToggleOn} className="toggle-on" />
                  </div>
                </a>
              </div>
            </div>
            <div className="sort-options">
              <label>Sort by:</label>
              <button className="sort-button" onClick={sortByName}>
                Name
              </button>
              <button className="sort-button" onClick={sortByPrice}>
                Price
              </button>
            </div>
          </div>
          <div className="commodities-list">
            {sortedCommodities().map((commodity, index) => (
              <CommodityCard
                commodity={commodity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                getQuantity={getQuantity}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
