/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import StarRating from "react-svg-star-rating";

function StarRated() {
  const [rating3, setRating3] = useState(0);

  const handleOnClick3 = rating => {
    setRating3(rating);
  };

  return (
    <div className="StarRated">
      <h1>Customzie Color</h1>
      <StarRating
        activeColor={"#1050ff"}
        hoverColor={"#99b5ff"}
        handleOnClick={handleOnClick3}
      />
      <div>rating: {rating3}</div>
    </div>
  );
}

export default StarRated;
