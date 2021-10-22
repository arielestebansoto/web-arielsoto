import styled from "styled-components";

export const Card = styled.div`
    position: relative;

    height: 100%;
    width: 100%;

    transition: all 1s ease-in;
    
    &:hover {
        box-shadow: 0 0 4px 2px rgba( 255, 255, 255, 0.1 );
        
        background: white;
        color: black;
    }
    `
    
export const Main = styled.div`
    position: relative;
    
    height: 100%;
    background: #0f2027;
    color: white;

    & > span {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)

        width: 80%;
    }

`
export const Content = styled.div`

    position: absolute;
    background: white;
`