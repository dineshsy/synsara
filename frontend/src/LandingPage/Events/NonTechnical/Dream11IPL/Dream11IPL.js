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
import Ipl from '../../../../Assets/Images/Ipl.png'
export const Dream11IPL = ({ pageNumber, slideInfo, callMeWhenRegClosed }) => {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 2 && currentSlideno === 6 && !isAnimated) {
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
                            size="4rem"
                            color={theme.secondary}
                        >
                            Tegidi
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="2.25rem"
                            color={theme.primary}
                        >
                            A hunt for India's next master tactician
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="2rem"
                            color={theme.textdark}
                        >
                            <q>
                                The essence of strategy is choosing what not to
                                do.
                            </q>
                        </Label>
                    </ContentWrapper>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        To all the master tacticians out there, take note as
                        Synsara'20 has something just for you. Come and take
                        part in a contest of Dream11 IPL Fantasy League to pit
                        yourself against the very best in India. Bold choices
                        demand incentives, and Synsara has you covered with some
                        extravagant prizes to take home.
                    </Label>
                    <ContentWrapper className="para2" gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. Participants will receive the contest code
                                for the Dream11 contest before the start of the
                                match.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. The contest is to be conducted in accordance
                                with the rules and regulations of the Dream11
                                mobile application and players are requested to
                                refer to the same.
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <ImageWrapper>
                        <img src={Ipl} height="350" alt="ipl" />
                    </ImageWrapper>
                    <div className="button__animation">
                        <Button onClick={() => callMeWhenRegClosed()}>
                            Register
                        </Button>
                    </div>
                </RegisterWrapper>
            </MainContentWrapper>
        </EventWrapper>
    )
}
