import React, { useState } from 'react'

import { Navbar, Container, Row, Col } from 'react-bootstrap'
import { Menu } from '../Menu'
import { BsCircle } from "react-icons/bs"

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( <>
        <Navbar bg="transparent" variant="dark" sticky="top">
            <Container >
                <Row style={{ width: '100%'}}>
                    <Col xs={4}>
                        <Navbar.Brand href="/">arielsoto</Navbar.Brand>
                    </Col>
                    <Col xs={{span: 2, offset: 2 }} >
                        <BsCircle onClick={handleShow} fill="white" fontSize="15px"/>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <Menu show={show} handleClose={handleClose}/>
        </>
    )
}