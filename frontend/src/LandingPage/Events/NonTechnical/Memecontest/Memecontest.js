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
import MemeContestBg from '../../../../Assets/Images/memecontest.webp'
export const Memecontest = ({ pageNumber, slideInfo, callMeWhenRegClosed }) => {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 2 && currentSlideno === 5 && !isAnimated) {
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
                            Chithiram Pesudhadee
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="2.25rem"
                            color={theme.primary}
                        >
                            (An Electrifying meme battle!)
                        </Label>
                        <Label
                            className="para1"
                            bold
                            size="2rem"
                            color={theme.textdark}
                        >
                            <q>Creativity is intelligence having fun.</q>
                        </Label>
                    </ContentWrapper>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        To all the meme creators out there who make the content
                        go viral with their talent, we present you a wonderful
                        opportunity to showcase your creativity and make us
                        laugh and think with your very own memes. Remember,{' '}
                        <q>Content plays a vital role than the context</q>. Get
                        ready with your memes to this mega meme fight
                    </Label>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        Theme: <q>Current Affairs on Tamil culture</q>
                    </Label>
                    <ContentWrapper className="para2" gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. The content should be theme based.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. Number of likes for the meme will be
                                considered.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                3. Stay away from plagiarism. Strictly should be
                                your original content.
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <ImageWrapper>
                        <img src={MemeContestBg} alt="" height="200px" />
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
