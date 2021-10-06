import React from 'react'

import { Offcanvas } from 'react-bootstrap' 

export const Menu = (props) =>
    <Offcanvas show={props.show} placement='end' onHide={props.handleClose} backdrop={false}>
        <Offcanvas.Header  closeButton />
        <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
    </Offcanvas>