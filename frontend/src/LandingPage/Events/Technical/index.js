import React from 'react'
import Coding from './Coding/Coding'
import PaperPresentation from './PaperPresentation/PaperPresentation'
import Debugging from './Debugging/Debugging'
import Hackathon from './Hackathon/Hackathon'
import styled, { withTheme } from 'styled-components'
import { sizeMaxH, sizeMaxW } from '../../../utils/MediaQueires'
import OvalBG from '../../../Assets/svg/OvalBG.svg'
import { connect } from 'react-redux'
import { registrationFailed } from '../../../redux/Events/Toast/Actions'

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

function TechincalEvents({ pageNumber, slideInfo, registrationFailed }) {
    return (
        <>
            <div className="slide">
                <EventWrapper>
                    <Coding
                        callMeWhenRegClosed={() =>
                            registrationFailed('Kaniniral')
                        }
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <PaperPresentation
                        callMeWhenRegClosed={() => registrationFailed('Udhi')}
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <Debugging
                        callMeWhenRegClosed={() => registrationFailed('Bhogi')}
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <Hackathon
                        callMeWhenRegClosed={() =>
                            registrationFailed('Niralayam')
                        }
                        pageNumber={pageNumber}
                        slideInfo={slideInfo}
                    />
                </EventWrapper>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    registrationFailed: (event) => (dispatch) => {
        dispatch(
            registrationFailed({
                err_type: 'REG_CLOSED',
                event,
            })
        )
    },
}

export default connect(null, mapDispatchToProps)(withTheme(TechincalEvents))
