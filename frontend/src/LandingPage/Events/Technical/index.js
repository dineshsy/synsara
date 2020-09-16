import React from 'react'
import Coding from './Coding/Coding'
import PaperPresentation from './PaperPresentation/PaperPresentation'
import Debugging from './Debugging/Debugging'
import Hackathon from './Hackathon/Hackathon'
import styled, { withTheme } from 'styled-components'
import { sizeMaxH, sizeMaxW } from '../../../utils/MediaQueires'

const EventWrapper = styled.div`
    width: 100%;
    height: 100%;
    @media screen and ${sizeMaxH.tablet} and ${sizeMaxW.tablet} {
        padding: 2rem;
    }
`

function TechincalEvents() {
    return (
        <>
            <div className="slide">
                <EventWrapper>
                    <Coding />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <PaperPresentation />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <Debugging />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <Hackathon />
                </EventWrapper>
            </div>
        </>
    )
}

export default withTheme(TechincalEvents)
