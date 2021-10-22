import React from 'react'

import { SectionContainer, TitleContainer, Title } from './styles'
import { CubeContainer, Scene, Cube, CubeSide } from './cube'
import { CardProject } from '../CardProject'
import { CubeControls } from '../CubeControls'

export const Works = () => 
    <SectionContainer className="SectionContainer">
        <TitleContainer>
            <Title>works</Title>
        </TitleContainer>
        <CubeContainer>
            <Scene className="Scene" id="Scene">
                <Cube className="Cube"> 
                    <CubeSide className='front'><CardProject href="/" target="blank" title="arielestebansoto.com" description="React, React-Bootstrap" /></CubeSide>
                    <CubeSide className='back'><CardProject href="https://arielestebansoto.github.io/mercado-libre-home/" target="_blank" title="Mercado Libre Home" description="HTML y CSS vanilla"/></CubeSide>
                    <CubeSide className='left'><CardProject href="https://arielestebansoto.github.io/breaking-bad-api/" target="_blank" title="Breaking Bad Api" description="HTML, CSS y JSvanilla"/> </CubeSide>
                    <CubeSide className='right'> Pagina web numer no4 </CubeSide>
                </Cube>
            </Scene>
        </CubeContainer>

        <CubeControls />

    </SectionContainer>