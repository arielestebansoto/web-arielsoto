import styled from 'styled-components'

export const HeroContainer = styled.div`
    position: relative;

    height: 100vh;
`
export const Title = styled.h1`
    position: absolute;
    top: 30%;
    left: 15%;

    ${ props => textReveal(props.animation) }

    font-size: 42px;
    @media screen and (min-width: 992px) {
        font-size: 83px;
    }
    font-weight: 400;

    & > span:hover {
        color: #5ba0bf;
        animation-name: rubberBand
    }
    
    & > span {
        display: inline-block;
        
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: 1;
        
        transition: color .3s ease-out;

        @keyframes rubberBand {
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
    }
}
`

function textReveal(isVisible) {
  if (isVisible) {
    return `
      opacity: 1;
      filter: blur(0);
      transition: 
        opacity 1s ease-in,
        filter 1s ease-in
        ;
    `
  } else {
    return `
      opacity: 0;
      filter: blur(4px);
      `
  }
}