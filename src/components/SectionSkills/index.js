import React from 'react'

import { GridSkills } from './styles'

export const SectionSkills = () => {
    const skills = [ 'React', 'React-Router', 'Redux', 'React-Bootstrap', 'Styled-Components', 'Git Hub', 'Webpack', 'Material UI', 'NodeJS', 'Linux', ,
    ]
    return (
    <>
        <h1>Skills</h1>
        <GridSkills>
            {
                skills.map( element => <div>{element}</div>)
            }
        </GridSkills>
    </>)
}