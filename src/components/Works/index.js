import React from 'react'

import { works } from './works'
import { WorksContainer, Title, Anchor, UlContainer, Ul, Li } from './styles'

export const Works = () => {
    return (
        <WorksContainer>
            <Title>works</Title>
            <UlContainer>
                <Ul>
                    {
                        works.map( (work, index) => {
                            return <Li key={index}> 
                                <Anchor href={work.href} target="_blank">
                                    {work.title}
                                </Anchor>
                            </Li>
                        })
                    }
                </Ul>
            </UlContainer>
        </WorksContainer>
    )
}