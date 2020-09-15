import React from 'react'
import { Gaming } from './Gaming/Gaming'
import { Photography } from './Photography/Photography'
import { Treasurehunt } from './Treasurehunt/Treasurehunt'
import { Connections } from './Connections/Connections'
import { Instareels } from './Instareels/Instareels'
import { Memecontest } from './Memecontest/Memecontest'
import { Dream11IPL } from './Dream11IPL/Dream11IPL'
import styled from 'styled-components'
import { sizeMaxH, sizeMaxW } from '../../../utils/MediaQueires'
const SliderWrapper = styled.section`
    width: 100%;
    height: 100%;
    @media screen and ${sizeMaxH.tablet} and ${sizeMaxW.tablet} {
        padding: 2rem;
    }
`

export const Index = () => {
    return (
        <>
            <div className="slide">
                <SliderWrapper>
                    <Gaming />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Photography />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Treasurehunt />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Connections />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Instareels />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Memecontest />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Dream11IPL />
                </SliderWrapper>
            </div>
        </>
    )
}
