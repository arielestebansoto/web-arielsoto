import React from 'react'

import { TitleContainer, Title, GridSkills, BoxSkill } from './styles'

export const SectionSkills = () => {
    const skills = [ 'React', 'React-Router', 'Redux', 'Bootstrap', 'Styled-Components', 'Git Hub', 'Webpack', 'Material UI', 'NodeJS', 'Linux', ,
    ]
    return (
        <>
            <TitleContainer>
                <Title>skills</Title>
            </TitleContainer>
            <GridSkills>
                {
                    skills.map( (element, index) => <BoxSkill key={index}>{element}</BoxSkill>)
                }
            </GridSkills>
        </>
    )
}