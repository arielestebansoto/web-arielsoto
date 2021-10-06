import React from 'react'

import { Offcanvas } from 'react-bootstrap' 

import { Contact } from '../Contact'

export const Menu = (props) =>
    <Offcanvas show={props.show} placement='top' onHide={props.handleClose} backdrop={false}>
        <Offcanvas.Header  closeButton />
        <Offcanvas.Body>
            <Contact />
        </Offcanvas.Body>
    </Offcanvas>