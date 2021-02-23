import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";

class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
    };

    return (
      <div className="slider">
        <div className="slideName">가구</div>
        <Slider {...settings}>
          <div className="slideWrapper">
            <img
              alt="이미지"
              src="https://cdn.pixabay.com/photo/2017/07/31/14/56/apartment-2558277_1280.jpg"
            />
          </div>
          <div className="slideWrapper">
            <img
              alt="이미지"
              src="https://cdn.pixabay.com/photo/2018/10/28/12/44/interior-3778708_1280.jpg"
            />
          </div>
          <div className="slideWrapper">
            <img
              alt="이미지"
              src="https://cdn.pixabay.com/photo/2019/03/03/15/54/shelves-4032134_1280.jpg"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
