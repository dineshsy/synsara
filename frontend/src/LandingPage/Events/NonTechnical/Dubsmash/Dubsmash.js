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
import Instareel from '../../../../Assets/Images/instareel.webp'
export const Dubsmash = ({ pageNumber, slideInfo }) => {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 2 && currentSlideno === 4 && !isAnimated) {
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
                            Paatum Nane Paavamum Nane
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="1.5rem"
                            color={theme.primary}
                        >
                            A platform to put your multi-faceted talents to good
                            use
                        </Label>

                        <Label
                            className="para1"
                            bold
                            size="1.5rem"
                            color={theme.textdark}
                        >
                            "The creative adult is the child who survived"
                        </Label>
                    </ContentWrapper>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        Synsara'20 is on an expedition to explore and cultivate
                        the immense creativity in you. We are looking for videos
                        that tell a story or express your outlooks that are
                        deeply rooted in our vibrant culture and tradition. Cue
                        up your creative process and get to work as we have
                        something special in store for all our winners.
                    </Label>
                    <ContentWrapper className="para2" gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. Your submissions must be original and related
                                to the theme. The likes gained on Instagram WILL
                                play a role in the final scoring.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. Your submissions cannot exceed the maximum
                                time limit of 30 seconds. Participants can make
                                use of any video creation app - (Add apps like
                                Dubsmash, Musically, etc here. Whatever isnt
                                banned)
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                3. Your submissions must come with a video title
                                that reflects your video and its content.
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <ImageWrapper>
                        <img src={Instareel} alt="" height="200px" />
                    </ImageWrapper>
                    <div className="button__animation">
                        <Button
                            onClick={() =>
                                history.push(
                                    `/register/${FORM_ROUTES.nonTechEvents.dubsmash}`
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
