import React from 'react'
import styled, { withTheme, keyframes } from 'styled-components'

export const fadeInAnim = keyframes`
    from{
        opacity: 0;
        transform: translate(-2%,-2%);
        filter: drop-shadow(3px 3px 2px #000);
    }
    to{
        opacity: 1;
    }
`

const EventWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 740px) {
        flex-direction: column;
    }
`

const EventTitle = styled.h2`
    color: ${({ theme }) => theme.primary};
    font-size: 40px;
    margin-bottom: 1.3rem;

    @media (max-width: 740px) {
        font-size: 30px;
    }
`
const EventDetails = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 740px) {
        width: 100%;
    }
`
const EventDescription = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.textdark};
    margin-bottom: 1.3rem;
`
const EventRules = styled.ol`
    line-height: 46px;
    font-size: 20px;
    margin-left: 1em;
    color: ${({ theme }) => theme.textdark};
`

const EventRegistration = styled.div`
    padding: 2rem;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 740px) {
        width: 100%;
    }
`

const EventImage = styled.img`
    width: 250px;
    height: 250px;
    animation: ${fadeInAnim} 0.4s ease-in;
`

const EventRegisterButton = styled.button`
    width: 10rem;
    height: 3rem;
    position: relative;
    background-color: #3563c1;
    color: ${({ theme }) => theme.textlight};
    font-size: 20px;
    border: none;
    border-radius: 10px;
    margin-top: 10rem;
    cursor: pointer;
    outline: none;
    filter: drop-shadow(6px 6px 4px #000);
    transform: translate(-2%, -2%);
    -webkit-tap-highlight-color: transparent;

    &:active {
        filter: drop-shadow(4px 4px 2px #000);
        transform: translate(-1%, -1%);
        transition: all 0.2s;
    }
`

const EventHolder = ({ title, description, rules, img }) => {
    return (
        <EventWrapper>
            <EventDetails>
                <EventTitle>{title}</EventTitle>
                <EventDescription>{description}</EventDescription>
                <EventTitle>Rules</EventTitle>
                <EventRules>
                    {rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                    ))}
                </EventRules>
            </EventDetails>
            <EventRegistration>
                <EventImage src={img} />
                <EventRegisterButton>Register</EventRegisterButton>
            </EventRegistration>
        </EventWrapper>
    )
}

export const Event = withTheme(EventHolder)
