import styled from 'styled-components'

export const FooterPage = styled.footer`
    display: flex;
    align-items: center;
    padding: 32px 0;

    transition: all 1.5s ease-in;
    
    &:hover {
        background: rgba( 255, 255, 255, 0.05 );
        box-shadow: 0 -16px 32px 0 rgba( 255, 255, 255, 0.3 );
        backdrop-filter: blur( 12.5px );

    }
`

export const Span = styled.span`
    display: inline-block;
    padding-bottom: 16px;

    letter-spacing: 5px;
    font-weight: bold;
    font-size: 18px;
`