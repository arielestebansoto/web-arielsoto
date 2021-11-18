import styled from "styled-components";

import { worksItemHeight, worksItemFontSizeMobile, worksItemFontSizeDesktop } from "../../globalStyles";

export const Li = styled.li`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 992px) {
        justify-content: flex-start;
    }

    height: ${worksItemHeight}px;

    opacity: 0;
    transform: translate3d(10px,10px,-400px) scaleY(.01) rotateX(-90deg) rotate(-5deg);
    transition: all .3s ease-out;
    transition-delay: .2s;

    ${ props => props.isVisibleList && `
        opacity: 1;
        transform: translateZ(0) scaleY(1) rotateX(0) rotate(0);
    `}
`

export const Anchor = styled.a`
    font-size: ${worksItemFontSizeMobile}px;

    @media screen and (min-width: 992px) {
        font-size: ${worksItemFontSizeDesktop}px;
    }

    text-shadow: 1px 1px rgba(0, 0, 0, .7);
    transition: opacity .5s ease-out;
    opacity: .5;

    &:hover {
        opacity: 1;
    }
    
    text-decoration: none;
    color: white;    
`