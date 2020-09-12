import React from 'react'
import styled from 'styled-components'
import './ContactUs.css'
import Person from '../../Assets/Images/person.png'
import { Halfellipse } from '../../Assets/svg/Halfellipse'

const ContactUsWrapper = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    min-height: 100vh;
    padding: 3rem 3rem 0 3rem;
    margin: auto;
    position: relative;
`

const Title = styled.h2`
    color: ${(props) => props.theme.secondary};
    font-size: 3rem;
    font-weight: 600;
`

const Body = styled.p`
    width: 100%;
    color: ${(props) => props.theme.textdark};
    font-size: 13px;
    text-align: justify;
`

export default function ContactUs() {
    return (
        <>
            <ContactUsWrapper>
                <Title className="contactus__title">Event Coordinators</Title>
                <Body>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3 ">
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
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
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">Srimathi R R</p>
                                    <p className="person__gmail">
                                        srimathiravi479@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 8056420428
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
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
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">Pooja K</p>
                                    <p className="person__gmail">
                                        poojakarthikeyan1113@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 9952091331
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
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
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">Santhiya V</p>
                                    <p className="person__gmail">
                                        santhiyavenkat.2000@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 9080843782
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
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
                            <div className="person">
                                <div className="person__shape">
                                    <img
                                        src={Person}
                                        className="person__photo"
                                    />
                                </div>
                                <div className="person__text">
                                    <p className="person__name">
                                        Kaviyalakshmi.K
                                    </p>
                                    <p className="person__gmail">
                                        kaviyalakshmi.k@gmail.com
                                    </p>
                                    <p className="person__mobile">
                                        +91 8072084724
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Body>
                <div className="ellipse__box">
                    <Halfellipse />
                </div>
            </ContactUsWrapper>
        </>
    )
}
