import React from 'react'
import styled from 'styled-components'
import ComingSoonBg from '../../Assets/Images/coming-soon-bg.png'
import { Instagram } from '../../Assets/svg/Instagram'
import { Linkedin } from '../../Assets/svg/Linkedin'
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
    flex-flow: column;
`
const Synsara = styled.h2`
    font-size: 6.5rem;
    text-align: center;
    color: #e5e5e5;
`
const FollowUs = styled.h3`
    font-size: 4.6875rem;
    text-align: center;
    color: #e5e5e5;
    text-shadow: 0px 8px 6px rgba(0, 0, 0, 0.3);
`

const ComingSoon = styled.h1`
    font-family: 'Bungee Shade', cursive;
    font-size: 9.375rem;
    width: 100%;
    text-align: center;
    color: #ffe249;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SocialIconsWrapper = styled.div`
    height: fit-content;
    width: fit-content;
    display: grid;
    grid-auto-flow: column;
    gap: 3.5rem;
`

export const index = () => {
    return (
        <ComingSoonWrapper>
            <Synsara>சின்சாரா 2020</Synsara>
            <ComingSoon>COMING SOON</ComingSoon>
            <FollowUs>Follow us for more updates</FollowUs>
            <SocialIconsWrapper>
                <Instagram fill="#ffe249" width="5rem" height="5rem" />
                <Linkedin fill="#ffe249" width="5rem" height="5rem" />
            </SocialIconsWrapper>
        </ComingSoonWrapper>
    )
}
