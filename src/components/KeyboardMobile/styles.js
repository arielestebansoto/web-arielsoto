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
        // rotate(45deg)
    ;

    // display: inline-grid;
    // grid-template: repeat(2,50px) / repeat(2,50px);
    
    width: 100px;
    height: 100px;
    
    border: 1px solid white;

    border-radius: 50%;
    
    & > div {
        width: 50px;
        height: 50px;
        border: 1px solid red;
        border-radius: 100% 0 0 0 ;
    }
`