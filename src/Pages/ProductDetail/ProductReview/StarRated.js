/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import StarRating from "react-svg-star-rating";

function StarRated({ size, rate }) {
  const [rating3, setRating3] = useState(0);

  const handleOnClick3 = rating => {
    setRating3(rating);
  };

  return (
    <div className="StarRated">
      <StarRating
        size={size}
        initialRating={rate}
        activeColor={"#35c5f0"}
        hoverColor={"#a2e3f7"}
        handleOnClick={handleOnClick3}
        rating={rating3}
      />
    </div>
  );
}

export default StarRated;
