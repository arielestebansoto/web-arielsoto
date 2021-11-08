import styled from "styled-components";

export const KeyboardMobileContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
`
export const KeyboardMobileGrid = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: 
        translateX(-50%)
        rotate(45deg)
    ;    
    width: 100px;
    height: 100px;

    border-radius: 50%;

    & > div {
        position: absolute;

        width: 50px;
        height: 50px;
        border: 1px solid rgba(255, 255, 255, .3);
        border-radius: 100% 0 0 0;
        
        background: rgba(255, 255, 255, 0);
    }

    & > .keyboardMobile-isTouch {
        animation: touch .2s linear;
    
        @keyframes touch {
            0%, 100% {
                background-color: rgba(255, 255, 255, 0);
            }
            20% {
                background-color: rgba(255, 255, 255, 1);
            }
        }

    }
    ${ rotateDivs() }
`
function rotateDivs() {
    let styles = ''

    let topFactor = 0
    let leftFactor = 0

    for (let i = 0; i < 4; i ++) {
        switch(i) {
            case 1:
                leftFactor = .5 
            break
            case 2:
                topFactor = .5
            break
            case 3:
                leftFactor = 0
            default: null
        }

        styles +=  `
            & > div:nth-child(${i + 1}) {
                top: ${100 * topFactor }%;
                left: ${100 * leftFactor}%;
                transform: 
                    rotate(${ 90 * i }deg)
                ;
            }
        `
    }

    return styles
}