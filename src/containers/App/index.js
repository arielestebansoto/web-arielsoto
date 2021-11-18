import React from 'react'

import { Home } from '../../pages/Home'
import { GlobalStyle } from '../../globalStyles'
import { Cursor } from '../../components/Cursor'

import { isDesktop } from 'react-device-detect'

export const App = () => {
    return (
        <>
            { isDesktop && <Cursor /> }
            <GlobalStyle />
            <Home />
        </>
    )
}
