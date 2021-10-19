import React, { useEffect, useState } from 'react'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

import { Animation, AnimationContainer, AnimationControls } from './animationStyles'
import { animation } from '../Animation'
import { pointerLockControls, playPointerLockControls } from '../Animation/pointerLookControls'


export const Skills = () => {
    useEffect( () => {
        document.querySelector('#animation-container').appendChild(animation)
    })

    const activePointerLockcontrols = (e) => playPointerLockControls(e)
    
    return (
        <SectionContainer>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
        <Animation id="animation">
            <AnimationContainer id="animation-container" style={{border :"1px solid red"}}></AnimationContainer>
            <AnimationControls className="animation-controls">
                <button id="play" onClick={activePointerLockcontrols} style={{height: '50px', width: '75px'}}>play</button>
            </AnimationControls>
        </Animation>
        </SectionContainer>
    )
}