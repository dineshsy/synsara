import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { LandingBG, LandingCurveBg } from '../../Assets/svg/LandingBG'
import Thiruvalluvar from '../../Assets/Images/Thiruvalluvar.webp'
import './HeroBanner.css'
import { Button } from '../../Reusables/Button'
import CollegeLogo from '../../Assets/Images/sairam-logo.png'
import Logo from '../../Assets/Images/synsara-logo.png'

const FadeIn = (x, y) => keyframes`
    0%{
        opacity: 0;
        transform: translate(${x},${y});
    } 100% {
        opacity: 1;
        transform: translate(0,0);
    }`
const moveInLeft = () => keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    
    100% {
        opacity: 1;
        transform: translate(0);
    }`
export const HeroWrapper = styled.div`
    ${({ isAnimated, isWindowLoaded }) =>
        !isAnimated && isWindowLoaded
            ? css`
                  .hero__primary {
                      animation: ${FadeIn(`0`, `50px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0s;
                  }
                  .hero__secondary {
                      animation: ${FadeIn(`0`, `50px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.5s;
                  }
                  .hero__button {
                      animation: ${FadeIn(`0`, `50px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.75s;
                  }
                  .hero__img {
                      animation: ${FadeIn(`0`, `100px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                  }
                  .hero__logo {
                      animation-name: rotating;
                      animation-duration: 1s;
                      animation-timing-function: ease-in-out;
                  }
                  .hero__title {
                      animation-name: ${moveInLeft()};
                      animation-duration: 1s;
                  }
              `
            : null}

    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const HeroBanner = ({ fullpageApi }) => {
    const [isAnimated, setIsAnimated] = useState(false)
    const [isWindowLoaded, setIsWindowLoaded] = useState(false)
    useEffect(() => {
        window.onload = (e) => setIsWindowLoaded(true)
    }, [])
    useEffect(() => {
        if (isWindowLoaded === 0) {
            setTimeout(() => setIsAnimated(true), 5000)
        }
    }, [isWindowLoaded])
    return (
        <HeroWrapper isWindowLoaded={isWindowLoaded} isAnimated={isAnimated}>
            <div className="hero">
                <div className="hero__bg">
                    <LandingBG className="landing__bg" />
                    <img
                        src={Thiruvalluvar}
                        className="img-liquid hero__img"
                        alt="thiruvalluvar"
                    />
                </div>
                <LandingCurveBg />
                <div className="hero__logo">
                    <img src={CollegeLogo} alt="logo" />
                </div>
                <div className="content-wrapper">
                    <div className="hero__text">
                        <p className="hero__title">
                            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
                        </p>
                        <p
                            className="hero__title"
                            style={{
                                fontFamily: 'charm',
                                fontWeight: 'bold',
                            }}
                        >
                            Proudly Presents
                        </p>
                        <h1 className="hero__primary">
                            <img src={Logo} alt="synsara-logo" />
                        </h1>

                        <p className="hero__secondary">
                            A culmination of the nation's best young minds in a
                            contest of innovative thinking and exhilarating
                            creations. Get ready to tough it out against
                            competition on october 9 and 10.
                        </p>
                        <div className="hero__button">
                            <Button
                                onClick={() => fullpageApi.moveSectionDown()}
                            >
                                View Events
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </HeroWrapper>
    )
}
