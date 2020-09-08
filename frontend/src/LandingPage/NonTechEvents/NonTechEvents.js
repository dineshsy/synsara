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
const ROUTES = FORM_ROUTES.nonTechEvents
export const NonTechEvents = () => {
    const nonTechEvents = [
        {
            description:
                'Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis.',
            title: 'Shooting Game',
            rules: [
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
            ],
            img: ComingSoonImg,
            route: ROUTES.gaming,
        },
        {
            description:
                'Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis.',
            title: 'Dream 11 IPL',
            rules: [
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
            ],
            img: ComingSoonImg,
            route: ROUTES.gaming,
        },
        {
            description:
                'Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis.',
            title: 'Treasure hunt',
            rules: [
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
            ],
            img: ComingSoonImg,
            route: ROUTES.gaming,
        },
        {
            description:
                'Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis.',
            title: 'Connexions',
            rules: [
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
            ],
            img: ComingSoonImg,
            route: ROUTES.gaming,
        },
        {
            description:
                'Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis.',
            title: 'Photography contest',
            rules: [
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
            ],
            img: ComingSoonImg,
            route: ROUTES.gaming,
        },
        {
            description:
                'Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis.',
            title: 'Meme contest',
            rules: [
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
            ],
            img: ComingSoonImg,
            route: ROUTES.gaming,
        },
        {
            description:
                'Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,lacinia eget consectetur sed, convallis.',
            title: 'Insta reels contest',
            rules: [
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
                'Vivamus suscipit tortor eget felis porttitor volutpat.',
            ],
            img: ComingSoonImg,
            route: ROUTES.gaming,
        },
    ]

    const temp = nonTechEvents.map((slide, index) => {
        return (
            <div className="slide">
                <EventWrapper>
                    <Event
                        description={slide.description}
                        title={slide.title}
                        rules={slide.rules}
                        img={slide.img}
                        registerRoute={slide.route}
                    />
                </EventWrapper>
            </div>
        )
    })

    return <>{temp}</>
}
