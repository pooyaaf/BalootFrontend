import React from "react";
import dislike from "../../../assets/img/dislike.png";
import like from "../../../assets/img/like.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Commodity.css";

const Comment = (commentInfo) => {
  console.log(commentInfo);
  if (commentInfo.commentInfo === undefined)
    return(<></>);
  return (
    <>
      <div class="comment">
            <div class="comment-header">
              <p class="message"> {commentInfo.commentInfo.text}</p>
              <span class="date">{commentInfo.commentInfo.date}</span>
              <span class="username">{commentInfo.commentInfo.username}</span>
              <div class="helpful">
                <span class="helpful-label">Is this comment helpful?</span>
                <span>{commentInfo.commentInfo.like}</span>
                <button class="like">
                  <img src={like} alt="Like" />
                </button>
                <span>{commentInfo.commentInfo.dislike}</span>
                <button class="dislike">
                  <img src={dislike} alt="Dislike" />
                </button>
              </div>
            </div>
          </div>
    </>
  );
};

export default Comment;
