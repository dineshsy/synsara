import React from 'react'
import styled, { keyframes } from 'styled-components'
import ComingSoonBg from '../../Assets/Images/coming-soon-bg.png'
import { Instagram } from '../../Assets/svg/Instagram'
import { Linkedin } from '../../Assets/svg/Linkedin'
import { Timer } from './Timer/Timer'
import { Facebook } from '../../Assets/svg/Facebook'

export const fadeInAnim = (offset) => keyframes`
    from{
        opacity: 0;
        transform: translateY(${offset});
    }
    to{
        opacity: 1;
    }
`

const ComingSoonWrapper = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    padding: 2rem;
    margin: auto;
    border-radius: 5rem;
    background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(255, 255, 255, 0) 100%
        ),
        url('${ComingSoonBg}');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media (max-width: 1024px) {
        background-position: center;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`
const Synsara = styled.h2`
    font-size: 6.5rem;
    text-align: center;
    color: #e5e5e5;
    margin-bottom: 1rem;
    animation: ${fadeInAnim('-100%')} 0.9s ease-in;
`
const FollowUs = styled.h3`
    font-size: 4.6875rem;
    text-align: center;
    color: #e5e5e5;
    text-shadow: 0px 8px 6px rgba(0, 0, 0, 0.3);
    margin-bottom: 1.5rem;
    animation: ${fadeInAnim('100%')} 0.8s ease-in;
`

const ComingSoon = styled.h1`
    font-family: 'Bungee Shade', cursive;
    line-height: 10rem;
    font-size: 9.375rem;
    width: 100%;
    text-align: center;
    color: #ffe249;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    @media (max-width: 500px) {
        font-size: 5rem;
    }
    margin-bottom: 1.5rem;
    animation: ${fadeInAnim('-100%')} 0.8s ease-in;
`

const SocialIconsWrapper = styled.div`
    height: fit-content;
    width: fit-content;
    display: grid;
    grid-auto-flow: column;
    gap: 3.5rem;
    animation: ${fadeInAnim('100%')} 0.9s ease-in;
`

export const index = () => {
    return (
        <ComingSoonWrapper>
            <Synsara>SYNSARA 2020</Synsara>
            <ComingSoon>COMING SOON</ComingSoon>
            <Timer
                targetDateString="09/05/2020 17:13:00" /* MM/DD/YYYY H:M:S */
            />

            <FollowUs>Follow us for more updates</FollowUs>
            <SocialIconsWrapper>
                <Facebook fill="#ffe249" width="5rem" height="5rem" />
                <Instagram fill="#ffe249" width="5rem" height="5rem" />
                <Linkedin fill="#ffe249" width="5rem" height="5rem" />
            </SocialIconsWrapper>
        </ComingSoonWrapper>
    )
}
