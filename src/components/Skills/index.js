import React, { useEffect, useState } from 'react'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

import { Animation, AnimationContainer, AnimationControls, AnimationControlsMovement } from './animationStyles'
import { animation } from '../Animation'
import { pointerLockControls, playPointerLockControls, movePositionCamera, stopPositionCamera } from '../Animation/pointerLookControls'


export const Skills = () => {
    useEffect( () => {
        document.querySelector('#animation-container').appendChild(animation)
    })

    const activePointerLockcontrols = (e) => playPointerLockControls(e)
    
    const handleTouchStartPositionCamera = (e) => movePositionCamera(e)
    const handleTouchEndPositionCamera = (e) => stopPositionCamera(e)
    
    return (
        <SectionContainer>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
        <Animation id="animation">
            <AnimationContainer id="animation-container" style={{border :"1px solid red"}}></AnimationContainer>
            <AnimationControls className="animation-controls">
                <AnimationControlsMovement>
                    <div id="control-1" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>up-left</div>
                    <div id="control-2" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>up</div>
                    <div id="control-3" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>up-right</div>
                    <div id="control-4" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>left</div>
                    <div id="control-5" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>none</div>
                    <div id="control-6" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>right</div>
                    <div id="control-7" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>down-left</div>
                    <div id="control-8" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>down</div>
                    <div id="control-9" onTouchStart={handleTouchStartPositionCamera} onTouchEnd={handleTouchEndPositionCamera}>down-right</div>
                </AnimationControlsMovement>
                <button id="play" onClick={activePointerLockcontrols} style={{height: '50px', width: '75px'}}>play</button>
            </AnimationControls>
        </Animation>
        </SectionContainer>
    )
}