import React from 'react'
import { Gaming } from './Gaming/Gaming'
import styled from 'styled-components'
import { sizeMaxH, sizeMaxW } from '../../../utils/MediaQueires'
const SliderWrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 5rem;
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
                    <Gaming />
                </SliderWrapper>
            </div>
        </>
    )
}
