import React from 'react'
import Coding from './Coding/Coding'
import PaperPresentation from './PaperPresentation/PaperPresentation'
import Debugging from './Debugging/Debugging'
import Hackathon from './Hackathon/Hackathon'
import styled, { withTheme } from 'styled-components'

const EventWrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem;
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
