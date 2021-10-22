import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Button } from './styles'

export const CubeControls = () =>  {

    const handleClick = (e) => {
        const scene = document.querySelector('#Scene')
        const sceneRotationValue = scene.style.transform
        
        const filterRotationValue = () => {

            console.log(sceneRotationValue)
            const slicingRotationValue = sceneRotationValue.slice(8)

            const slicedRotationValue = slicingRotationValue.slice( - 1 * slicingRotationValue.length, - 4)
            console.log(slicedRotationValue)

            return slicedRotationValue
        }
        
        const currentRotation = () => { 
            let rotationValue = sceneRotationValue !== "" 
            ?  rotationValue = filterRotationValue()
            : rotationValue = 0
            return rotationValue
        }
        
        const rotate = (rotation) => {
            const currentRotationValue = parseInt(currentRotation())
            const toRotation = rotation + currentRotationValue
            return scene.style.transform = `rotateY(${toRotation}deg)`
        }
        if (e.target.id === 'backward') {
            return rotate(90) 
        }
        if (e.target.id === 'foward') {
             return rotate(-90)
        }
    }
    return <Row>
            <Col className="text-center">
                <Button id="backward" onClick={handleClick}>back</Button>
            </Col>
            <Col className="text-center">
                <Button id="foward" onClick={handleClick}>foward</Button>
            </Col>
        </Row>

}