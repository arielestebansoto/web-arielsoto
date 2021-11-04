import React from 'react'

import { KeyboardMobileContainer, KeyboardMobileGrid } from './styles'

export const KeyboardMobile = ({ handleTouchStart, handleTouchEnd }) => {
    return (
        <KeyboardMobileContainer>
            <KeyboardMobileGrid>
                {
                    [1, 2, 3, 4].map((div, index) =>
                    <div 
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        key={index} 
                        className={`key-${index}`}
                        id={`key-${index}`} 
                    >
                    </div>
                    )
                }
            </KeyboardMobileGrid>
        </KeyboardMobileContainer>
    )
}