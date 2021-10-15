import React, { useEffect } from 'react'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

import { animation } from '../Animation'
import { pointerLockControls } from '../Animation/pointerLookControls'

export const Skills = () => {
    const skills = [ 'React', 'React-Router', 'Redux', 'Bootstrap', 'Styled-Components', 'Git Hub', 'Webpack', 'Material UI', 'NodeJS', 'Linux', ,
    ]
    
    useEffect( () => {
        document.querySelector('#animation').appendChild(animation)
    })

    const activePointerLockcontrols = () => pointerLockControls.lock()
    
    return (
        <SectionContainer>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
        <div id="animation">
            <button id="play" onClick={activePointerLockcontrols}>play</button>
        </div>

            {/* <SkillsCharset>
                {
                    skills.map( (element, index) => <SkillItem key={index}>{element}</SkillItem>)
                }
            </SkillsCharset> */}
        </SectionContainer>
    )
}