import React from "react";
import styled from 'styled-components';
import MobileNav from './MobileNav';
import DesktopNav from './DeskopNav';
import desktopHeroImage from '../../images/desktop/image-hero.jpg';
import mobileHeroImage from '../../images/mobile/image-hero.jpg';

const HeaderStyles = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${mobileHeroImage});
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 6.4rem;

  .title-wrapper {
    max-width: 100%;
    margin: 50% 1.6rem 6.4rem 1.6rem;
  }

  .title-inner {
    border: 2px solid var(--white);
    padding: 1.5rem;

    h1 {
      color: white;
    }
  }

  @media (min-width: 700px) {
    height: 650px;
    background-image: url(${desktopHeroImage});
    justify-content: flex-start;
    margin-bottom: 6.4rem;

    .title-wrapper {
      margin: 15rem 3.5rem 0 3.5rem;
      max-width: 80rem;
    }

    .title-inner {
      max-width: 43.33rem;
    }
  }

  @media (min-width: 1310px) {
    align-items: center;

    .title-wrapper {
      width: 100%;
      max-width: 80rem;
      margin: 15rem auto 0 auto;
      display: flex;
    }

    .title-inner {
      max-width: 43.33rem;
    }
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <MobileNav />
      <DesktopNav />
      <div className="title-wrapper">
        <div className="title-inner">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header;