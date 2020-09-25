import React from 'react'
import { Gaming } from './Gaming/Gaming'
import { Photography } from './Photography/Photography'
import { Treasurehunt } from './Treasurehunt/Treasurehunt'
import { Connections } from './Connections/Connections'
import { Dubsmash } from './Dubsmash/Dubsmash'
import { Memecontest } from './Memecontest/Memecontest'
import { Dream11IPL } from './Dream11IPL/Dream11IPL'
import styled from 'styled-components'
import { SwipeIndicator } from '../../../Reusables/SwipeIndicator'
const SliderWrapper = styled.section`
    width: 100%;
    height: 100%;
`

export const Index = ({ pageNumber, slideInfo }) => {
    return (
        <>
            <div className="slide">
                <SliderWrapper>
                    <Gaming pageNumber={pageNumber} slideInfo={slideInfo} />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Photography
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Treasurehunt
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Connections
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Dubsmash pageNumber={pageNumber} slideInfo={slideInfo} />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Memecontest
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </SliderWrapper>
            </div>
            <div className="slide">
                <SliderWrapper>
                    <Dream11IPL pageNumber={pageNumber} slideInfo={slideInfo} />
                </SliderWrapper>
            </div>
        </>
    )
}
