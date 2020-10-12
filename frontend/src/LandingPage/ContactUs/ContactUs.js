import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import './ContactUs.css'
import praba from '../../Assets/Images/praba.webp'
import srima from '../../Assets/Images/SRIMA.webp'
import linga from '../../Assets/Images/linga.webp'
import pooja from '../../Assets/Images/pooja.webp'
import Deep from '../../Assets/Images/Deep.webp'
import sandy from '../../Assets/Images/sandy.webp'
import Jade from '../../Assets/Images/Jade.webp'
import kaviya from '../../Assets/Images/kaviya.webp'
import CoordinatorsImg from '../../Assets/Images/coordinators.png'
import { Facebook } from '../../Assets/svg/Facebook'
import { Linkedin } from '../../Assets/svg/Linkedin'
import { Instagram } from '../../Assets/svg/Instagram'

const ContactUsImg = styled.img`
    @media (max-width: 1024px) {
        display: none;
    }
`

const ContactUsWrapper = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    min-height: 100vh;
    padding: 3rem 3rem 0 3rem;
    margin: auto;
    display: flex;
    flex-flow: column;
    .person--1,
    .person--2,
    .person--3,
    .person--4,
    .person--5,
    .person--6,
    .person--7,
    .person--8 {
        opacity: ${({ isAnimated }) => (isAnimated ? `1` : `0`)};
    }
    ${({ pageNumber, isAnimated }) =>
        pageNumber === 5 && !isAnimated
            ? css`
                  .person--1 {
                      animation: ${FadeIn(`0`, `50px`)} 0.3s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.6s;
                  }
                  .person--2 {
                      animation: ${FadeIn(`0`, `50px`)} 0.4s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.6s;
                  }
                  .person--3 {
                      animation: ${FadeIn(`0`, `50px`)} 0.5s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.6s;
                  }
                  .person--4 {
                      animation: ${FadeIn(`0`, `50px`)} 0.6s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.6s;
                  }
                  .person--5 {
                      animation: ${FadeIn(`0`, `50px`)} 0.7s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.7s;
                  }
                  .person--6 {
                      animation: ${FadeIn(`0`, `50px`)} 0.8s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.7s;
                  }
                  .person--7 {
                      animation: ${FadeIn(`0`, `50px`)} 0.9s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.7s;
                  }
                  .person--8 {
                      animation: ${FadeIn(`0`, `50px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.7s;
                  }
              `
            : null}
`

const Title = styled.h2`
    color: ${(props) => props.theme.secondary};
    font-size: 3rem;
    font-weight: 600;
`

const Body = styled.div`
    width: 100%;
    color: ${(props) => props.theme.textdark};
    font-size: 13px;
    text-align: justify;
`

const FadeIn = (x, y) => keyframes`
    0%{
        opacity: 0;
        transform: translate(${x},${y});
    } 100% {
        opacity: 1;
        transform: translate(0,0);
    }`

export default function ContactUs({ pageNumber }) {
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        if (pageNumber === 5 && !isAnimated) {
            setTimeout(() => setIsAnimated(true), 2500)
        }
    }, [pageNumber, isAnimated])
    const d = new Date()
    const currentYear = d.getFullYear()
    return (
        <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            <ContactUsWrapper pageNumber={pageNumber} isAnimated={isAnimated}>
                <Title className="contactus__title">Event Coordinators</Title>
                <Body>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3 ">
                            <div className="person person--1">
                                <div className="person__shape">
                                    <img
                                        src={praba}
                                        alt=""
                                        className="person__photo person__photo--1"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">
                                        Prabakara Pandian R
                                    </p>
                                    <p className="person__gmail">
                                        aammoorroopp@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 7010017080
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person person--2">
                                <div className="person__shape">
                                    <img
                                        src={srima}
                                        alt=""
                                        className="person__photo person__photo--2"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">Srimathi R R</p>
                                    <p className="person__gmail">
                                        srimathiravi479@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person person--3">
                                <div className="person__shape">
                                    <img
                                        src={linga}
                                        alt=""
                                        className="person__photo person__photo--3"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">LingaMuthu K</p>
                                    <p className="person__gmail">
                                        linga.muthu.official@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 9080321851
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person person--4">
                                <div className="person__shape">
                                    <img
                                        src={pooja}
                                        alt=""
                                        className="person__photo person__photo--4"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">Pooja K</p>
                                    <p className="person__gmail">
                                        poojakarthikeyan1113@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person person--5">
                                <div className="person__shape">
                                    <img
                                        src={Deep}
                                        alt=""
                                        className="person__photo person__photo--5"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">
                                        N Deepcharran
                                    </p>
                                    <p className="person__gmail">
                                        charransachin@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 75502 87647
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person person--6">
                                <div className="person__shape">
                                    <img
                                        src={sandy}
                                        alt=""
                                        className="person__photo person__photo--6"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">Santhiya V</p>
                                    <p className="person__gmail">
                                        santhiyavenkat.2000@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person person--7">
                                <div className="person__shape">
                                    <img
                                        src={Jade}
                                        alt=""
                                        className="person__photo person__photo--7"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">K.Jayandan</p>
                                    <p className="person__gmail">
                                        jayandan1234@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 9345682823
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person person--8">
                                <div className="person__shape">
                                    <img
                                        src={kaviya}
                                        alt=""
                                        className="person__photo person__photo--8"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">
                                        Kaviyalakshmi.K
                                    </p>
                                    <p className="person__gmail">
                                        kaviyalakshmi.k@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ContactUsImg
                            src={CoordinatorsImg}
                            height="200px"
                            alt="coordinators"
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </Body>

                <footer className="contact-us footer">
                    <small>&copy; Copyright {currentYear}, Synsara'20</small>

                    <div className="social-icons">
                        <p>Follow us for more updates:</p>
                        <Facebook fill="#3563C1" />
                        <Instagram fill="#3563C1" />
                        <Linkedin fill="#3563C1" />
                    </div>
                </footer>
            </ContactUsWrapper>
        </div>
    )
}
