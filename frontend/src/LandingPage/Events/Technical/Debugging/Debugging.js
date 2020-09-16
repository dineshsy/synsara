import React from 'react'
import styled from 'styled-components'
import EventBg from '../../../../Assets/Images/events-bg.webp'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import { FORM_ROUTES } from '../../../../utils/constants'
import { Button } from '../../../../Reusables/Button'
import { useHistory } from 'react-router-dom'
import DebuggingBg from './DebuggingBg'

const DebuggingWrapper = styled.div`
    background: url(${EventBg}) no-repeat right;
    width: fit-content;
    height: 100%;
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media ${sizeMaxW.tablet} {
        padding: 0 2rem;
        flex-direction: column;
        background: none;
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        flex-direction: column;
    }
`

const EventTitle = styled.h1`
    font-size: 48px;
    line-height: 60px;
    font-weight: 600;
    color: ${(props) => props.theme.secondary};

    @media ${sizeMaxW.laptop} {
        font-size: 44px;
    }

    @media ${sizeMaxW.tablet} {
        font-size: 40px;
    }

    @media ${sizeMaxW.mobileL} {
        font-size: 30px;
        line-height: 32px;
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        font-size: 24px;
    }
`

const EventQuote = styled.q`
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;

    @media ${sizeMaxW.laptop} {
        font-size: 16px;
    }

    @media ${sizeMaxW.tablet} {
        font-size: 14px;
    }

    @media ${sizeMaxW.mobileL} {
        font-size: 12px;
        line-height: 14px;
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        font-size: 9px;
    }
`

const EventDetails = styled.div`
    width: 60%;
    font-size: 18px;
    line-height: 24px;
    max-width: 100%;
    & ul {
        list-style: none;
    }

    @media ${sizeMaxW.laptop} {
        font-size: 16px;
        line-height: 22px;
    }

    @media ${sizeMaxW.tablet} {
        width: fit-content;
        font-size: 14px;
        line-height: 20px;
    }

    @media ${sizeMaxW.mobileL} {
        line-height: 17px;
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        width: fit-content;
        font-size: 10px;
        line-height: 12px;
    }
`

const EventDetailsWithButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 40%;
    height: 100%;
    font-size: 18px;
    line-height: auto;

    @media ${sizeMaxW.tablet} {
        font-size: 14px;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;

        div {
            width: 100% !important;
        }
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        font-size: 10px;
        flex-direction: row;
        justify-content: flex-end;
    }
`

const RegisterButton = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media ${sizeMaxW.tablet} {
        width: 100%;
        justify-content: flex-end;
        margin-top: 2rem;
    }

    @media ${sizeMaxW.mobileL} and (orientation: landscape) {
        width: 100%;
        justify-content: flex-end;
    }
`

const EventHeading = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.secondary};
    margin-top: 1rem;
`

const EventSubHeading = styled.p`
    color: ${(props) => props.theme.primary};
`

export default function Debugging(props) {
    const history = useHistory()

    return (
        <DebuggingWrapper>
            <EventDetails>
                <EventTitle>Bhogi</EventTitle>
                <EventSubHeading>🔥BURN THE BUG 🔥</EventSubHeading>

                <p>
                    Are you the detective of a crime movie where you are also
                    the murderer…? If yes, then this is your battlefield. We are
                    on a quest to discover the new Sherlock Holmes in town, so
                    Gear Up to put your name on our exploration list. Click on
                    register to challenge the whole lot of programmers waiting
                    to portray their proficiency in their Programming skills.
                    This contest will be held on October 10th and it consists of
                    two rounds:
                </p>
                <EventHeading>
                    Round-1: “TECH-MASTERS”-The Beginning
                </EventHeading>
                <ul>
                    <li>
                        This round consists of 30 MCQ questions for 30 minutes,
                        based on conceptual skills and understanding of the
                        Logics of Programming.
                    </li>
                </ul>

                <EventHeading>
                    Round-2: “BUG MASTERS”-The Conclusion
                </EventHeading>
                <ul>
                    <li>
                        The shortlisted participants from round 1 will receive
                        intimation on the same day.
                    </li>
                    <li>
                        This Final Round will have a time limit of 30 minutes
                        and will be based on C, Data Structures.
                    </li>
                </ul>
            </EventDetails>
            <EventDetailsWithButton>
                <DebuggingBg />
                <RegisterButton>
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.techEvents.debugging}`
                            )
                        }
                    >
                        Register
                    </Button>
                </RegisterButton>
            </EventDetailsWithButton>
        </DebuggingWrapper>
    )
}
