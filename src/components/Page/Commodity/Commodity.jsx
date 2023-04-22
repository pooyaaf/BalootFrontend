import React from "react";
import star from "../../../assets/img/star.svg";
import product from "../../../assets/img/commodity.png";
import dislike from "../../../assets/img/dislike.png";
import like from "../../../assets/img/like.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Commodity.css";
import { Link } from "react-router-dom";

const Commodity = () => {
  return (
    <>
      <div className="product-box">
        <div className="product-image">
          <img src={product} alt="Product Image" />
        </div>
        <div className="product-details">
          <div className="product-title">
            <h2> Huawei nova 9 </h2>
            <div className="rating-number">
              <img src={star} />
              <span>
                4.1<span>(12)</span>
              </span>
            </div>
          </div>
          <div className="product-meta">
            <p>5 left in stock</p>
            <p>
              {" "}
              by <Link to="/provider"> Huawei </Link>{" "}
            </p>
            <p>
              Category(s): <span>Category 1, Category 2, Category 3</span>
            </p>
            <p>
              <strong>
                <span>300$</span>
              </strong>{" "}
              <button className="add-to-cart">Add to Cart</button>
            </p>
            <hr />
          </div>
          <div className="rating">
            <p>Rate Now:</p>
            <div className="star-rating-wrapper">
              <div className="star-rating">
                {/* The "for" attribute should match the "id" attribute of the input */}
                <input type="radio" name="star-rating" id="star-10" />
                <label htmlFor="star-10">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-9" />
                <label htmlFor="star-9">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-8" />
                <label htmlFor="star-8">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-7" />
                <label htmlFor="star-7">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-6" />
                <label htmlFor="star-6">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-5" />
                <label htmlFor="star-5">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-4" />
                <label htmlFor="star-4">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-3" />
                <label htmlFor="star-3">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-2" />
                <label htmlFor="star-2">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" id="star-1" />
                <label htmlFor="star-1">
                  <img src={star} />
                </label>
              </div>
            </div>
            <button className="submit-rating">Submit</button>
          </div>
        </div>
      </div>
      <div>
        <section class="comments">
          <h2>
            Comments <p> (2) </p>
          </h2>
          <div class="comment">
            <div class="comment-header">
              <p class="message"> This was awsome!!!!</p>
              <span class="date">2023-03-20</span>
              <span class="username">#username</span>
              <div class="helpful">
                <span class="helpful-label">Is this comment helpful?</span>
                <span>1</span>
                <button class="like">
                  <img src={like} alt="Like" />
                </button>
                <span>1</span>
                <button class="dislike">
                  <img src={dislike} alt="Dislike" />
                </button>
              </div>
            </div>
          </div>

          <div class="comment">
            <div class="comment-header">
              <p class="message"> This was awfulllllllllllllllllll!!!!</p>
              <span class="date"> 2023-03-20</span>
              <span class="username">#username</span>
              <div class="helpful">
                <span class="helpful-label">Is this comment helpful?</span>
                <span>1</span>{" "}
                <button class="like">
                  {" "}
                  <img src={like} alt="Like" />
                </button>
                <span>1</span>
                <button class="dislike">
                  <img src={dislike} alt="Dislike" />
                </button>
              </div>
            </div>
          </div>

          <form class="submit-opinion">
            <h3>Submit your opinion</h3>
            <input type="text" id="message" name="message" />
            <button type="submit" class="btn btn-primary">
              Post
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Commodity;
