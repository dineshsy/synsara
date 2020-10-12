import React, { useState, useEffect } from 'react'
import styled, { keyframes, css, useTheme } from 'styled-components'
import EventBg from '../../../../Assets/Images/events-bg.webp'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import { FORM_ROUTES } from '../../../../utils/constants'
import { Button } from '../../../../Reusables/Button'
import { useHistory } from 'react-router-dom'
import HackathonBg1 from '../../../../Assets/Images/hackathon1.webp'
import HackathonBg2 from '../../../../Assets/Images/hackathon2.webp'
import { FadeIn } from '../../../../utils/globalStyles'
import { ImageWrapper, Label } from '../../NonTechnical/style'
import { registrationFailed } from '../../../../redux/Events/Toast/Actions'

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
    margin: auto;

    ol {
        margin-left: 1.25rem;
        font-size: 1.25rem;
    }

    @media ${sizeMaxW.tablet} {
        justify-content: flex-start;
        padding: 2rem;
        flex-direction: column;
        background: none;
    }
    @media ${sizeMaxW.laptop} and (orientation: landscape) {
        padding: 2rem;
        flex-direction: column;
        background: none;
    }
    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        flex-direction: column;
    }
    ${({ pageNumber, slideInfo, isAnimated }) =>
        pageNumber === 1 && slideInfo === 3 && !isAnimated
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

const EventDetails = styled.div`
    width: 50%;
    font-size: 18px;
    line-height: 24px;
    max-width: 100%;
    height: fit-content;

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
        height: fit-content;
        font-size: 14px;
        flex-direction: row;
        width: 100%;

        #hackathon-img {
            display: none;
        }
    }
    @media ${sizeMaxW.laptop}and (orientation: landscape) {
        height: fit-content;
        font-size: 14px;
        flex-direction: row;
        width: 100%;
        #hackathon-img {
            display: none;
        }
    }
    @media ${sizeMaxH.mobileL} and (orientation: landscape) {
        height: fit-content;
        font-size: 10px;
        flex-direction: row;
    }
`

const RegisterButton = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media ${sizeMaxW.tablet} {
        width: fit-content !important;
        justify-content: flex-end;
        margin-top: 2rem;
    }

    @media ${sizeMaxW.mobileL} and (orientation: landscape) {
        width: fit-content !important;
        justify-content: flex-end;
    }
`

const EventHeading = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.secondary};
    margin-top: 1rem;
    font-size: 1.6rem;
`

export default function PaperPresentation({ pageNumber, slideInfo,callMeWhenRegClosed }) {
    const [currentPageno, currentSlideno] = slideInfo
    const [isAnimated, setIsAnimated] = useState(false)
    const theme = useTheme()
    useEffect(() => {
        if (pageNumber === 1 && currentSlideno === 3 && !isAnimated) {
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
                        size="3rem"
                        color={theme.secondary}
                    >
                        Niralayam
                    </Label>
                </div>
                <div className="event__title">
                    <Label
                        className="para1"
                        bold
                        size="1.5rem"
                        color={theme.primary}
                    >
                        An Exhilarating Virtual Hackathon!!
                    </Label>
                </div>
                <div className="para1">
                    <Label
                        className="para1"
                        size="1.75rem"
                        color={theme.textdark}
                    >
                        Coder-Designer-Thinker-Presenter
                    </Label>
                    <Label
                        className="para1"
                        size="1.75rem"
                        color={theme.textdark}
                    >
                        Unite here for the ultimate culmination of your ideas.
                    </Label>
                    <Label
                        className="para1"
                        size="1.75rem"
                        color={theme.textdark}
                    >
                        Prize money worth 10k and exciting internship offers
                        awaits you.
                    </Label>
                </div>
                <div className="para2">
                    <EventHeading>THEMES</EventHeading>
                    <ol>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Health care and Bio medical
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Designing devices that will help in managing health
                            care better.
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Agriculture and Rural Development
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Integrating the rural development and agriculture
                            with technology for maximize productivity and
                            output.
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Robotics and Drones
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Design and build an efficient robot with usage
                            value.
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Security and surveillance
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Build accurate devices for efficient surveillance
                            and security for easy understanding and usability.
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Financial
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Provide technology that seamlessly integrate into
                            the world of finance.
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Smart communication
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Give smart communication an upgrade using the
                            emerging technologies.
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Sustainable Environment(Tourism, Hospitality,
                                Entertainment and retail)
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Provide modern day solutions in any of the above
                            mentioned domain.
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Mobile and Web Development
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Creating applications that engage users and
                            alternative solutions for all online problems
                        </Label>
                        <li>
                            <Label size="1.5rem" color={theme.secondary}>
                                Own innovative ideas
                            </Label>
                        </li>
                        <Label size="1.5rem" color={theme.textdark}>
                            Provide most creative solutions to real world
                            problems.
                        </Label>
                    </ol>
                </div>
            </EventDetails>
            <EventDetailsWithButton>
                <div id="hackathon-img" style={{ width: 'min-content' }}>
                    <ImageWrapper>
                        <img src={HackathonBg1} alt="" height="150px" />
                        <img src={HackathonBg2} alt="" height="150px" />
                    </ImageWrapper>
                </div>
                <div className="para2">
                    <EventHeading>Rules to Remember</EventHeading>
                    <ol>
                        <li>
                            <Label size="1.5rem" color={theme.textdark}>
                                No registration fee
                            </Label>
                        </li>
                        <li>
                            <Label size="1.5rem" color={theme.textdark}>
                                Team of maximum 4 members
                            </Label>
                        </li>
                        <li>
                            <Label size="1.5rem" color={theme.textdark}>
                                Certificates will be provided.
                            </Label>
                        </li>
                        <li>
                            <Label size="1.5rem" color={theme.textdark}>
                                Register and send abstract to{' '}
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: theme.secondary,
                                    }}
                                    href="mailto:hackathon.synsara2020@gmail.com"
                                >
                                    hackathon.synsara2020@gmail.com
                                </a>
                            </Label>
                        </li>
                        <li>
                            <Label size="1.5rem" color={theme.textdark}>
                                Certificates for all participants.
                            </Label>
                        </li>
                    </ol>
                </div>

                <div className="button__animation">
                    <RegisterButton>
                        <Button onClick={() => callMeWhenRegClosed()}>
                            Register
                        </Button>
                    </RegisterButton>
                </div>
            </EventDetailsWithButton>
        </PaperPresentationWrapper>
    )
}
