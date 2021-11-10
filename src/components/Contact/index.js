import React from 'react'

import { ContactContainer, Ul, Li, Title, Anchor } from './styles'
import { AiFillLinkedin, AiFillInstagram, AiOutlineGithub } from 'react-icons/ai'

export const Contact = () => {
    return (
        <ContactContainer>
            <Title>media</Title>
            <Ul>
                <Li><Anchor href="https://ar.linkedin.com/in/ariel-esteban-soto" target="_blank">{<AiFillLinkedin/>}</Anchor></Li>
                <Li><Anchor href="https://www.instagram.com/arielestebansoto/" target="_blank">{<AiFillInstagram/>}</Anchor></Li>
                <Li><Anchor href="https://github.com/arielestebansoto" target="_blank">{<AiOutlineGithub/>}</Anchor></Li>
            </Ul>
        </ContactContainer>
    )
}