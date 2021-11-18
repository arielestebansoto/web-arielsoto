import React from 'react'

import { Pointer, PointerExterior } from './styles'

export const Cursor = () => {

    React.useEffect( () => {
        const pointers = document.querySelectorAll('.pointer')

        pointers.forEach( (pointer) => {
            pointer.style.display = 'none'
        })
        document.addEventListener('mousemove', function(e) {
            let y = e.pageY
            let x = e.pageX

            pointers.forEach( (pointer) => {
                pointer.style.display = 'block'
                pointer.style.top = `${y}px`
                pointer.style.left = `${x}px`
            })
        })
        document.addEventListener('mouseout', function(e) {
            pointers.forEach( (pointer) => {
                pointer.style.display = 'none'
            })
        })
    }, [])

    return (
        <div className="pointerTrail">
            <Pointer className="pointer" />
            {
                [1].map( (pointer, index) => 
                    <PointerExterior 
                        className="pointer" 
                        key={index}
                        delay={index}
                    />
                )
            }
        </div>
    )
}