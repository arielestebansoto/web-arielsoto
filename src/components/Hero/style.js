import styled from 'styled-components'

export const HeroContainer = styled.div`
    position: absolute;
    top: 30%;
    overflow:hidden;
`
export const Title = styled.h1`
    font-size: 40px;
    
    @media screen and (min-width: 576px) {
        font-size: 50px;
    }
    animation: showup 3s ease-in;

    @keyframes showup {
        0% { opacity: 0};
        100% { opacity: 1};
    }
`

export const SubTitle = styled.p`
    animation: slide 2s ease-in;

    @keyframes slide {
        0% { opacity: 0; margin-top: -4px};
        85% { opacity: 0; margin-top: -4px};
        100% { opacity: 1; margin-top: 0px}
    }
`