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
import PhotographyBg from '../../../../Assets/Images/photography.webp'
export const Photography = () => {
    const theme = useTheme()
    const history = useHistory()
    return (
        <EventWrapper>
            <MainContentWrapper>
                <ContentWrapper gap="1rem">
                    <ContentWrapper gap="0rem">
                        <Label bold size="4.1rem" color={theme.secondary}>
                            Nizhaloviyam
                        </Label>
                    </ContentWrapper>
                    <Label size="2rem" color={theme.textdark}>
                        Cameras, a tool to some, a medium to many. Your
                        photograph can tell a story without ever putting pen on
                        paper. It can describe who you are and how you look at
                        the world. Synsara’s Nizhaloviyam is looking to discover
                        how you look at “Culture in Tamil Nadu”.
                    </Label>
                    <ContentWrapper gap="1rem">
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
                                click the entire universe🔥 and do not forget to
                                register for this fun filled event before 4th
                                October 2020.
                            </Label>
                            <Label bold size="1.5rem" color={theme.primary}>
                                Come, show us how you tell stories
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <img src={PhotographyBg} alt="" height="200px" />
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.nonTechEvents.photography}`
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
