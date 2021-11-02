import React from 'react'

import { SectionContainer, TitleContainer, Title, Ul } from './styles'
import { CubeContainer, TurnLeft, TurnRight, Scene, Cube, CubeSide  } from './cube'
import { ItemProject } from '../ItemProject'

export const Works = () => 
    <SectionContainer>

        <TitleContainer>
            <Title>works</Title>
        </TitleContainer>

        <CubeContainer>
            <TurnLeft/>
            <TurnRight/>
            <Scene className="Scene">
                <Cube className="Cube"> 
                    <CubeSide className='front'> Front </CubeSide>
                    <CubeSide className='back'> Back </CubeSide>
                    <CubeSide className='left'> Left </CubeSide>
                    <CubeSide className='right'> Right </CubeSide>
                </Cube>
            </Scene>
        </CubeContainer>

        <Ul>
            <ItemProject href="/" target="blank" title="arielestebansoto.com" description="React, React-Bootstrap"></ItemProject>
            <ItemProject href="https://arielestebansoto.github.io/mercado-libre-home/" target="_blank" title="Mercado Libre Home" description="HTML y CSS vanilla"></ItemProject>
            <ItemProject href="https://arielestebansoto.github.io/breaking-bad-api/" target="_blank" title="Breaking Bad Api" description="HTML, CSS y JSvanilla"></ItemProject>
        </Ul>
    </SectionContainer>