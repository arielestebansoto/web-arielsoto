import styled from "styled-components";

export const ButtonContainer = styled.div`

`

export const ButtonOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-image: linear-gradient(to right bottom, #dadfe1, #abb7b714);
    box-shadow: 0px 2px 4px rgba(0,0,0,.4),
    inset 2px 4px 4px rgba(255,255,255,.4);

    & > input:checked + label > div {
        background-image: linear-gradient(to right bottom, #0f20278c,#dadfe1);
        box-shadow: inset 2px 2px 4px rgba(0,0,0,.1),
          inset -2px -2px 4px rgba(255, 255,255, .4);
    }
    & > input {
        display: none;
    }
`

export const ButtonInner = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;

    background-image: linear-gradient(to right bottom, #dadfe1 ,#0f202714);
    box-shadow: inset 2px 4px 4px -2px rgba(255, 255, 255, .6),
    0px 4px 4px rgba(0,0,0,.2);
`