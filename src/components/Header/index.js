import React, { useState } from 'react'

import { Navbar, Container, Row, Col, Button } from 'react-bootstrap'
import { Menu } from '../Menu'

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( <>
        <Navbar bg="transparent" variant="dark" sticky="top">
            <Container >
                <Row>
                    <Col>
                        <Navbar.Brand href="/">arielsoto</Navbar.Brand>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={handleShow}>menu</Button>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <Menu show={show} handleClose={handleClose}/>
        </>
    )
}