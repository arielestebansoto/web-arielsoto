import React from 'react'

import { ButtonContainer, ButtonOuter, ButtonInner } from './styles'

export const ButtonMenu = (props) => 
    <ButtonContainer>
        <ButtonOuter>
            <input type='checkbox' id="checked" className="clicked"></input>
            <label htmlFor="checked">
                <ButtonInner onClick={props.handleShow}/>
            </label>
        </ButtonOuter>
    </ButtonContainer>