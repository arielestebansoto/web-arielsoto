import React from 'react'

import { TitleContainer, Title, Ul } from './styles'

import { ItemProject } from '../ItemProject'

export const SectionProjects = () => <>
            <TitleContainer>
                <Title>works</Title>
            </TitleContainer>
            <Ul>
                <ItemProject title="arielestebansoto.com" description="React, React-Bootstrap"></ItemProject>
                <ItemProject title="Mercado Libre Home" description="HTML y CSS vanilla"></ItemProject>
                <ItemProject title="Breaking Bad Api" description="HTML, CSS y JSvanilla"></ItemProject>
                <ItemProject title="E-Commerce" description="React, Redux, Material UI"></ItemProject>
            </Ul>

</>