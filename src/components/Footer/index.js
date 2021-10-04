import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FooterPage } from './styles'

export const Footer = () => <FooterPage>
    <Container>
        <Row xs={1} sm={3}>
            <Col>
                <a href="/">ariel esteban soto</a>
            </Col>
            <Col>
                <span>+54 9 11 2243 2005</span>
            </Col>
        
            <Col>
                <span>arielestebansoto@gmail.com</span>
            </Col>
        </Row>
    </Container>
</FooterPage>