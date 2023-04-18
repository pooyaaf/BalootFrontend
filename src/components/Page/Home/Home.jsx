import React, { useState } from "react";
import ToggleOn from "../../../assets/img/toggle-on.png";
import ToggleOff from "../../../assets/img/toggle-off.png";
import commodityPic from "../../../assets/img/commodity.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <main>
        <section className="commodities">
          <div className="section">
            <div className="commodities-toggle d-flex align-items-center justify-content-between">
              <h2>Available Commodities</h2>
              <div className="available-commodities-toggle form-check form-switch">
                <a href="#">
                  <img src={ToggleOff} className="toggle-off" />
                  <div className="overlay">
                    <img src={ToggleOn} className="toggle-on" />
                  </div>
                </a>
              </div>
            </div>
            <div className="sort-options">
              <label>Sort by:</label>
              <button className="sort-button" data-sort="name">
                Name
              </button>
              <button className="sort-button" data-sort="price">
                Price
              </button>
            </div>
          </div>

          <div className="commodities-list">
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="commodity">
              <a href="./product.html">
                <h2>Huawei nova 9</h2>
              </a>
              <p>1 left in stock</p>
              <img src={commodityPic} alt="Commodity 1" />
              <p className="price">300$</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
