import styled from "styled-components";

export const Item = styled.li`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    transition: all 1s ease-in;

    &:hover {
        box-shadow: 0 0 4px 2px rgba( 255, 255, 255, 0.1 );
        backdrop-filter: blur( 12.5px );
        -webkit-backdrop-filter: blur( 12.5px );
        
        color: white;
    }
`

export const Anchor = styled.a`
    color: white;
    text-decoration: none;
`
