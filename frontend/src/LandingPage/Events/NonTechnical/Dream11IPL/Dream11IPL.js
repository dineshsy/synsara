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
import Ipl from '../../../../Assets/Images/Ipl.png'
export const Dream11IPL = () => {
    const theme = useTheme()
    const history = useHistory()
    return (
        <EventWrapper>
            <MainContentWrapper>
                <ContentWrapper gap="1rem">
                    <ContentWrapper gap="0rem">
                        <Label bold size="4.1rem" color={theme.secondary}>
                            Tegidi
                        </Label>
                        <Label bold size="1.5rem" color={theme.primary}>
                            "The essence of strategy is choosing what not to
                            do."
                        </Label>
                    </ContentWrapper>
                    <Label size="2rem" color={theme.textdark}>
                        To all the master tacticians out there, take note as
                        Synsara'20 has something just for you. Come and take
                        part in a contest of Dream11 IPL Fantasy League to pit
                        yourself against the very best in India. Bold choices
                        demand incentives, and Synsara has you covered with some
                        extravagant prizes to take home.
                    </Label>
                    <ContentWrapper gap="1rem">
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
                    <img src={Ipl} height="300" />
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.nonTechEvents.dream11IPL}`
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
