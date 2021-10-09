import React, { useEffect } from 'react'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'
import { animationElement, animate } from './animation'

export const Skills = () => {
    const skills = [ 'React', 'React-Router', 'Redux', 'Bootstrap', 'Styled-Components', 'Git Hub', 'Webpack', 'Material UI', 'NodeJS', 'Linux', ,
    ]

    useEffect( () => {
        document.querySelector('#animationContainer').appendChild(animationElement)
        animate()
    })
    
    return (
        <SectionContainer id='animationContainer'>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
            <SkillsCharset>
                {
                    skills.map( (element, index) => <SkillItem key={index}>{element}</SkillItem>)
                }
            </SkillsCharset>
        </SectionContainer>
    )
}