import React from 'react'

import { PageWrapper } from './styles'

import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Sections } from '../../components/Sections'
import { Footer } from '../../components/Footer'

export const Home = () =>
    <PageWrapper>
        <Header />
        <Main />
        <Sections />
        <Footer />
    </ PageWrapper>