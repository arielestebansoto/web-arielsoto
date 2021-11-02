import React from 'react'

import { usePush } from '../../hooks/usePush'

export const NotFound = (props) => {
    
    usePush(props)
    
    return <h1>Page Not Found. <br/> redirecting...</h1>
}