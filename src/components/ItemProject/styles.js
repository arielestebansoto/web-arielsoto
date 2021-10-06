import styled from "styled-components";

export const Item = styled.li`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    transition: all 1.5s ease-out;

    &:hover {
        background: rgba( 255, 255, 255, 0.05 );
        box-shadow: 0 8px 32px 0 rgba( 255, 255, 255, 0.3 );
        backdrop-filter: blur( 12.5px );
        -webkit-backdrop-filter: blur( 12.5px );
        
        color: white;
    }
`

export const Anchor = styled.a`
    color: white;
    text-decoration: none;
`
