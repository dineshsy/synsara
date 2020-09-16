import React from 'react'
import styled from 'styled-components'
import EventBg from '../../../../Assets/Images/events-bg.png'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import { FORM_ROUTES } from '../../../../utils/constants'
import { Button } from '../../../../Reusables/Button'
import { useHistory } from 'react-router-dom'
import PaperPresentationBg from './PaperPresentationBg'

const PaperPresentationWrapper = styled.div`
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
    line-height: 50px;
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
    color: ${(props) => props.theme.secondary};
`

export default function PaperPresentation(props) {
    const history = useHistory()

    return (
        <PaperPresentationWrapper>
            <EventDetails>
                <EventTitle>Udhi</EventTitle>
                <EventSubHeading>
                    A Contest for budding entrepreneurs
                </EventSubHeading>
                <EventQuote>
                    Money never starts an idea, it is the idea that starts the
                    money
                </EventQuote>

                <p>
                    Vanakkam Makale!! Do you have what it takes to be a
                    successful entrepreneur? Do you happen to have the infamous
                    million dollar idea? Then here is our exalted event for you.
                    Be judged by prominent corporate representatives and bag
                    your prize. May the best idea win
                </p>
                <EventHeading>Rules:</EventHeading>
                <ul>
                    <li>
                        Any college student is eligible to participate in this
                        event.
                    </li>
                    <li>
                        The participants can form a team of at most 2 members.
                    </li>
                </ul>

                <EventHeading>Stage 1: Abstract Submission</EventHeading>
                <ul>
                    <li>
                        The participant should register in synsara2020.tech
                        website and submit an abstract of 200-500 words before
                        30th September 2020.
                    </li>
                    <li>
                        Final list of participating entries will be mailed by
                        2nd October.
                    </li>
                </ul>
                <EventHeading>Stage 2: Presentation</EventHeading>
                <ul>
                    <li>
                        The final round will be conducted virtually and all the
                        details regarding the finals will be intimated through
                        Telegram.
                    </li>
                    <li>
                        Each team shall be allotted 10 minutes (7 minutes for
                        presentation and 3 minutes for questionnaire by the
                        panel of judges).
                    </li>
                </ul>
            </EventDetails>
            <EventDetailsWithButton>
                <PaperPresentationBg />
                <RegisterButton>
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.techEvents.paperPresentation}`
                            )
                        }
                    >
                        Register
                    </Button>
                </RegisterButton>
            </EventDetailsWithButton>
        </PaperPresentationWrapper>
    )
}