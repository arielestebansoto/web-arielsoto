import React from 'react'

import { Pointer } from './styles'

export const Cursor = () => {
    React.useEffect( () => {
        const pointer = document.querySelector('#pointer')

        document.addEventListener('mousemove', function(e) {
            let y = e.pageY
            let x = e.pageX
            pointer.style.top = `${y}px`
            pointer.style.left = `${x}px`
        })
    }, [])
    return (
        <Pointer id="pointer"/>
    )
}