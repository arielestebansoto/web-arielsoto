import styled from "styled-components";
import { textReveal } from "../../GlobalStyles/textReveal";

import { sectionMarginBottom, titleMarginBottom, titleLetterSpacing  } from "../../globalStyles";

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