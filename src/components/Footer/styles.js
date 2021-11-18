import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    height: 70px;
    
    font-size: 24px;
    text-shadow: 1px 1px rgba(0, 0, 0, .5);
    opacity: .8;
    transition: all .5s ease-out;

    &:hover {
        transform: scale(1.01);
        opacity: 1;
    }
`