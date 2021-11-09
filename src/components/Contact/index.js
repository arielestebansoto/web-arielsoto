import React from 'react'

import { ContactContainer, Ul, Title } from './styles'
import { AiFillLinkedin, AiFillInstagram, AiOutlineGithub } from 'react-icons/ai'

export const Contact = () => {
    return (
        <ContactContainer>
            <Title>media</Title>
            <Ul>
                <li>{<AiFillLinkedin/>}</li>
                <li>{<AiFillInstagram/>}</li>
                <li>{<AiOutlineGithub/>}</li>
            </Ul>
        </ContactContainer>
    )
}