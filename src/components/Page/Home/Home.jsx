import React, { useState } from "react";
import ToggleOn from "../../../assets/img/toggle-on.png";
import ToggleOff from "../../../assets/img/toggle-off.png";
import commodityPic from "../../../assets/img/commodity.png";
import "./Home.css";

const Home = () => {
  const [showAvailableCommodities, setShowAvailableCommodities] =
    useState(false);
  const [sortBy, setSortBy] = useState("");

  const sortByName = () => {
    setSortBy("name");
  };

  const sortByPrice = () => {
    setSortBy("price");
  };

  const commodities = [
    {
      name: "Huawei nova 9",
      stock: "1 left in stock",
      image: commodityPic,
      price: 300,
    },
    {
      name: "Samsung Galaxy S21",
      stock: "0 left in stock",
      image: commodityPic,
      price: 400,
    },
    {
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
              <div className="commodity" key={index}>
                <a href="./product.html">
                  <h2>{commodity.name}</h2>
                </a>
                <p>{commodity.stock}</p>
                <img src={commodity.image} alt={`Commodity ${index}`} />
                <p className="price">{`$${commodity.price}`}</p>
                <button className="btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
