import React from 'react'
import styled from 'styled-components'
import EventBg from '../../../../Assets/Images/events-bg.webp'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import { FORM_ROUTES } from '../../../../utils/constants'
import { Button } from '../../../../Reusables/Button'
import { useHistory } from 'react-router-dom'
import HackathonBg from './HackathonBg'

const PaperPresentationWrapper = styled.div`
    background: url(${EventBg}) no-repeat right;
    width: 100%;
    height: 100%;
    padding: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media ${sizeMaxW.tablet} {
        padding: 2rem;
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
    width: 50%;
    font-size: 18px;
    line-height: 24px;
    max-width: 100%;
    height: 100%;

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
                <EventTitle>Niralayam</EventTitle>
                <p>
                    Think..Innovate.. Create.. Are you all ready to rack your
                    brains to do some out of box thinking? Are you all ready to
                    exercise your brains to do solve mind-bending problems?We
                    bring to you the most anticipated event," The National Level
                    Virtual Hackathon". Unleash your innovative ideas, offer
                    technical solutions to real world problems and get a chance
                    to win up to Rs 10,000.
                </p>
                <EventHeading>Rules to Remember</EventHeading>
                <ol>
                    <li>Team should have a maximum of 4 members.</li>
                    <li>There is no registration fee.</li>
                    <li>Certificates will be provided.</li>
                    <li>
                        Register and start sending your abstract to
                        hackathon.synsara2020@gmail com before September 30.
                    </li>
                    <li>Results will be announced on October 1st.</li>
                    <li>Event will be conducted on October 9th and 10th.</li>
                </ol>
            </EventDetails>
            <EventDetailsWithButton>
                <HackathonBg />
                <RegisterButton>
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.techEvents.hackathon}`
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
