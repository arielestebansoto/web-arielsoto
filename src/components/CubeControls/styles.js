import styled from 'styled-components'

export const Button = styled.button`
    display: inline-block;
    text-align: center;
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