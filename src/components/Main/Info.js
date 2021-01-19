import React from "react";
import styled from 'styled-components';
import interactive from "../../images/desktop/image-interactive.jpg"

const InfoStyles = styled.article`

  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0 1.6rem 6.4rem 1.6rem; */
  width: 100%;
  max-width: 100%;

  img {
    width: 100%;
    max-width: 48.73rem;
    padding: 0 1.6rem 0 1.6rem;
  }

  .info-text {
    padding: 2rem 1.6rem 0 1.6rem;
    width: 100%;
    text-align: center;

    p {
      color: var(--very-dark-grey);
      line-height: 1.7;
      margin-top: 2rem;
    }
  }

  @media (min-width: 700px) {
    img {
      padding: 0 3.5rem 0 3.5rem;
    }
    .info-text {
      padding: 2rem 3.5rem 0 3.5rem;
    }

  @media (min-width: 1310px) {
    position: relative;
    max-width: 80rem;
    margin: 0 auto 10rem auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .info-text {
      position: absolute;
      bottom: 0;
      right: 0;
      background: var(--white);
      padding: 6rem 0 0 6rem;
      max-width: 50%;
    }
  }
`;

const Info = () => {
  return (
    <InfoStyles>
      <img src={interactive} alt="interactive VR" />
      <div className="info-text">
        <h2>The Leader In Interactive VR</h2>
        <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
        </p>
      </div>
    </InfoStyles>
  )
}

export default Info;