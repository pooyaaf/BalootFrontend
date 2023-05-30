import React from "react";
import dislike from "../../../assets/img/dislike.png";
import like from "../../../assets/img/like.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Common/style.css";
import "./Commodity.css";

const Comment = (commentInfo) => {
  console.log(commentInfo);
  const handleLikeSubmit = (event) => {handleVoteCommentSubmit(event, 1);};
  const handleDisikeSubmit = (event) => {handleVoteCommentSubmit(event, -1);};
  async function handleVoteCommentSubmit(event, vote) {
    event.preventDefault();
    const response = await fetch(
      `http://127.0.0.1:8080/voteComment/${commentInfo.commentInfo.id}?comment_id=${vote}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
      }
    );
    if (response.ok) {
      console.log("Vote comment succussfuly");
    } else {
      console.log("Vote comment unsuccussfuly!");
    }
  }
  if (commentInfo.commentInfo === undefined)
    return(<></>);
  return (
    <>
      <div className="comment">
            <div className="comment-header">
              <p className="message"> {commentInfo.commentInfo.text}</p>
              <span className="date">{commentInfo.commentInfo.date}</span>
              <span className="username">{commentInfo.commentInfo.username}</span>
              <div className="helpful">
                <span className="helpful-label">Is this comment helpful?</span>
                <span>{commentInfo.commentInfo.like}</span>
                <button className="like" onClick={handleLikeSubmit}>
                  <img src={like} alt="Like" />
                </button>
                <span>{commentInfo.commentInfo.dislike}</span>
                <button className="dislike" onClick={handleDisikeSubmit}>
                  <img src={dislike} alt="Dislike" />
                </button>
              </div>
            </div>
          </div>
    </>
  );
};

export default Comment;
