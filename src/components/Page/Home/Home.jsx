import React, { useState } from "react";
import ToggleOn from "../../../assets/img/toggle-on.png";
import ToggleOff from "../../../assets/img/toggle-off.png";
import "./Home.css";
import CommodityCard from "../../Common/CommodityCard";
import { Pagination } from "react-bootstrap";
import DummyCommodity from "./DummyCommodity";

const Home = () => {
  const [showAvailableCommodities, setShowAvailableCommodities] =
    useState(false);
  const [sortBy, setSortBy] = useState("");
  const [quantities, setQuantities] = useState({});
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(12);

  const sortByName = () => {
    setSortBy("name");
  };

  const sortByPrice = () => {
    setSortBy("price");
  };

  const commodities = DummyCommodity();

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

  const totalPages = Math.ceil(sortedCommodities().length / postPerPage);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = sortedCommodities().slice(firstPostIndex, lastPostIndex);

  const handlePageChange = (pageNumber) => {
    setcurrentPage(pageNumber);
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
            {currentPosts.map((commodity, index) => (
              <CommodityCard
                commodity={commodity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                getQuantity={getQuantity}
              />
            ))}
          </div>
          <div>
            <Pagination>
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index}
                  className={
                    index + 1 === currentPage
                      ? "activeBtn pagination-item"
                      : "normalBtn pagination-item"
                  }
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
