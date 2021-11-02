import styled from 'styled-components'

export const Animation = styled.div`
    height: 100vh;
    position: relative;
`

export const AnimationContainer = styled.div``

export const AnimationControls = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;

    width: 100%;
    position: absolute;
    bottom: 0;

    background-color: rgba(0, 0, 0, .3)
    
    `
    export const AnimationKeyboard = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 75px);
    grid-template-rows: repeat(2, 75px);

`

export const AnimationKeyboardPC = styled.div`
`
