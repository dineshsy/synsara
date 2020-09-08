import React from 'react'
import { AboutUsBg, AboutUsProgrammerIcon } from '../../Assets/svg/AboutUs'
import styled from 'styled-components'

const AboutUsWrapper = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    min-height: 100vh;
    padding: 4rem;
    margin: auto;
`

const Title = styled.h2`
    color: ${(props) => props.theme.primary};
    font-size: 86px;
    @media (max-width: 1024px) {
        font-size: 60px;
    }

    @media (max-width: 768px) {
        font-size: 30px;
        width: 40%;
    }

    @media (max-height: 425px) {
        font-size: 24px;
    }
`

const Heading = styled.h1`
    color: ${(props) => props.theme.secondary};
    font-size: 38px;
    margin-bottom: 2.375rem;

    @media (max-width: 1024px) {
        font-size: 30px;
    }

    @media (max-width: 768px) {
        font-size: 15px;
        width: 40%;
    }

    @media (max-height: 425px) {
        font-size: 12px;
        margin: bottom: 0.6rem;
    }
`

const Body = styled.p`
    width: 55%;
    color: ${(props) => props.theme.secondary};
    font-size: 16px;
    text-align: justify;

    @media (max-width: 1024px) {
        font-size: 14px;
    }

    @media (max-width: 600px) {
        width: 77%;
        font-size: 10px;
    }

    @media (max-height: 425px) {
        font-size: 8px;
        margin-bottom: 0.6rem;
        width: 70%;
    }
`

export default function AboutUs() {
    return (
        <>
            <AboutUsBg />
            <AboutUsWrapper>
                <Title>About Us</Title>
                <Heading>Heading 1</Heading>
                <Body>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Praesent sapien massa.Curabitur non nulla sit amet
                    nisl tempus convallis quis ac lectus. Praesent sapien
                    massa.Curabitur non nulla sit amet nisl tempus convallis
                    quis ac lectus. Praesent sapien massa.Curabitur non nulla
                    sit amet nisl tempus convallis quis ac lectus. Praesent
                    sapien massa.Curabitur non nulla sit amet nisl tempus
                    convallis quis ac lectus. Praesent sapien massa.Curabitur
                    non nulla sit amet nisl tempus convallis quis ac lectus.
                    Praesent sapien massa.Curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. Praesent sapien
                    massa.Curabitur non nulla sit amet nisl tempus convallis
                    quis ac lectus. Praesent sapien massa.
                </Body>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <AboutUsProgrammerIcon />
                </div>
            </AboutUsWrapper>
        </>
    )
}
