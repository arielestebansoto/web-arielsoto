import styled from "styled-components";
import { textReveal } from "../../GlobalStyles/textReveal";

import { sectionMarginBottom, titleMarginBottom, worksLiMarginBottom, worksItemFontSizeMobile, worksItemFontSizeDesktop, titleLetterSpacing } from "../../globalStyles";

export const WorksContainer = styled.section`
    margin-block-end: ${sectionMarginBottom}px;
`
export const Title = styled.h2`
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
export const UlContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Ul = styled.ul`
    width: 90%;
    text-align: center;
    @media screen and (min-width: 992px){
       text-align: initial;
    }
    padding-inline-start: 0;
`

export const Li = styled.li`
    list-style: none;
    margin-block-end: ${worksLiMarginBottom}px;
`

export const Anchor = styled.a`
    font-size: ${worksItemFontSizeMobile}px;
    @media screen and (min-width: 992px) {
        font-size: ${worksItemFontSizeDesktop}px;

        transition: opacity .5s ease-out;
        opacity: .5;

        &:hover {
            opacity: 1;
        }
    }
    text-decoration: none;
    color: white;    
`