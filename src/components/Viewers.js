import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
=======
import disneyImage from '../assets/viewers-disney.png';
import marvelImage from '../assets/viewers-marvel.png';
import nationalImage from '../assets/viewers-national.png';
import starwarsImage from '../assets/viewers-starwars.png';
import pixarImage from '../assets/viewers-pixar.png';
import disneyVideo from '../videos/1564674844-disney.mp4';
import marvelVideo from '../videos/1564676115-marvel.mp4';
import nationalVideo from '../videos/1564676296-national-geographic.mp4';
import starwarsVideo from '../videos/1608229455-star-wars.mp4';
import pixarVideo from '../videos/1564676714-pixar.mp4';
>>>>>>> gh-pages

const Viewers = () => {
  return (
    <Container>
      <Wrap>
<<<<<<< HEAD
        <img src="/assets/viewers-disney.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/assets/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/assets/viewers-national.png" alt="national" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap>
        <img src="/assets/viewers-starwars.png" alt="starwars" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/assets/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
=======
        <img src={disneyImage} alt="disney" />
        <video autoPlay loop playsInline muted>
          <source src={disneyVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={marvelImage} alt="marvel" />
        <video autoPlay loop playsInline muted>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={nationalImage} alt="national" />
        <video autoPlay loop playsInline muted>
          <source src={nationalVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={starwarsImage} alt="starwars" />
        <video autoPlay loop playsInline muted>
          <source src={starwarsVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={pixarImage} alt="pixar" />
        <video autoPlay loop playsInline muted>
          <source src={pixarVideo} type="video/mp4" />
>>>>>>> gh-pages
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
