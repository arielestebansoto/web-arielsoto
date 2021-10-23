import React from 'react'

import { Card, Main, Content } from './styles'

export const CardProject = (props) => {
    console.log(props)
        return <Card>
            <Main id='card-main'>
                <span>{props.title}</span>
            </Main>
            <Content id="card-content">
                <p>{props.description}</p>
                <a href={`${props.link}`} target="_blank">visit the website</a>
            </Content >
        </Card>}