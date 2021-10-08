import styled from 'styled-components'

const size = (factor) =>  75 * factor + 'px'

export const CubeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    perspective: ${size(10)};
    perspective-origin: 50% calc(50% - ${size(4)})};
`
export const Scene = styled.div`
    position: relative;
    transform-style: preserve-3d;

    transition: transform 1s linear;
    // animation: sceneRotate 30s infinite linear;

    // @keyframes sceneRotate {
    //     to { transform: rotateY(360deg) }
    // }
`

export const Floor = styled.div`
    height: ${size(4)};
    width: ${size(4)};

    background-image: 
    radial-gradient(#0000, #000 75%),    
    repeating-conic-gradient(from 45deg, #111 0deg 90deg, #222 90deg 180deg);

    background-size: 100%, ${size(1)} ${size(1)};

    position: absolute;
    top: ${size(3)};
    transform: 
    translate(-50%, -50%)
    rotateX(90deg);

`

export const Cube = styled.div`
    width: ${size(3)};
    height: ${size(5)};

    position: absolute;
    top: ${size(-3)};
    transform: translateX(-50%);
    transform-style: preserve-3d;

    & > .front { transform: translateZ(${size(1.5)})}
    & > .back { transform: rotateY(180deg) translateZ(${size(1.5)})}
    & > .right { transform: rotateY(90deg) translateZ(${size(1.5)})}
    & > .left { transform: rotateY(270deg) translateZ(${size(1.5)})}

    & > div {
        background-color: rgba(133, 206, 248, .5); 
        filter: blur(1px);
        border: 1px solid rgba(255, 255, 255, .3)
    }
`

export const CubeSide = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
`

export const TurnRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 60px;
    width: 50%;
    background: red;

    &:hover ~ .Scene {
        // animation-play-state: paused;
        transform: rotateY(-90deg) ;
    }
`

export const TurnLeft = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 50%;
    background: blue;

    &:hover ~ .Scene {
        // animation-play-state: paused;
        transform: rotateY(90deg) ;
    }
`