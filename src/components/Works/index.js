import React from 'react'

import { WorksContainer, Title, Anchor, Ul } from './styles'

export const Works = () => {
    return (
        <WorksContainer>
            <Title>works</Title>
            <Ul>
                {
                    [1, 2, 3, 4].map( (project, index) => {
                        return <li key={index}> 
                            <Anchor href='/' target="_blank">
                                Project
                            </Anchor>
                        </li>
                    })
                }
            </Ul>
        </WorksContainer>
    )
}