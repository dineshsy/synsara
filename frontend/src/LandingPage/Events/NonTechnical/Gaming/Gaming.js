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
import GamingBg from '../../../../Assets/Images/gaming.webp'

export const Gaming = ({ pageNumber, slideInfo }) => {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 1 && currentSlideno === 0 && !isAnimated) {
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
                <ContentWrapper gap="1rem">
                    <ContentWrapper gap="0rem">
                        <Label
                            className="event__title"
                            bold
                            size="4.1rem"
                            color={theme.secondary}
                        >
                            Aadukalam
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="1.5rem"
                            color={theme.primary}
                        >
                            "One-Shot, One Kill, No Luck, Pure Skill"
                        </Label>
                    </ContentWrapper>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        Tamil Vanakkam to all you gamers out there. Synsara'20
                        is on the search for the ultimate squad in all of India
                        and we have a lot more than just a chicken dinner in
                        store for you. Charge your phones, call your mates and
                        get ready for an epic showdown in the Battlegrounds and
                        remember - "Get to the safe zone!!"
                    </Label>
                    <ContentWrapper className="para2" gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. Each player is restricted to only one team
                                and we do NOT allow players on Emulators.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. Players trying to pull a fast one over the
                                competition by teaming up or using hacks like
                                ESP or Aimbots will get kicked out immediately.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                3. Players are required to have all four maps
                                installed and squad leaders are requested to
                                keep up to date with our telegram channel for
                                more information.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                4. The number of rounds depends on the number of
                                squads that turn up for the showdown.
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <ImageWrapper>
                        <img src={GamingBg} alt="" height="200px" />
                    </ImageWrapper>
                    <div className="button__animation">
                        <Button
                            onClick={() =>
                                history.push(
                                    `/register/${FORM_ROUTES.nonTechEvents.gaming}`
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
