import styled from "styled-components";

import { sectionMarginBottom, titleMarginBottom, worksLiMarginBottom, worksItemFontSizeMobile, worksItemFontSizeDesktop } from "../../globalStyles";

export const WorksContainer = styled.section`
    margin-block-end: ${sectionMarginBottom}px;
`
export const Title = styled.h2`
    text-align: center;
    margin-block-end: ${titleMarginBottom}px;
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