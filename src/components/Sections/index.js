import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { SectionProjects } from '../SectionProjects'
import { SectionSkills } from '../SectionSkills'

export const Sections = () => 
    <Container>
        <Row>
            <Col>
                <SectionProjects />
            </Col>
            <Col>
                <SectionSkills/>
            </Col>
        </Row>
    </Container>