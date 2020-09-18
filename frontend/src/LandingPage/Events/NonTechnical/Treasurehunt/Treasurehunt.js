import React, { useState, useEffect } from 'react'

import {
    EventWrapper,
    ContentWrapper,
    MainContentWrapper,
    RegisterWrapper,
} from './style'
import { Label, ImageWrapper } from '../style'
import { useTheme } from 'styled-components'
import { Button } from '../../../../Reusables/Button'
import { FORM_ROUTES } from '../../../../utils/constants'
import { useHistory } from 'react-router-dom'
import TreasurehuntBg from '../../../../Assets/Images/treasurehunt.webp'
export const Treasurehunt = ({ pageNumber, slideInfo }) => {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 1 && currentSlideno === 2 && !isAnimated) {
            setTimeout(() => setIsAnimated(true), 3500)
        }
    }, [pageNumber, currentSlideno, isAnimated])
    const theme = useTheme()
    const history = useHistory()
    return (
        <EventWrapper
            pageNumber={pageNumber}
            slideInfo={currentSlideno}
            isAnimated={isAnimated}
        >
            <MainContentWrapper>
                <ContentWrapper gap="2rem">
                    <ContentWrapper gap="0rem">
                        <Label
                            className="event__title"
                            bold
                            size="4.1rem"
                            color={theme.secondary}
                        >
                            Draviyam Tedu
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="1.5rem"
                            color={theme.primary}
                        >
                            An Indigenous Photography Contest
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="1.5rem"
                            color={theme.textdark}
                        >
                            "Who seeks shall find!"
                        </Label>
                    </ContentWrapper>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        "Let not the world deceive thee with its beauty. It is
                        the dream of a dreamer, a mirage of the desert."
                    </Label>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        Synsara's Dhiraviyam Thedu is a contest designed for the
                        witty treasure hunter in you. Like any treasure hunt,
                        this contest has its own take on twists and turns that
                        need solving. Solve all of them to get the coveted
                        chance to tough it out against fellow sleuths for a
                        treasure unlike any other. What are you waiting for?
                        Your journey awaits.
                    </Label>
                    <ContentWrapper className="para2" gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. This event is an individual event and teams
                                are NOT allowed.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. The hunt is held over two rounds with the
                                first round comprising of riddles, collages, and
                                picture puzzles. The second is a mystery, true
                                to the essence of treasure hunts.
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <ImageWrapper>
                        <img src={TreasurehuntBg} alt="" height="200px" />
                    </ImageWrapper>
                    <div className="button__animation">
                        <Button
                            onClick={() =>
                                history.push(
                                    `/register/${FORM_ROUTES.nonTechEvents.treasureHunt}`
                                )
                            }
                        >
                            Register
                        </Button>
                    </div>
                </RegisterWrapper>
            </MainContentWrapper>
        </EventWrapper>
    )
}
