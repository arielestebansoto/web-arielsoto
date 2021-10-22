import styled from 'styled-components'

export const Animation = styled.div`
    height: 100vh;
    position: relative;
`

export const AnimationContainer = styled.div``

export const AnimationControls = styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    height: 25%;    
    position: absolute;
    bottom: 0;

    background-color: rgba(0, 0, 0, .3)
`

export const AnimationControlsMovement = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-template-rows: repeat(3, 50px);
    & > div {
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
