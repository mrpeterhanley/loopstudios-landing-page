import React, { useState } from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import logo from "../../images/logo.svg";

const MobileNavStyles = styled.nav`

    .nav-top {
        position: absolute;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 3;
        padding: 3.2rem 1.6rem;

        img {
                max-width: 9.6rem;
        }

        .hamburger-icon:hover {
            cursor: pointer;
        }
    }

    @media (min-width: 700px) {
        .nav-top {
            padding: 3.2rem 3.5rem;

            img {
                max-width: 12.8rem;
            }
        }
    }

    @media (min-width: 980px) {
        display: none;
    }
    
    
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--black);
    z-index: 2;
    padding: 3.2rem 1.6rem;
    transition: transform 300ms;
    transform: ${({menuOpen}) => menuOpen? "translateX(0%)" : "translateX(100%)"};

    @media (min-width: 700px) {
        padding: 3.2rem 3.5rem;
    }

    ul {
        list-style: none;
        

        li {
            font-size: 1.5rem;
            margin: 1.5rem 0;
            
            a {
                color: white;
                text-transform: uppercase;
                text-decoration: none;
                font-family: "JosefinSans", Arial, Helvetica, sans-serif;
                position: relative;
            }

            a:hover ::after {
                content:'';
                position: absolute;
                height: 0.13rem;
                width: 100%;
                background: white;
                left: 0;
                bottom: -0.33rem;
            }
        }
    }
`;

const MobileNav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <MobileNavStyles>
            <div className="nav-top">
                <img src={logo} alt="loopstudios logo" />
                <HamburgerMenu
                    className="hamburger-icon"
                    isOpen={menuOpen}
                    menuClicked={toggleMenu}
                    width={20}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='var(--white)'
                    borderRadius={1}
                    animationDuration={0.5}
                />
            </div>
            <MobileMenu menuOpen={menuOpen}>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Events</Link></li>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/">Support</Link></li>
                    </ul>
            </MobileMenu>
        </MobileNavStyles>
    )
}

export default MobileNav;