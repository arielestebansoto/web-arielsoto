import styled from "styled-components";

import { titleMarginBottom, iconSize, titleLetterSpacing } from "../../globalStyles";
import { textReveal } from "../../GlobalStyles/textReveal";

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block-end: 50px;
`

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    margin-block-end: ${titleMarginBottom}px;
    letter-spacing: ${titleLetterSpacing}px;
    text-indent: ${titleLetterSpacing}px;

    & > span {
        opacity: 0;
        filter: blur(2px);
        
        ${ 
          props => props.isVisible && `
            opacity: 1;
            filter: blur(0);
            ${ textReveal(props.length, props.isAnimationEnded)}
          ` 
        }
    }
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    text-align: center;
    padding-inline-start: 0;
    width: 80%;

    & > li {
        list-style: none;
    }
`
export const Li = styled.li`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: ${iconSize * 1.5}px;
    height: ${iconSize * 1.5}px;

    transition: opacity .5s ease-out;
    opacity: .5;
    
    &:hover {
        opacity: 1;
    }

    &:after {
        content: '';
        position: absolute;
        top: 100%;
        background: rgba(0, 0, 0, .5);
        width: 50px;
        height: 10px;
        filter: blur(3px);
        border-radius: 50%;
    }

    &:before {
        content: '';
        position: absolute;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 1);
        transform: scale(1);
        animation: pulse-black 2s infinite;
        
        @keyframes pulse-black {
            0% {
              transform: scale(0.95);
              box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.7);
            }
            
            70% {
              transform: scale(1);
              box-shadow: 0 0 10px 20px rgba(255, 255, 255, 0);
            }
            
            100% {
              transform: scale(0.95);
              box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
            }
          }
    }
    
`
export const Anchor = styled.a`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: ${iconSize};
    height: ${iconSize};
    text-decoration: none;
    color: inherit;

    &:hover {
        color: inherit;
    }
    & > svg {
        width: ${iconSize}px;
        height: ${iconSize}px;        
    }
`