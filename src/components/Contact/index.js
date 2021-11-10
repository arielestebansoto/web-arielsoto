import React from 'react'

import { ContactContainer, Ul, Title, Anchor } from './styles'
import { AiFillLinkedin, AiFillInstagram, AiOutlineGithub } from 'react-icons/ai'

export const Contact = () => {
    return (
        <ContactContainer>
            <Title>media</Title>
            <Ul>
                <li><Anchor href="https://ar.linkedin.com/in/ariel-esteban-soto" target="_blank">{<AiFillLinkedin/>}</Anchor></li>
                <li><Anchor href="https://www.instagram.com/arielestebansoto/" target="_blank">{<AiFillInstagram/>}</Anchor></li>
                <li><Anchor href="https://github.com/arielestebansoto" target="_blank">{<AiOutlineGithub/>}</Anchor></li>
            </Ul>
        </ContactContainer>
    )
}