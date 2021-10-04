import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { SectionProjects } from '../SectionProjects'
import { SectionSkills } from '../SectionSkills'

export const Sections = () =>
    <Container>
        <Row>
            <Col xs={12} sm={6}>
                <SectionProjects />
            </Col>
            <Col xs={12} sm={6}>
                <SectionSkills />
            </Col>
        </Row>
    </Container>