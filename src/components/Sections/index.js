import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { SectionProjects } from '../SectionProjects'
import { SectionSkills } from '../SectionSkills'

export const Sections = () => 
    <Container>
        <Row xs={1} sm={2}>
            <Col>
                <SectionProjects />
            </Col>
            <Col>
                <SectionSkills/>
            </Col>
        </Row>
    </Container>