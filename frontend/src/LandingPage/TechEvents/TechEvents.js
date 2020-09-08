import React from 'react'
import { Event } from '../../Reusables/Event'
import ComingSoonImg from '../../Assets/Images/coming-soon-bg.png'
import styled from 'styled-components'
import { sizeMaxW, sizeMaxH } from '../../utils/MediaQueires'
import { FORM_ROUTES } from '../../utils/constants'
const EventWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    min-height: 100vh;
    padding: 2rem;
    margin: auto;

    @media ${sizeMaxW.laptopL} {
        padding: 1rem;
    }
    @media ${sizeMaxH.laptopL} {
        padding: 1rem;
    }
`
const ROUTES = FORM_ROUTES.techEvents
export const TechEvents = () => {
    return (
        <>
            <div className="slide">
                <EventWrapper>
                    <Event
                        description="Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis."
                        title="Coding"
                        rules={[
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                        ]}
                        img={ComingSoonImg}
                        registerRoute={ROUTES.coding}
                    />
                </EventWrapper>
            </div>
            <div className="slide">
                <EventWrapper>
                    <Event
                        description="Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis."
                        title="Paper Presentation"
                        rules={[
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                            'Vivamus suscipit tortor eget felis porttitor volutpat.',
                        ]}
                        img={ComingSoonImg}
                        registerRoute={ROUTES.paperPresentation}
                    />
                </EventWrapper>
            </div>
        </>
    )
}
