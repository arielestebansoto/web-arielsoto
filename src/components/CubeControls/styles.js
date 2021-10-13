import styled from 'styled-components'


export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 8%;
    width: 100%;
    height: 50px
`
export const ButtonCube = styled.button`
    width: 35%;
    height: 50px;

    position: absolute;
    bottom: 0;
    z-index: 100;
    
    background: rgba(255, 255, 255, 0);
    border: none;

    box-shadow: inset -2px -4px 10px #000;
    filter: blur(1px);
    &:active {
        
    }
    
`