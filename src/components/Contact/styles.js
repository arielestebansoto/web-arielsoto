import styled from "styled-components";

import { titleMarginBottom, iconSize } from "../../globalStyles";

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
`
export const Anchor = styled.a`
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