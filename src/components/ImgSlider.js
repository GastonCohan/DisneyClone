import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
<<<<<<< HEAD
=======
import badag from '../assets/slider-badag.jpg';
import badging from '../assets/slider-badging.jpg';
import scale from '../assets/slider-scale.jpg';
import scales from '../assets/slider-scales.jpg';
>>>>>>> gh-pages

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
<<<<<<< HEAD
          <img src="/assets/slider-badag.jpg" alt="" />
=======
        <img src={badag} alt="badag" />
>>>>>>> gh-pages
        </a>
      </Wrap>
      <Wrap>
        <a>
<<<<<<< HEAD
          <img src="/assets/slider-badging.jpg" alt="" />
=======
        <img src={badging} alt="badging" />
>>>>>>> gh-pages
        </a>
      </Wrap>
      <Wrap>
        <a>
<<<<<<< HEAD
          <img src="/assets/slider-scale.jpg" alt="" />
=======
        <img src={scale} alt="scale" />
>>>>>>> gh-pages
        </a>
      </Wrap>
      <Wrap>
        <a>
<<<<<<< HEAD
          <img src="/assets/slider-scales.jpg" alt="" />
=======
        <img src={scales} alt="scales" />
>>>>>>> gh-pages
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    border-color: white;
    transition-duration: 100ms;
  }
`;

export default ImgSlider;
