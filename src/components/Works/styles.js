import styled from "styled-components";

export const WorksContainer = styled.section`
`
export const Title = styled.h2`
    text-align: center;
    letter-spacing: 25px;
`
export const Ul = styled.ul`
    @media screen and (min-width: 992px){
        text-align: center;
    }
    padding-inline-start: 0;
    & > li {
        list-style: none;
    }
`
export const Anchor = styled.a`
    text-decoration: none;
    color: white;    
`