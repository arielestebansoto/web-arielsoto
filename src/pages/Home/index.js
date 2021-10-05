import React from 'react'

import { PageWrapper } from './styles'

import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { SectionProjects} from '../../components/SectionProjects'
import { SectionSkills } from '../../components/SectionSkills'
import { Footer } from '../../components/Footer'

export const Home = () =>
    <PageWrapper>
        <Header />
            <Main />
            <SectionProjects />
            <SectionSkills />
            <Footer />
    </ PageWrapper>