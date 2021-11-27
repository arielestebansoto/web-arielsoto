import styled from 'styled-components'

import { textReveal } from '../../globalStyles/textReveal'

export const HeroContainer = styled.div`
    position: relative;
    height: 100vh;
`

export const Title = styled.h1`
  position: absolute;
  top: 30%;
  left: 15%;
    
  font-size: 42px;
  @media screen and (min-width: 992px) {
    font-size: 83px;
  }
  font-weight: 400; 
  
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