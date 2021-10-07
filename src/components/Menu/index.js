import React from 'react'

import { Offcanvas } from 'react-bootstrap' 

import { Container, Row, Col } from 'react-bootstrap'

import { BsCircle, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Ul, Anchor, Contact, SocialIcons, AnchorIcon, ContactMe } from './styles'

export const Menu = (props) =>
    <Offcanvas show={props.show} placement='top' onHide={props.handleClose} backdrop={false}>
        <Offcanvas.Body>
        <Container>
            <Row style={{width: "100%", marginBottom: '30px'}}>
                <Col xs={{span: 2, offset: 6}}>
                    <BsCircle onClick={props.handleClose} fill="white" fontSize="15px"/>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 4, offset: 1}} lg={{span: 4, offset: 2}}>
                    <Ul>
                        <li><Anchor href="/">Web Dev</Anchor></li>
                        <li><Anchor href="/">Audiovisual</Anchor></li>
                    </Ul>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 4, offset: 7}} lg={{span: 4, offset: 6}}>
                    <Contact> 
                        <Ul>
                            <li><Anchor href="/">About</Anchor></li>
                        </Ul>
                        <SocialIcons>
                            <AnchorIcon href="https://www.github.com">
                                <BsGithub fill="white" fontSize="25px" />
                            </AnchorIcon>
                            <AnchorIcon href="https://www.linkedin.com">
                                <BsLinkedin fill="white" fontSize="25px" />
                            </AnchorIcon>
                            <AnchorIcon href="https://www.instagram.com">
                                <BsInstagram fill="white" fontSize="25px" />
                            </AnchorIcon>
                        </SocialIcons>
                        <ContactMe>
                            <li>arielestebansoto@gmail.com</li>
                            <li>+54 9 11 2243 1005</li>
                        </ContactMe>
                    </Contact>
                </Col>
            </Row>
        </Container>
        </Offcanvas.Body>
    </Offcanvas>