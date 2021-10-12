import React, { useState } from 'react'

import { Navbar, Container, Row, Col } from 'react-bootstrap'
import { Menu } from '../Menu'
import { ButtonMenu } from '../ButtonMenu'

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {setShow(!show)}
    return ( <>
        <Navbar bg="transparent" variant="dark" sticky="top">
            <Container >
                <Row style={{ width: '100%'}}>
                    <Col xs={4}>
                        <Navbar.Brand href="/">arielsoto</Navbar.Brand>
                    </Col>
                    <Col xs={{span: 1, offset: 7 }} >
                        <ButtonMenu handleShow={handleShow}/>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <Menu show={show}/>
        </>
    )
}