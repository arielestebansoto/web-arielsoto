import React from 'react'

import { SectionContainer, TitleContainer, Title, Ul } from './styles'

import { ItemProject } from '../ItemProject'

export const SectionProjects = () => 
    <SectionContainer>
        <TitleContainer>
            <Title>works</Title>
        </TitleContainer>
        <Ul>
            <ItemProject title="arielestebansoto.com" description="React, React-Bootstrap"></ItemProject>
            <ItemProject title="Mercado Libre Home" description="HTML y CSS vanilla"></ItemProject>
            <ItemProject title="Breaking Bad Api" description="HTML, CSS y JSvanilla"></ItemProject>
            <ItemProject title="E-Commerce" description="React, Redux, Material UI"></ItemProject>
        </Ul>
    </SectionContainer>