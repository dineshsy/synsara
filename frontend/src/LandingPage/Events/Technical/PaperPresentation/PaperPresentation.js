import React, { useState, useEffect } from 'react'
import styled, { keyframes, css, useTheme } from 'styled-components'
import EventBg from '../../../../Assets/Images/events-bg.webp'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import { FORM_ROUTES } from '../../../../utils/constants'
import { Button } from '../../../../Reusables/Button'
import { useHistory } from 'react-router-dom'
import PaperPresentationBg from '../../../../Assets/Images/paperpresentation.webp'
import { FadeIn } from '../../../../utils/globalStyles'
import { ImageWrapper, Label } from '../../NonTechnical/style'

const moveInLeft = () => keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(30px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }`
const PaperPresentationWrapper = styled.div`
    background: url(${EventBg}) no-repeat right;
    width: 100%;
    height: 100%;
    padding: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media ${sizeMaxW.laptop} and (orientation: landscape) {
        padding: 2rem;
        flex-direction: column;
        background: none;
    }
    @media ${sizeMaxW.tablet} {
        padding: 2rem;
        flex-direction: column;
        background: none;
    }

    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        flex-direction: column;
    }
    ${({ pageNumber, slideInfo, isAnimated }) =>
        pageNumber === 1 && slideInfo === 1 && !isAnimated
            ? css`
                  .para1 {
                      animation: ${FadeIn(`0`, `50px`)} 0.5s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.8s;
                  }
                  .para2 {
                      animation: ${FadeIn(`0`, `50px`)} 0.8s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 1s;
                  }
                  .event__title {
                      animation-name: ${moveInLeft()};
                      animation-duration: 2s;
                  }
                  .button__animation {
                      animation: ${FadeIn(`0`, `150px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 1s;
                  }
              `
            : null}
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

        img {
            display: none;
        }
    }
    @media ${sizeMaxW.laptop}and (orientation: landscape) {
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

export default function PaperPresentation({ pageNumber, slideInfo, callMeWhenRegClosed }) {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    const theme = useTheme()
    useEffect(() => {
        if (pageNumber === 1 && currentSlideno === 1 && !isAnimated) {
            setTimeout(() => setIsAnimated(true), 3500)
        }
    }, [pageNumber, currentSlideno, isAnimated])
    const history = useHistory()

    return (
        <PaperPresentationWrapper
            pageNumber={pageNumber}
            slideInfo={currentSlideno}
            isAnimated={isAnimated}
        >
            <EventDetails>
                <div className="event__title">
                    <Label
                        className="event__title"
                        bold
                        size="4rem"
                        color={theme.secondary}
                    >
                        Udhi
                    </Label>
                </div>
                <div className="para1">
                    <Label
                        className="para1"
                        bold
                        size="2.25rem"
                        color={theme.primary}
                    >
                        A Contest for budding entrepreneurs
                    </Label>
                    <Label
                        className="para1"
                        bold
                        size="2rem"
                        color={theme.textdark}
                    >
                        <q>
                            Money never starts an idea, it is the idea that
                            starts the money
                        </q>
                    </Label>
                    <Label className="para1" size="2rem" color={theme.textdark}>
                        Vanakkam Makale!! Do you have what it takes to be a
                        successful entrepreneur? Do you happen to have the
                        infamous million dollar idea? Then here is our exalted
                        event for you. Be judged by prominent corporate
                        representatives and bag your prize. May the best idea
                        win.
                    </Label>
                </div>
                <div className="para2">
                    <EventHeading>Rules:</EventHeading>
                    <ul>
                        <Label size="2rem" color={theme.textdark}>
                            Any college student is eligible to participate in
                            this event.
                        </Label>
                        <Label size="2rem" color={theme.textdark}>
                            The participants can form a team of at most 2
                            members.
                        </Label>
                    </ul>
                    <EventHeading>Stage 1: Abstract Submission</EventHeading>
                    <ul>
                        <Label size="2rem" color={theme.textdark}>
                            The participant should register in synsara2020.tech
                            website and submit an abstract of 200-500 words
                            before <b>30th September 2020</b>.
                        </Label>
                        <Label size="2rem" color={theme.textdark}>
                            Final list of participating entries will be mailed
                            by <b>2nd October</b>.
                        </Label>
                    </ul>
                    <EventHeading>Stage 2: Presentation</EventHeading>
                    <ul>
                        <Label size="2rem" color={theme.textdark}>
                            The final round will be conducted virtually and all
                            the details regarding the finals will be intimated
                            through Telegram.
                        </Label>
                        <Label size="2rem" color={theme.textdark}>
                            Each team shall be allotted 10 minutes (7 minutes
                            for presentation and 3 minutes for questionnaire by
                            the panel of judges).
                        </Label>
                    </ul>
                </div>
            </EventDetails>
            <EventDetailsWithButton>
                <ImageWrapper>
                    <img src={PaperPresentationBg} alt="" height="200px" />
                </ImageWrapper>
                <RegisterButton>
                    <div className="button__animation">
                        <Button onClick={() => callMeWhenRegClosed()}>
                            Register
                        </Button>
                    </div>
                </RegisterButton>
            </EventDetailsWithButton>
        </PaperPresentationWrapper>
    )
}
