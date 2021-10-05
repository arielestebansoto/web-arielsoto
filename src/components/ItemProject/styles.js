import styled from "styled-components";

export const Item = styled.li`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: rgba(0, 0, 0, .3);
        color: white;
    }
`

export const Anchor = styled.a`
    color: white;
    text-decoration: none;
`
