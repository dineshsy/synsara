import React from 'react'
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
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 740px) {
        flex-direction: column;
    }
`

const EventTitle = styled.h2`
    color: ${({ theme }) => theme.primary};
    font-size: 4rem;
    margin-bottom: 1.3rem;

    @media (max-width: 740px) {
        font-size: 3rem;
    }
`
const EventDetails = styled.div`
    width: 50%;
    height: fit-content;
    display: grid;
    gap: 1.5rem;
    @media (max-width: 740px) {
        width: 100%;
    }
`
const EventDescription = styled.p`
    font-size: 2rem;
    color: ${({ theme }) => theme.textdark};
    margin-bottom: 1.3rem;
`
const EventRules = styled.ol`
    line-height: 46px;
    font-size: 2rem;
    margin-left: 1em;
    color: ${({ theme }) => theme.textdark};

    li {
        line-height: 2.4rem;
    }
    li:not(:last-child) {
        margin-bottom: 2rem;
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
    @media (max-width: 740px) {
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
    }
`

const EventImage = styled.img`
    width: 15rem;
    height: 15rem;
    animation: ${fadeInAnim} 0.4s ease-in;
`

const EventHolder = ({ title, description, rules, img }) => {
    const [width] = useResizeObserver()
    return width >= 740 ? (
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
                <Button>Register</Button>
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
                <Button>Register</Button>
            </EventRegistration>
        </EventWrapper>
    )
}

export const Event = withTheme(EventHolder)
