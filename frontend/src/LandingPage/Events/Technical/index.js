import React from 'react'
import Coding from './Coding/Coding'
import PaperPresentation from './PaperPresentation/PaperPresentation'
import Debugging from './Debugging/Debugging'
import Hackathon from './Hackathon/Hackathon'
import styled, { withTheme } from 'styled-components'
import { sizeMaxH, sizeMaxW } from '../../../utils/MediaQueires'
import OvalBG from '../../../Assets/svg/OvalBG.svg'

const EventWrapper = styled.div`
    width: 100%;
    height: 100%;

    @media ${sizeMaxW.tablet} {
        background: url('${OvalBG}') no-repeat left;
    }
    @media screen and ${sizeMaxH.tablet} and ${sizeMaxW.tablet} {
        padding: 2rem;
    }

    @media ${sizeMaxW.laptop} and (orientation: landscape) {
        background: url('${OvalBG}') no-repeat left;
    }
    @media ${sizeMaxW.tablet} and (orientation: landscape) {
        padding: 2rem;
    }
`

function TechincalEvents({ pageNumber, slideInfo }) {
    return (
        <>
            <div className="slide">
                <EventWrapper>
                    <Coding pageNumber={pageNumber} slideInfo={slideInfo} />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <PaperPresentation
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <Debugging pageNumber={pageNumber} slideInfo={slideInfo} />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <Hackathon pageNumber={pageNumber} slideInfo={slideInfo} />
                </EventWrapper>
            </div>
        </>
    )
}

export default withTheme(TechincalEvents)
