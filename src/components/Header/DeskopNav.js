import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import logo from "../../images/logo.svg";

const DesktopNavStyles = styled.nav`

    @media (max-width: 1000px) {
        display: none;
    }

    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    padding: 3.2rem 1.6rem;

    @media (min-width: 1200px) {
        padding: 3.2rem 11rem;
    }

    ul {
        list-style: none;
        display: flex;

        li {
            padding: 0 2.13rem;
            position: relative;

            a {
                color: white;
                text-decoration: none;
            }

            a:hover ::after {
                content:'';
                position: absolute;
                height: 0.13rem;
                width: 25%;
                background: white;
                left: 37.5%;
                bottom: -0.33rem;
            }
        }
    }
`;

const DesktopNav = () => {

    return (
        <DesktopNavStyles>
            <img src={logo} alt="loopstudios logo" />
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Events</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/">Support</Link></li>
            </ul>
        </DesktopNavStyles>
    )
}

export default DesktopNav;