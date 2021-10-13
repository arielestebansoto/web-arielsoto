import React from 'react'

import { ButtonCube, ButtonsContainer } from './styles'
export const CubeControls = () =>  {

    const handleClick = (e) => {
        console.log(e)
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
        if (e.target.id === 'prev') {
            return rotate(90) 
        }
        if (e.target.id === 'next') {
             return rotate(-90)
        }
    }
    return <ButtonsContainer>
            <ButtonCube onClick={handleClick} id="prev"></ButtonCube>
            <ButtonCube onClick={handleClick} id="next"style={{right: '0'}}></ButtonCube>
        </ButtonsContainer>

}