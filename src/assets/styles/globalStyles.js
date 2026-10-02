import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
box-sizing: border-box;
font-size: 20px;
cursor: none !important;
background-color: #141414;
color: #ffffff;
scroll-behavior: smooth;
}

*, *::after, *::before {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
    font-family: 'Playfair Display', sans-serif;
    background-color: #141414;
    color: #ffffff;
}

a, button {
    font-family: "Helvetica",'Playfair Display';
    font-weight: 400;
} 
::-webkit-scrollbar {
    display: none;
}
.no-scroll {
    overflow: hidden;
}
@font-face {
    font-family: "Wolfgang";
    src: url("/fonts/Wolfgang.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
}
`;
