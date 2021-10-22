import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    position: absolute;
    bottom: 8%;
    width: 100%;
    height: 50px
`

export const ButtonCube = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;

    outline: none;
    border: none;
    color: white;
   
    background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
    
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 3px 0 rgba(255, 255, 255, 0.3);
    
    border-radius: 50px;
    
    transition: transform .5s;

    &:active {

        background: linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
        transform: translateY(4px);
    }

    cursos: pointer;
    `
