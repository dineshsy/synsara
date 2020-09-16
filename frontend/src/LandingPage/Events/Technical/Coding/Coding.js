import React from 'react'
import styled from 'styled-components'
import EventBg from '../../../../Assets/Images/events-bg.webp'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import { FORM_ROUTES } from '../../../../utils/constants'
import { Button } from '../../../../Reusables/Button'
import { useHistory } from 'react-router-dom'
import CodingBg from '../../../../Assets/Images/coding.webp'

const CodingFormWrapper = styled.div`
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
        align-items: unset;
        width: 100%;
        flex-direction: column;
    }
`

const EventTitle = styled.h1`
    font-size: 48px;
    font-weight: 600;
    color: ${(props) => props.theme.secondary};

    @media ${sizeMaxW.laptop} {
        font-size: 44px;
    }

    @media ${sizeMaxW.tablet} {
        font-size: 40px;
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

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        font-size: 9px;
    }
`

const EventDetails = styled.div`
    width: 50%;
    font-size: 18px;
    line-height: auto;
    max-width: 100%;
    height: 100%;
    & ul {
        list-style: none;
    }

    @media ${sizeMaxW.laptop} {
        font-size: 16px;
    }

    @media ${sizeMaxW.tablet} {
        width: fit-content;
        font-size: 14px;
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        width: fit-content;
        font-size: 10px;
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

        img {
            display: none;
        }
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        font-size: 10px;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;

        div {
            width: 100% !important;
        }
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

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        width: 100%;
        justify-content: flex-end;
    }
`

const EventHeading = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.secondary};
    margin-top: 1rem;
`

export default function Coding(props) {
    const history = useHistory()

    return (
        <CodingFormWrapper>
            <EventDetails>
                <EventTitle>Kaniniral</EventTitle>
                <EventQuote>Where your code speaks rather than you</EventQuote>

                <p>
                    <q>Hail Coders….!</q> A fascinating shout-out to all the
                    technophiles out there.
                </p>
                <p>
                    Save your dates on 9th and 10th to Test your competence
                    among the top programmers in the town.
                </p>
                <p>This contest has two rounds.</p>
                <p>Platform: Hackerrank</p>
                <EventHeading>ROUND 1:</EventHeading>
                <ul>
                    <li>This round will be held on 9 th of October.</li>
                    <li>The time allotted will be 2 hours from 2-4 pm.</li>
                    <li>The round consists of 3 Coding Challenges to solve.</li>
                    <li>The results will be announced on the same day.</li>
                </ul>

                <EventHeading>ROUND 2:</EventHeading>
                <ul>
                    <li>
                        The contestants Shortlisted from Round 1 will be
                        intimated about Round 2.
                    </li>
                    <li>This round is on the 10th of October. ️</li>
                    <li>The time duration will be 2 hours from 9 to 11 am.</li>
                </ul>
            </EventDetails>
            <EventDetailsWithButton>
                <img src={CodingBg} alt="" height="320px" />
                <RegisterButton>
                    <Button
                        onClick={() =>
                            history.push(
                                `/register/${FORM_ROUTES.techEvents.coding}`
                            )
                        }
                    >
                        Register
                    </Button>
                </RegisterButton>
            </EventDetailsWithButton>
        </CodingFormWrapper>
    )
}
