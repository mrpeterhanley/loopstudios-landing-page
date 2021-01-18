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

  .title {
    position: absolute;
    border: 2px solid var(--white);
    padding: 2.67rem;
    margin: 15rem 2rem auto 2rem;

    h1 {
      color: white;
    }

    @media (max-width: 450px) {
      padding: 1.5rem;

      h1 {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 700px) {
    height: 650px;
    background-image: url(${desktopHeroImage});

    .title {
      margin: 15rem 3.5rem auto 3.5rem;
    }
  }

  @media (min-width: 980px) {
  
    .title {
      max-width: 43.33rem;
      margin: 15rem auto auto 11rem;
    }
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <MobileNav />
      <DesktopNav />
      <div className="title">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </HeaderStyles>
  )
}

export default Header;