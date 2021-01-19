import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import logo from "../../images/logo.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import instagramIcon from "../../images/icon-instagram.svg";

const FooterStyles = styled.footer`

  background-color: var(--black);
  min-height: 10.67rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.73rem 1.6rem;

  .logo img {
    max-width: 9.6rem;
  }

  .grid {
    display: grid;
    width: 100%;
    max-width: 80rem;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 2rem;

    ul {
      display: flex;
      list-style: none;

      li {
        margin: 0.5rem;

        a {
          color: white;
          text-decoration: none;
          position: relative;
        }

        a:hover ::after {
          content:'';
          position: absolute;
          height: 0.13rem;
          width: 100%;
          left: 0;
          bottom: -0.33rem;
          background: white;
        }
      }
    }
    
    .footer-nav ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {

        a::after {
          width: 50%;
          left: 25%;
        }
      }
    }

    .copyright p {
      color: var(--dark-gray);
      text-align: center;
    }
  }

  @media (min-width: 700px) {
    padding: 3.73rem 3.5rem;

    .grid {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "logo social" "bottom-nav copyright";
      justify-items: start;

      .footer-nav {
        grid-area: bottom-nav;

        ul {
        flex-direction: row;
        }
      }

      .social-links,
      .copyright {
        justify-self: end;
        text-align: right;
      }
    } 
  }

  @media (min-width: 1310px) {

    .grid {
      max-width: 80rem;
    }

  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="grid">
        <div className="logo">
          <Link to="/"><img src={logo} alt="loopstudios logo" /></Link>
        </div>
        <div className="footer-nav">
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Events</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Support</Link></li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li><Link to="/"><img src={facebookIcon} alt="loopstudios logo" /></Link></li>
            <li><Link to="/"><img src={twitterIcon} alt="loopstudios logo" /></Link></li>
            <li><Link to="/"><img src={pinterestIcon} alt="loopstudios logo" /></Link></li>
            <li><Link to="/"><img src={instagramIcon} alt="loopstudios logo" /></Link></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer;