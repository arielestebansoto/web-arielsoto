import styled from "styled-components";

export const Pointer = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);

    width: 4px;
    height: 4px;
    background: rgba(152, 224, 255, 1);
    border-radius: 50%;
    `
    
    export const PointerExterior = styled.div`
    position: absolute;
    z-index: -100;
    transform: translate(-50%, -50%);
    transition: all ${props => props.delay / 2 + 1 }s ease-out;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 6px 10px rgba(152, 224, 255, .075); 
    background: rgba(152, 224, 255, .075);
    filter: blur(6px);
`