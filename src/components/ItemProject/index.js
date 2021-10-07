import React from 'react'

import { Item, Anchor } from './styles'

export const ItemProject = (props) => 
    <Anchor href={props.href} target={props.target}>
        <Item>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
        </Item>
    </Anchor>   