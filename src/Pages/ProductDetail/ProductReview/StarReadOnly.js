/* eslint-disable prettier/prettier */
// import React, { useEffect, useState } from "react";
import StarRating from "react-svg-star-rating";

function StarReadOnly({ size, rate }) {
  return (
    <div className="StarReadOnly">
      <StarRating
        isHalfRating={true}
        isReadOnly={true}
        size={size}
        initialRating={rate}
        activeColor={"#35c5f0"}
      />
    </div>
  );
}

export default StarReadOnly;
