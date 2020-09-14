import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { LandingBG } from '../../Assets/svg/LandingBG'
import Thiruvalluvar from '../../Assets/Images/Thiruvalluvar.png'
import './HeroBanner.css'
import { Button } from '../../Reusables/Button'
import Logo from '../../Assets/Images/synsara_logo.png'

const FadeIn = (x, y) => keyframes`
    0%{
        opacity: 0;
        transform: translate(${x},${y});
    } 100% {
        opacity: 1;
        transform: translate(0,0);
    }`
export const HeroWrapper = styled.div`
    ${({ pageNumber, isAnimated }) =>
        pageNumber === 0 && !isAnimated
            ? css`
                  .hero__primary {
                      animation: ${FadeIn(`0`, `50px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 1s;
                  }
                  .hero__secondary {
                      animation: ${FadeIn(`0`, `50px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 1.5s;
                  }
                  .hero__button {
                      animation: ${FadeIn(`0`, `50px`)} 1.2s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 1.8s;
                  }
                  .hero__img {
                      animation: ${FadeIn(`-200px`, `0`)} 1.5s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 3s;
                  }
                  .hero__logo {
                      animation-name: rotating;
                      animation-duration: 3s;
                      animation-timing-function: ease-in-out;
                  }
              `
            : null}

    width: 100%;
    height: 100%;
`
export const HeroBanner = ({ fullpageApi, pageNumber }) => {
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 0) {
            setTimeout(() => setIsAnimated(true), 5000)
        }
    }, [pageNumber])
    return (
        <HeroWrapper pageNumber={pageNumber} isAnimated={isAnimated}>
            <div className="hero">
                <div className="hero__bg">
                    <LandingBG className="landing__bg" />
                    <img
                        src={Thiruvalluvar}
                        className="img-liquid hero__img"
                        alt=""
                    />
                </div>
                <div className="hero__logo">
                    <img src={Logo} />
                </div>
                <div className="content-wrapper">
                    <div className="hero__text">
                        <h1 className="hero__primary">
                            Synsara 20<sup>20</sup>
                        </h1>
                        <p className="hero__secondary">
                            Hey there! Welcome to Synsara'20, a virtual
                            symposium bringing all our trademark events to your
                            bedroom door for an experience unlike any other.
                            Stock up some snacks and get comfortable, because
                            we've got exciting challenges and lucrative prizes
                            waiting for you come October!
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
