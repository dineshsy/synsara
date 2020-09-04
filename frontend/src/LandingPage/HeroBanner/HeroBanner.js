import React from 'react'
import styled from 'styled-components'
import { Section } from '../../Reusables/Section'

const HeroBannerWrapper = styled(Section)`
    background-color: #4f4f4f;
    text-align: center;
    display: flex;
    align-items: center;
`

export const HeroBanner = () => {
    return <HeroBannerWrapper>Hero Banner</HeroBannerWrapper>
}
