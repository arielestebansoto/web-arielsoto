import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

import { Animation, AnimationContainer, AnimationControls, AnimationKeyboard, AnimationKeyboardPC } from './animationStyles'
import { animation, playPointerLockControls, scrollAnimation, mobileTouchStart, mobileTouchEnd } from '../Animation'


export const Skills = () => {
    React.useEffect( () => {
        document.querySelector('#animation-container').appendChild(animation)
    }, [])

    const handleClickMobile = () => {
        scrollAnimation()
        setIsPlaying('mobile')
    }

    const handleClickPc = () => {
        setIsPlaying('pc')
        return playPointerLockControls()
    }

    const handleTouchStart = (e) => mobileTouchStart(e)
    const handleTouchEnd = (e) => mobileTouchEnd(e)

    return (
        <SectionContainer>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
        <Animation id="animation">
            <AnimationContainer id="animation-container" />
            <MobileView>
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
            </MobileView>
            <BrowserView>
                <button onClick={handleClickPc} style={{height: '50px', width: '75px'}} >play PC only</button>
            </BrowserView>

        </Animation>
        </SectionContainer>
    )
}