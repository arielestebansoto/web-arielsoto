import styled from "styled-components";

const iconSize = 24

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    letter-spacing: 25px;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    text-align: center;
    padding-inline-start: 0;
    width: 80%;

    & > li {
        list-style: none;
    }
    & > li > svg {
        width: ${iconSize}px;
        height: ${iconSize}px;
    }
`