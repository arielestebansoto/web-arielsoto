import React, { useState } from 'react'

import { Navbar, Container, Row, Col, Button } from 'react-bootstrap'
import { Menu } from '../Menu'
import { BsList } from "react-icons/bs"

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( <>
        <Navbar bg="transparent" variant="dark" sticky="top">
            <Container >
                <Row style={{ width: '100%'}}>
                    <Col xs={11}>
                        <Navbar.Brand href="/">arielsoto</Navbar.Brand>
                    </Col>
                    <Col xs={1} >
                        <BsList onClick={handleShow}/>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <Menu show={show} handleClose={handleClose}/>
        </>
    )
}