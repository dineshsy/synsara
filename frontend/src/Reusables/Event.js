import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { withTheme, keyframes } from 'styled-components'
import { Button } from './Button'
import useResizeObserver from '../utils/useResizeObserver'

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
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: unset;
    }
`

const EventTitle = styled.h2`
    color: ${({ theme }) => theme.primary};
    font-size: 4rem;
    margin-bottom: 1.3rem;

    @media (max-width: 750px) {
        font-size: 2.7rem;
        margin-bottom: 0.7rem;
    }

    @media (max-width: 330px) {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    @media (max-height: 425px) {
        font-size: 2.7rem;
        margin-bottom: 0.7rem;
    }
`
const EventDetails = styled.div`
    width: 50%;
    height: fit-content;
    display: grid;
    gap: 1.5rem;

    @media (max-width: 750px) {
        width: 100%;
        gap: 0.2rem;
    }
`
const EventDescription = styled.p`
    font-size: 2rem;
    color: ${({ theme }) => theme.textdark};
    margin-bottom: 1.3rem;

    @media (max-height: 425px) {
        font-size: 1.3rem;
        margin-bottom: 0.7rem;
    }

    @media (max-width: 330px) {
        font-size: 1.5rem;
        margin-bottom: 0.7rem;
    }
`
const EventRules = styled.ol`
    font-size: 2rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme.textdark};

    li {
        line-height: 2.4rem;
    }
    li:not(:last-child) {
        margin-bottom: 2rem;
    }

    @media (max-height: 425px) {
        margin-left: 1.4rem;
        font-size: 1.3rem;
        li {
            line-height: 1.5rem;
        }
        li:not(:last-child) {
            margin-bottom: 0.8rem;
        }
    }

    @media (max-width: 330px) {
        font-size: 1.5rem;
        li {
            line-height: 1.8rem;
        }
        li:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
`

const EventRegistration = styled.div`
    padding: 2rem;
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 750px) {
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
    }
`

const EventImage = styled.img`
    width: 15rem;
    height: 15rem;
    animation: ${fadeInAnim} 0.4s ease-in;
    margin-right: 2.7rem;
    @media (max-height: 425px) {
        width: 8rem;
        height: 8rem;
    }
`

const EventHolder = ({ title, description, rules, img, registerRoute }) => {
    const [width] = useResizeObserver()
    const history = useHistory()
    return width >= 750 ? (
        <EventWrapper>
            <EventDetails>
                <div>
                    <EventTitle>{title}</EventTitle>
                    <EventDescription>{description}</EventDescription>
                </div>
                <div>
                    <EventTitle>Rules</EventTitle>
                    <EventRules>
                        {rules.map((rule, idx) => (
                            <li key={idx}>{rule}</li>
                        ))}
                    </EventRules>
                </div>
            </EventDetails>
            <EventRegistration>
                <EventImage src={img} />
                <Button
                    onClick={() => history.push(`/register/${registerRoute}`)}
                >
                    Register
                </Button>
            </EventRegistration>
        </EventWrapper>
    ) : (
        <EventWrapper>
            <EventDetails>
                <div>
                    <EventTitle>{title}</EventTitle>
                    <div
                        style={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            gap: '1rem',
                        }}
                    >
                        <EventDescription>{description}</EventDescription>
                        <EventImage src={img} />
                    </div>
                </div>
                <div>
                    <EventTitle>Rules</EventTitle>
                    <EventRules>
                        {rules.map((rule, idx) => (
                            <li key={idx}>{rule}</li>
                        ))}
                    </EventRules>
                </div>
            </EventDetails>
            <EventRegistration>
                <Button
                    onClick={() => history.push(`/register/${registerRoute}`)}
                >
                    Register
                </Button>
            </EventRegistration>
        </EventWrapper>
    )
}

export const Event = withTheme(EventHolder)
