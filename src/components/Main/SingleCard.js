import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const SingleCardStyles = styled.div`
  height: 8rem;
  background-image: url(${({mobileBgImage}) => mobileBgImage});
  background-size: cover;
  background-position: center;
  position: relative;

  :hover a::after {
    content:'';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--dark-gray);
    opacity: 0.7;
  }

  a {
      text-decoration: none;
      color: white;
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      padding-bottom: 1.5rem;
      padding-left: 1.5rem;

      @media (min-width: 700px) {
        padding-bottom: 2.5rem;
        padding-left: 2.5rem;
      }

      h3 {
          max-width: 11.5rem;
          z-index: 2;
      }
  }

  
  @media (min-width: 700px) {
      height: 30rem;
      max-width: 17rem;
      background-image: url(${({desktopBgImage}) => desktopBgImage});
  }
`;

const SingleCard = ({ mobileBgImage, desktopBgImage, title }) => {
  return (
    <SingleCardStyles mobileBgImage={mobileBgImage} desktopBgImage={desktopBgImage}>
      <Link to="#">
        <h3>{title}</h3>
      </Link>
    </SingleCardStyles>
  )
}

export default SingleCard;