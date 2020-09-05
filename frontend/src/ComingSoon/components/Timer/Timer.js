import React, { useEffect, useState } from 'react'
import { CounterWrapper, TimerWrapper, Text } from './style'
const Counter = ({ label, count }) => {
    return (
        <CounterWrapper>
            <Text fontSize={7} color="#ffffff">
                {count.padStart(2, '0')}
            </Text>
            <Text fontSize={3.5} color="#FFE249">
                {label}
            </Text>
        </CounterWrapper>
    )
}

const calculateTimeLeft = (targetDateString) => {
    const targetDate = new Date(targetDateString)
    const now = new Date()
    const timeLeft = targetDate - now
    if (timeLeft > 0)
        return {
            days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((timeLeft / 1000 / 60) % 60),
            seconds: Math.floor((timeLeft / 1000) % 60),
        }
    else
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
}

export const Timer = ({ targetDateString }) => {
    const [count, setCount] = useState(calculateTimeLeft(targetDateString))
    useEffect(() => {
        setInterval(() => setCount(calculateTimeLeft(targetDateString)), 1000)
    }, [targetDateString])

    return (
        <TimerWrapper>
            <Counter label={'Days'} count={count.days.toString()} />
            <Counter label={'Hours'} count={count.hours.toString()} />
            <Counter label={'Minutes'} count={count.minutes.toString()} />
            <Counter label={'Seconds'} count={count.seconds.toString()} />
        </TimerWrapper>
    )
}
