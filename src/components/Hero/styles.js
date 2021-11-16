import styled from 'styled-components'

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
    transform: translateY(-15px);
    filter: blur(2px);
    
    ${ 
      props => props.isVisible && `
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
        ${ textReveal(props.length, props.isAnimationEnded)}
      ` 
    }
  }
`

function textReveal(length, isAnimationEnded) {
  const initialDelay = 0.2
  const animationDelay = 0.03

  let transitionDelayStyles = 
    isAnimationEnded ? ``: `
      animation-name: revealTextRubberBand;
      
      @keyframes revealTextRubberBand {
        from {
            transform: scale3d(1, 1, 1);
        }
        
        30% {
            transform: scale3d(1.25, 0.75, 1);
        }
        
        40% {
            transform: scale3d(0.75, 1.25, 1);
        }
        
        50% {
            transform: scale3d(1.15, 0.85, 1);
        }
        
        65% {
            transform: scale3d(.95, 1.05, 1);
        }
        
        75% {
            transform: scale3d(1.05, .95, 1);
        }
        
        to {
            transform: scale3d(1, 1, 1);
        }
      } 
    `

  if (!isAnimationEnded) {
    for(let i = 0; i < length; i++) {
      transitionDelayStyles += `
        &:nth-child(${ i + 1}) {
          transition-delay: ${ initialDelay + animationDelay * i}s;
        };
        &:nth-child(${ i + 1}) {
          animation-delay: ${ initialDelay + animationDelay * i}s;
        };
      `
    }
  }

  return transitionDelayStyles
}
