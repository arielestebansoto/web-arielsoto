import React from 'react'

import { PresentationContainer, PresentationContent } from './styles'

export const Presentation = () => {
    return (
        <PresentationContainer>
            <PresentationContent>
                <h5> My main interest is front-end.</h5>
                <p> I like to explore and experimenting with technologies.</p>
                <p>React as main technologie. React-router, Redux, Github. Bootstrap, styled-components. A little of linux. </p>
            </PresentationContent>
        </PresentationContainer>
    )
}