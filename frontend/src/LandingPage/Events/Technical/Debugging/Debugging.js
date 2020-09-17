import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import EventBg from '../../../../Assets/Images/events-bg.webp'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import { FORM_ROUTES } from '../../../../utils/constants'
import { Button } from '../../../../Reusables/Button'
import { useHistory } from 'react-router-dom'
import DebuggingBg from '../../../../Assets/Images/debugging.webp'
import { FadeIn } from '../../../../utils/globalStyles'
<<<<<<< HEAD

=======
import { ImageWrapper } from '../../NonTechnical/style'
>>>>>>> 7be7befb721a979aa8727b53e62f5ca894c5d08b
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

const DebuggingWrapper = styled.div`
    background: url(${EventBg}) no-repeat right;
    width: 100%;
    height: 100%;
    padding: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media ${sizeMaxW.tablet} {
        padding: 4rem;
        flex-direction: column;
        background: none;
    }
    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        flex-direction: column;
    }
    ${({ pageNumber, slideInfo, isAnimated }) =>
        pageNumber === 2 && slideInfo == 2 && !isAnimated
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

export default function Debugging({ pageNumber, slideInfo }) {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 2 && currentSlideno == 2 && !isAnimated) {
            setTimeout(() => setIsAnimated(true), 3500)
        }
    }, [pageNumber, slideInfo])

    const history = useHistory()

    return (
        <DebuggingWrapper
            pageNumber={pageNumber}
            slideInfo={currentSlideno}
            isAnimated={isAnimated}
        >
            <EventDetails>
                <div className="event__title">
                    <EventTitle>Bhogi</EventTitle>
                </div>
                <div className="para1">
                    <EventSubHeading>🔥BURN THE BUG 🔥</EventSubHeading>
                    <p>
                        Are you the detective of a crime movie where you are
                        also the murderer…? If yes, then this is your
                        battlefield. We are on a quest to discover the new
                        Sherlock Holmes in town, so Gear Up to put your name on
                        our exploration list. Click on register to challenge the
                        whole lot of programmers waiting to portray their
                        proficiency in their Programming skills. This contest
                        will be held on October 10th and it consists of two
                        rounds:
                    </p>
                </div>
                <div className="para2">
                    <EventHeading>
                        Round-1: “TECH-MASTERS”-The Beginning
                    </EventHeading>
                    <ul>
                        <li>
                            This round consists of 30 MCQ questions for 30
                            minutes, based on conceptual skills and
                            understanding of the Logics of Programming.
                        </li>
                    </ul>
                    <EventHeading>
                        Round-2: “BUG MASTERS”-The Conclusion
                    </EventHeading>
                    <ul>
                        <li>
                            The shortlisted participants from round 1 will
                            receive intimation on the same day.
                        </li>
                        <li>
                            This Final Round will have a time limit of 30
                            minutes and will be based on C, Data Structures.
                        </li>
                    </ul>
                </div>
            </EventDetails>
            <EventDetailsWithButton>
<<<<<<< HEAD
                {' '}
                <img src={DebuggingBg} alt="" height="200px" />
=======
                <ImageWrapper>
                    <img src={DebuggingBg} alt="" height="200px" />
                </ImageWrapper>
>>>>>>> 7be7befb721a979aa8727b53e62f5ca894c5d08b
                <RegisterButton>
                    <div className="button__animation">
                        <Button
                            onClick={() =>
                                history.push(
                                    `/register/${FORM_ROUTES.techEvents.debugging}`
                                )
                            }
                        >
                            Register
                        </Button>
                    </div>
                </RegisterButton>
            </EventDetailsWithButton>
        </DebuggingWrapper>
    )
}
