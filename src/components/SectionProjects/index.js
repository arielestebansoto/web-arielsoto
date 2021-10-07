import React from 'react'

import { SectionContainer, TitleContainer, Title, Ul } from './styles'

import { ItemProject } from '../ItemProject'

export const SectionProjects = () => 
    <SectionContainer>
        <TitleContainer>
            <Title>works</Title>
        </TitleContainer>
        <Ul>
            <ItemProject href="/" target="blank" title="arielestebansoto.com" description="React, React-Bootstrap"></ItemProject>
            <ItemProject href="https://arielestebansoto.github.io/mercado-libre-home/" target="_blank" title="Mercado Libre Home" description="HTML y CSS vanilla"></ItemProject>
            <ItemProject href="https://arielestebansoto.github.io/breaking-bad-api/" target="_blank" title="Breaking Bad Api" description="HTML, CSS y JSvanilla"></ItemProject>
        </Ul>
    </SectionContainer>