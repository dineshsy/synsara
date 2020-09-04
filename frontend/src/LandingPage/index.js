import React from 'react'
import styled from 'styled-components'
import { HeroBanner } from './HeroBanner/HeroBanner'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'

const LandingPageWrapper = styled.main`
    width: 100%;
    height: 100%;
`

export const index = () => {
    return (
        <LandingPageWrapper>
            <Navbar />
            <HeroBanner />
            <h2>events</h2>
            <Footer />
        </LandingPageWrapper>
    )
}
