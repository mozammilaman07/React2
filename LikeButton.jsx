import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [like, setLike] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setLike(like + 1);
  };
  let likeStyle = { color: "red" };

  return (
    <div>
      <p>Like {like}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
