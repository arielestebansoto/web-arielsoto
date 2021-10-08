import React from 'react'

import { SectionContainer, TitleContainer, Title, SkillsCharset, SkillItem } from './styles'

export const Skills = () => {
    const skills = [ 'React', 'React-Router', 'Redux', 'Bootstrap', 'Styled-Components', 'Git Hub', 'Webpack', 'Material UI', 'NodeJS', 'Linux', ,
    ]
    return (
        <SectionContainer>
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