import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700;900&display=swap');
    
    :root {
        --color-primary-blue: #2979ff;
        --color-light-blue: #83b9ff;
        --color-dark-blue: #004ba0;
        --color-neutral-gray: #777;
        --color-light-gray: #e8e8e8;
        --color-dark-gray: #333;
        --color-white: #fff;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    @media only screen and (max-width: 75em) {
        html {
            font-size: 59%;
        }
    }

    @media only screen and (max-width: 56.25em) {
        html {
            font-size: 56%;
        }
    }

    @media only screen and (min-width: 112.5em) {
        html {
            font-size: 65%;
        }
    }

    html,
    body {
        height: 100%;
    }

    body {
        box-sizing: border-box;
        position: relative;
        line-height: 1.5;
        font-family: sans-serif;
        overflow-x: hidden;
        overflow-y: scroll;
        font-family: "Source Sans 3", sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root,
    #__next {
        isolation: isolate;
    }
`;

export default GlobalStyles;
