import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    overflow: hidden;

    height: 100%;
    width: 100%;
    
    &:hover > #card-content {
        transform: translateY(-100%)
    }
    &:hover > #card-main span {
        top: 30%;
    }
    `
    
export const Main = styled.div`
    position: relative;
    top: 0;
    z-index: 50;

    height: 100%;
    background: #0f2027;
    color: white;

    & > span {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        width: 80%;

        transition: top .3s ease-in;
    }

`
export const Content = styled.div`
    position: absolute;
    z-index: 100;
    
    width: 100%;
    height: 50%;
    
    padding: 16px;

    transition: transform .3s ease-in;
    transform: translateY(0);

    background: white;

    & > p {
        color: black;
    }

    & > a {
        color: grey;
        text-decoration: none;
        font-size: 12px;
    }
`