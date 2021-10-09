import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

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
        if (e.target.innerHTML === 'back') {
            return rotate(90) 
        }
        if (e.target.innerHTML === 'foward') {
             return rotate(-90)
        }
    }
    return <Row>
            <Col>
                <Button onClick={handleClick}>back</Button>
            </Col>
            <Col>
                <Button onClick={handleClick}>foward</Button>
            </Col>
        </Row>

}