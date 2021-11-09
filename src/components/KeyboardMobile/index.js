import React from 'react'

import { KeyboardMobileContainer, KeyboardMobileGrid } from './styles'
import { mobileTouchStart, mobileTouchEnd } from '../Animation'

export const KeyboardMobile = () => {
    const [ target, setTarget ] = React.useState(null)
    const [ isTouch, setIsTouch ] = React.useState(false)

    const isTouchClass = 'keyboardMobile-isTouch'

    const handleTouchStart = (e) => {
        setIsTouch(true)
        setTarget(document.querySelector(`#${e.target.id}`)) 
        mobileTouchStart(e)
    }
    const handleTouchEnd = (e) => {
        setIsTouch(false)
        mobileTouchEnd(e)
    }

    React.useEffect( () => {
        if (target) {
            target.classList.toggle(isTouchClass)
        }
    }, [isTouch])

    return (
        <KeyboardMobileContainer>
            <KeyboardMobileGrid>
                {
                    [1, 2, 3, 4].map((div, index) =>
                    <div 
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        key={index} 
                        id={`key-${index}`} 
                        className={`key-${index}`} 
                    >
                    </div>
                    )
                }
            </KeyboardMobileGrid>
        </KeyboardMobileContainer>
    )
}