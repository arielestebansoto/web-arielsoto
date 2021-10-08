import React, { useEffect } from 'react'

export const usePush = (props) => {
    useEffect( () => setTimeout( () => props.history.push('/'), 5000))
}