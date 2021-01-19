import { createGlobalStyle } from 'styled-components';
import Alata from '../fonts/Alata-Regular.ttf';
import JosefinSans from '../fonts/JosefinSans-Light.ttf';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "Alata";
        src: url(${Alata});
    }

    @font-face {
        font-family: "JosefinSans";
        src: url(${JosefinSans});
    }

    :root {
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);
        --dark-gray: hsl(0, 0%, 55%);
        --very-dark-gray: hsl(0, 0%, 41%);

        --small-breakpoint: 600px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        font-family: "Alata", Arial, Helvetica, sans-serif;
        font-size: 15px;
        overflow-x: hidden;
    }

    h1, h2, h3 {
        font-family: "JosefinSans", Arial, Helvetica, sans-serif;
    }

    h1 {
        font-size: 4.8rem;
        line-height: 4.67rem;
        text-transform: uppercase;
    }

    h2 {
        font-size: 3.2rem;
        line-height: 3.2rem;
        text-transform: uppercase;
    }

    h3 {
        font-size: 2.13rem;
        line-height: 2.13rem;
        text-transform: uppercase;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 80rem;
    }

    @media (max-width: 700px) {

        h1 {
            font-size: 2.67rem;
            line-height: 2.53rem;
        }

        h2 {
            font-size: 2.13rem;
            line-height: 2.13rem;
        }

        h3 {
            font-size: 1.6rem;
            line-height: 1.6rem;
        }
    }

    @media (max-width: 400px) {

        h1 {
            font-size: 2.13rem;
            line-height: 2.13rem;
        }
    }
    

`;

export default GlobalStyles;