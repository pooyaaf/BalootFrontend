import React, { useState, setState } from "react";
import star from "../../../assets/img/star.svg";
import dislike from "../../../assets/img/dislike.png";
import like from "../../../assets/img/like.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Commodity.css";
import GetCommodity from "./GetCommodity";
import Comment from "./Comment";
import CommodityCard from "../../Common/CommodityCard";
import { Link, useParams } from "react-router-dom";


const Commodity = () => {
  const { id } = useParams();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const [ratingNumber, setRatingNumber] = useState(0);
  const [rating, setRating] = useState(0);
  const [commodityInfo, setCommodity] = useState({});
  const [activeFetch, setActiveFetch] = useState(true);
  const [quantities, setQuantities] = useState({});
  const [commentText, setCommentText] = useState("");

  function handleCommentTextChange(event) {
    setCommentText(event.target.value);
  }

  const increamentRatingNumber = () => {
    setRatingNumber(ratingNumber + 1);
  }
  async function handlePostCommentSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `http://127.0.0.1:8080/addComment/${id}?comment=${commentText}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
      }
    );
    if (response.ok) {
      console.log("Post comment succussfuly");
      setActiveFetch(true);
    } else {
      console.log("Post comment unsuccussfuly!");
    }
  }
  async function handleRateCommoditySubmit() {
    const response = await fetch(
      `http://127.0.0.1:8080/rateCommodity/${id}?comment_id=${rating}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
      }
    );
    if (response.ok) {
      console.log("Rate commodity succussfuly");
      setActiveFetch(true);
    } else {
      console.log("Rate commodity unsuccussfuly!");
    }
  }
  const updateCommodity = (getCommodityInfo) => {
    setCommodity(getCommodityInfo);
    setActiveFetch(false);
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
  const handleRateCommodity = () => {
    handleRateCommoditySubmit();
    setActiveFetch(true);
  }

  if (activeFetch === true)
    GetCommodity(id).then((getCommodityInfo) => {updateCommodity(getCommodityInfo)});
  if (commodityInfo.commodityShortModel === undefined || commodityInfo.commodityShortModel.commentsList == undefined)
    return(<></>);

  return (
    <>
      <div className="product-box">
        <div className="product-image">
          <img src={commodityInfo.commodityShortModel.commodityModel.image} alt="Product Image" />
        </div>
        <div className="product-details">
          <div className="product-title">
            <h2> {commodityInfo.commodityShortModel.commodityModel.name} </h2>
            <div className="rating-number">
              <img src={star} />
              <span>
              {commodityInfo.commodityShortModel.commodityModel.rating}<span>({ratingNumber})</span>
              </span>
            </div>
          </div>
          <div className="product-meta">
            <p>{commodityInfo.commodityShortModel.commodityModel.inStock} left in stock</p>
            <p>
              {" "}
              by <Link to="/provider"> {commodityInfo.commodityShortModel.commodityModel.providerId} </Link>{" "}
            </p>
            <p>
              Category(s): <span>{commodityInfo.commodityShortModel.commodityModel.categories.toString()}</span>
            </p>
            <p>
              <strong>
                <span>{commodityInfo.commodityShortModel.commodityModel.price}$</span>
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
                <input type="radio" name="star-rating" value="10" id="star-10" onClick={() => setRating(10)} />
                <label htmlFor="star-10">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="9" id="star-9" onClick={() => setRating(9)} />
                <label htmlFor="star-9">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="8" id="star-8" onClick={() => setRating(8)} />
                <label htmlFor="star-8">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="7" id="star-7" onClick={() => setRating(7)} />
                <label htmlFor="star-7">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="6" id="star-6" onClick={() => setRating(6)} />
                <label htmlFor="star-6">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="5" id="star-5" onClick={() => setRating(5)} />
                <label htmlFor="star-5">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="4" id="star-4" onClick={() => setRating(4)} />
                <label htmlFor="star-4">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="3" id="star-3" onClick={() => setRating(3)} />
                <label htmlFor="star-3">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="2" id="star-2" onClick={() => setRating(2)} />
                <label htmlFor="star-2">
                  <img src={star} />
                </label>
                <input type="radio" name="star-rating" value="1" id="star-1" onClick={() => setRating(1)} />
                <label htmlFor="star-1">
                  <img src={star} />
                </label>
              </div>
            </div>
            <button className="submit-rating" onClick={handleRateCommodity}>Submit</button>
          </div>
        </div>
      </div>
      <div>
        <section className="comments">
          <h2>
            Comments <p> ({commodityInfo.commodityShortModel.commentsList.length}) </p>
          </h2>
          {commodityInfo.commodityShortModel.commentsList.map((comment) => (
              <Comment
                commentInfo={comment}
              />
            ))}
          <form className="submit-opinion" onSubmit={handlePostCommentSubmit}>
            <h3>Submit your opinion</h3>
            <input type="text" id="message" name="message" value={commentText} onChange={handleCommentTextChange}/>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        </section>
      </div>
      {isLoggedIn &&
        <div>
          <h2 className="all-provided-commodities">All provided commodities</h2>
          <div className="commodities-list">
            {commodityInfo.suggestedCommoditiesModel.commoditiesList.map((commodity) => (
              <CommodityCard
                commodity={commodity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                getQuantity={getQuantity}
              />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Commodity;
