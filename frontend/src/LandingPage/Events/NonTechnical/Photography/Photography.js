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
import PhotographyBg from '../../../../Assets/svg/photo.svg'

export const Photography = ({ pageNumber, slideInfo, callMeWhenRegClosed }) => {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 2 && currentSlideno === 1 && !isAnimated) {
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
                            Nizhaloviyam
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="2.25rem"
                            color={theme.primary}
                        >
                            An Indigenous Photography Contest
                        </Label>
                    </ContentWrapper>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        Cameras, a tool to some, a medium to many. Your
                        photograph can tell a story without ever putting pen on
                        paper. It can describe who you are and how you look at
                        the world. Synsara’s Nizhaloviyam is looking to discover
                        how you look at “Culture in Tamil Nadu”.
                    </Label>
                    <ContentWrapper className="para2" gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. The picture should be theme based.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. Short crispy caption that suits the
                                photograph taken.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                So get ready with ur cameras and lenses! Lets
                                click the entire universe and do not forget to
                                register for this fun filled event before{' '}
                                <b>4th October 2020</b>.
                            </Label>
                            <Label bold size="2.25rem" color={theme.primary}>
                                Come, show us how you tell stories
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <ImageWrapper>
                        <img src={PhotographyBg} alt="" width="250px" />
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
