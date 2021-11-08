import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

import { Animation, AnimationContainer, AnimationControls, AnimationKeyboard, AnimationKeyboardPC } from './animationStyles'
import { animation, playPointerLockControls, scrollAnimation } from '../Animation'
import { KeyboardMobile } from '../KeyboardMobile'

export const Skills = () => {


    React.useEffect( () => {
        document.querySelector('#animation-container').appendChild(animation)
    }, [])

    const handleClickPc = () => playPointerLockControls()

    return (
        <SectionContainer>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
        <Animation id="animation">
            <AnimationContainer id="animation-container" />
            <AnimationControls >
                <MobileView>
                    <KeyboardMobile />            
                </MobileView>
                <BrowserView>
                    <button onClick={handleClickPc} style={{height: '50px', width: '75px'}} >play PC only</button>
                </BrowserView>
            </AnimationControls>
        </Animation>
        </SectionContainer>
    )
}