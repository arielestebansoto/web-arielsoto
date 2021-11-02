import React, { useEffect, useState } from 'react'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

import { Animation, AnimationContainer, AnimationControls, AnimationKeyboard, AnimationKeyboardPC } from './animationStyles'
import { animation, playPointerLockControls, scrollAnimation, mobileTouchStart, mobileTouchEnd } from '../Animation'


export const Skills = () => {
    useEffect( () => {
        document.querySelector('#animation-container').appendChild(animation)
    })

    const activatePlayPointerLockControls = () => playPointerLockControls()
    const centeredWindow = () => scrollAnimation()

    const handleTouchStart = (e) => mobileTouchStart(e)
    const handleTouchEnd = (e) => mobileTouchEnd(e)

    return (
        <SectionContainer>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
        <Animation id="animation">
            <AnimationContainer id="animation-container" />
            <AnimationControls className="animation-controls">
                <button onClick={centeredWindow} style={{height: '50px', width: '75px'}}>play</button>  
                <AnimationKeyboard >
                    {
                        [1, 2, 3, 4].map((div, index) =>
                        <div 
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            key={index} 
                            className={`key-${index}`}
                            id={`key-${index}`} 
                            style={{border: '1px solid rgba(255,255,255, .3'}}
                        >
                            {`key-${index}`}
                        </div>
                        )
                    }
                </AnimationKeyboard>
                <AnimationKeyboardPC>
                    <button onClick={activatePlayPointerLockControls} style={{height: '50px', width: '75px'}} >play PC only</button>
                    <button style={{height: '50px', width: '75px'}} >exit</button>
                    <span>press esc for exit</span>  
                </AnimationKeyboardPC>
            </AnimationControls>
        </Animation>
        </SectionContainer>
    )
}