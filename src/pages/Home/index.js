import React from 'react'

import { PageWrapper } from './styles'

import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Curriculum } from '../../components/Curriculum'
import { Footer } from '../../components/Footer'

export const Home = () =>
    <PageWrapper>
        <Header />
        <Main />
        <Curriculum />
        <Footer />
    </ PageWrapper>