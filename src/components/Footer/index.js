import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FooterPage, Span } from './styles'

export const Footer = () => <FooterPage>
    <Container>  
        <Row xs={1} sm={2}>
            <Col>
                <Span>+54 9 11 2243 2005</Span>
            </Col>
            <Col>
                <Span>arielestebansoto@gmail.com</Span>
            </Col>
        </Row>
    </Container>
</FooterPage>