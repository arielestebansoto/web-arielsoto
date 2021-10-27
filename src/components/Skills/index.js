import React, { useEffect, useState } from 'react'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

import { Animation, AnimationContainer, AnimationControls } from './animationStyles'
import { animation, playPointerLockControls } from '../Animation'


export const Skills = () => {
    useEffect( () => {
        document.querySelector('#animation-container').appendChild(animation)
    })

    const activatePlayPointerLockControls = () => playPointerLockControls()
    
    return (
        <SectionContainer>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
        <Animation id="animation">
            <AnimationContainer id="animation-container" />
            <AnimationControls className="animation-controls">
                <button onClick={activatePlayPointerLockControls} style={{height: '50px', width: '75px'}}>play</button>  
            </AnimationControls>
        </Animation>
        </SectionContainer>
    )
}