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
import Connection from '../../../../Assets/Images/connections.png'

export const Connections = () => {
    const theme = useTheme()
    const history = useHistory()
    return (
        <EventWrapper>
            <MainContentWrapper>
                <ContentWrapper gap="1rem">
                    <ContentWrapper gap="0rem">
                        <Label bold size="4.1rem" color={theme.secondary}>
                            Oppu
                        </Label>
                        <Label bold size="1.5rem" color={theme.primary}>
                            "A picture can speak a thousand words more than a
                            person ever could!!"
                        </Label>
                    </ContentWrapper>
                    <Label size="2rem" color={theme.textdark}>
                        Hola guys! Picture speaks more than the words. And here
                        is the game to check out on how precise you find answers
                        through the pictures and clues. Get your brains
                        sharpened enough to connect the clues and pave way
                        through the finals. To all the fun loving people, those
                        who want to test their brain, and to those who love
                        playing connection, here is the call to action. Register
                        and enjoy your day to the fullest!
                    </Label>
                    <ContentWrapper gap="1rem">
                        <Label bold size="2.5rem" color={theme.secondary}>
                            Rules:
                        </Label>
                        <ContentWrapper gap="1rem">
                            <Label size="2rem" color={theme.textdark}>
                                1. Individual registrations only.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                2. There are 2 rounds followed by the final
                                round.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                3. First round consists of 25 questions which
                                will be of the MCQ format.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                4. The shortlisted candidates will be attending
                                the second round. There are 15 questions in this
                                round and is based on picture clues.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                5. The selected individuals will move to the
                                finals where you will be asked a set of 20
                                questions from which the winners are selected.
                            </Label>
                            <Label size="2rem" color={theme.textdark}>
                                Do not miss the fun because everything will be
                                interactive!🤩
                            </Label>
                        </ContentWrapper>
                    </ContentWrapper>
                </ContentWrapper>
                <RegisterWrapper>
                    <img src={Connection} alt="" height="200" />
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.nonTechEvents.connexions}`
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
