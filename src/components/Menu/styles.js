import styled from 'styled-components'

export const Ul = styled.ul`
    list-style: none;
    padding-left: 0;
`
export const Li = styled.li`
    font-size: 32px;
    letter-spacing: 0.25px;
    line-height: 50px;
    font-weight: bold;
    text-transform: uppercase;
    & > a {
        color: white;
        text-decoration: none;
        &:hover {
            color: white;
        }
    }
`
export const AnchorIcon = styled.a`
    display: inline-block;
    height: 30px;
    margin-left: 8px;
`
export const Contact = styled.div`
    text-align: right;
`

export const SocialIcons = styled.div`
    margin-bottom: 16px;
`

export const ContactMe = styled.ul`
    list-style: none;
    & > li {
        margin-bottom: 8px;
    }
`