import React from 'react'
import {
    EventWrapper,
    ContentWrapper,
    MainContentWrapper,
    RegisterWrapper,
} from './style'
import { Label } from '../style'
import { useTheme } from 'styled-components'
import { Button } from '../../../../Reusables/Button'
import { FORM_ROUTES } from '../../../../utils/constants'
import { useHistory } from 'react-router-dom'
import MemeContestBg from '../../../../Assets/Images/memecontest.webp'
export const Memecontest = () => {
    const theme = useTheme()
    const history = useHistory()
    return (
        <EventWrapper>
            <MainContentWrapper>
                <ContentWrapper gap="1rem">
                    <ContentWrapper gap="0rem">
                        <Label bold size="4.1rem" color={theme.secondary}>
                            Chitiram Pesudadi
                        </Label>
                        <Label bold size="1.5rem" color={theme.primary}>
                            (An Electrifying meme battle!)
                        </Label>
                        <Label bold size="1.5rem" color={theme.primary}>
                            “Creativity is intelligence having fun.”
                        </Label>
                    </ContentWrapper>
                    <Label size="2rem" color={theme.textdark}>
                        To all the meme creators out there who make the content
                        go viral with their talent, we present you a wonderful
                        opportunity to showcase your creativity and make us
                        laugh and think with your very own memes. Remember,
                        “Content plays a vital role than the context”. Get ready
                        with your memes to this mega meme fight🔥
                    </Label>
                    <Label size="2rem" color={theme.textdark}>
                        Theme: “Current Affairs on Tamil culture”
                    </Label>
                    <ContentWrapper gap="1rem">
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
                    <img src={MemeContestBg} alt="" height="200px" />
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.nonTechEvents.memeContest}`
                            )
                        }
                    >
                        Register
                    </Button>
                </RegisterWrapper>
            </MainContentWrapper>
        </EventWrapper>
    )
}
