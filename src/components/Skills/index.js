import React from 'react'
import { BrowserView, MobileView, TabletView } from 'react-device-detect'

import { SectionContainer, TitleContainer, Title } from './styles'

import { Animation, AnimationContainer, AnimationControls } from './animationStyles'
import { animation, playPointerLockControls } from '../Animation'
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

                <TabletView>
                    <KeyboardMobile />            
                </TabletView>
                
                <BrowserView>
                    <button onClick={handleClickPc} style={{height: '50px', width: '75px'}} >play PC only</button>
                </BrowserView>

            </AnimationControls>
        </Animation>
        </SectionContainer>
    )
}