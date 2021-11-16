import { createGlobalStyle } from "styled-components";

export const sectionMarginBottom= 50
export const titleMarginBottom = 32
export const iconSize = 48 
export const worksLiMarginBottom = 30
export const worksItemFontSizeMobile = 30
export const worksItemFontSizeDesktop = 50
export const titleLetterSpacing = 10

export const GlobalStyle = createGlobalStyle`
    * {
        cursor: none;
        margin: 0;
        box-sizing: border-box;
        font-weight: 100;
    } 
    body {
        font-family: 'Exo 2', sans-serif;
        overflow-x: hidden;
        color: white;
        min-height: 100vh;
        background: #0f2027;
        background: -webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
        background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364); 
    }

    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(133, 206, 248, 0);
        border: 1px solid rgba(133, 206, 248, .5);
        border-radius: 4px;
        backdrop-filter: blur(7px);
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(133, 206, 248, 0.2);
    }
    ::-webkit-scrollbar-track {
        background: #0f2027;
        background: -webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
        background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364); 
    }
`