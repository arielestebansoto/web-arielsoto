import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Div } from './styles'
import { Hero } from '../Hero'

export const Main = () => 
    <Container>
        <Row>
            <Col>
                <Div>
                    <Hero />
                </Div>
            </Col>
        </Row>
    </Container>
