import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import logo from "../../images/logo.svg";

const DesktopNavStyles = styled.nav`

    width: 100%;
    position: absolute;
    display: none;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    padding: 3.2rem 1.6rem;

   

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

    @media (min-width: 700px) {
        padding: 3.2rem 3.5rem;
    } 

    @media (min-width: 980px) {
        display: flex;
    }

    @media (min-width: 1310px) {
        max-width: 80rem;
        margin: 0 auto 0 auto;
        padding: 3.2rem 0;
    }
`;

const DesktopNav = () => {

    return (
        <DesktopNavStyles>
            <Link to="/"><img src={logo} alt="loopstudios logo" /></Link>
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