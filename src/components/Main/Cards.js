import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import SingleCard from "./SingleCard";

import mobileDeepEarth from "../../images/mobile/image-deep-earth.jpg";
import desktopDeepEarth from "../../images/desktop/image-deep-earth.jpg";
import mobileNightArcarde from "../../images/mobile/image-night-arcade.jpg";
import desktopNightArcarde from "../../images/desktop/image-night-arcade.jpg";
import mobileSoccerTeam from "../../images/mobile/image-soccer-team.jpg";
import desktopSoccerTeam from "../../images/desktop/image-soccer-team.jpg";
import mobileTheGrid from "../../images/mobile/image-grid.jpg";
import desktopTheGrid from "../../images/desktop/image-grid.jpg";
import mobileFromAbove from "../../images/mobile/image-from-above.jpg";
import desktopFromAbove from "../../images/desktop/image-from-above.jpg";
import mobilePocketBorealis from "../../images/mobile/image-pocket-borealis.jpg";
import desktopPocketBorealis from "../../images/desktop/image-pocket-borealis.jpg";
import mobileCuriosity from "../../images/mobile/image-curiosity.jpg";
import desktopCuriosity from "../../images/desktop/image-curiosity.jpg";
import mobileFisheye from "../../images/mobile/image-fisheye.jpg";
import desktopFisheye from "../../images/desktop/image-fisheye.jpg";

const CardsStyles = styled.section`

  margin: 6.4rem 1.6rem 6.4rem 1.6rem;
  max-width: 100%;

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      text-align: center;
    }
  }

  .grid {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-top: 3.2rem;
    margin-bottom: 2.27rem;
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .see-all-button {
    padding: 0.87rem 2.53rem;
    border: 1px solid black;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--black);
    letter-spacing: 0.33rem;
  }

  .see-all-button:hover {
    color: var(--white);
    background-color: var(--black);
  }

  .top .see-all-button {
      display: none;
  }

  @media (min-width: 700px) {
    margin: 10rem 3.5rem 10rem 3.5rem;

    .top {
      justify-content: space-between;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, 17.1rem);
    }

    .top .see-all-button {
      display: initial;
    }

    .bottom .see-all-button {
      display: none;
    }
  }

  @media (min-width: 1310px) {
    max-width: 80rem;
    margin: 0 auto 10rem auto;

    .grid {
      justify-content: space-between;
    }
  }
`;

const Cards = () => {
  return (
    <CardsStyles>
      <div className="top">
        <h2>Our Creations</h2>
        <Link to="/" className="see-all-button">
          See All
        </Link>
      </div>
      <div className="grid">
        <SingleCard  title="Deep Earth" mobileBgImage={mobileDeepEarth} desktopBgImage={desktopDeepEarth} />
        <SingleCard  title="Night Arcade" mobileBgImage={mobileNightArcarde} desktopBgImage={desktopNightArcarde} />
        <SingleCard  title="Soccer Team VR" mobileBgImage={mobileSoccerTeam} desktopBgImage={desktopSoccerTeam} />
        <SingleCard  title="The Grid" mobileBgImage={mobileTheGrid} desktopBgImage={desktopTheGrid} />
        <SingleCard  title="From Up Above VR" mobileBgImage={mobileFromAbove} desktopBgImage={desktopFromAbove} />
        <SingleCard  title="Pocket Borealis" mobileBgImage={mobilePocketBorealis} desktopBgImage={desktopPocketBorealis} />
        <SingleCard  title="The Curiosity" mobileBgImage={mobileCuriosity} desktopBgImage={desktopCuriosity} />
        <SingleCard  title="Make It Fisheye" mobileBgImage={mobileFisheye} desktopBgImage={desktopFisheye} />
      </div>
      <div className="bottom">
        <Link to="/" className="see-all-button">
          See All
        </Link>
      </div>
    </CardsStyles>
    
  )
}

export default Cards;