import styled from "styled-components";

export const WebBackground = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #0f2027;
    background: -webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
    background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364); 
    z-index: -1;
    `
export const WebContent = styled.div`
    width: 100%;
    position: absolute;
    z-index: 100;
    overflow: hidden;
    color: white;
`