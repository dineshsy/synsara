import React from 'react'
import { CounterWrapper, TimerWrapper, Text } from './style'
const Counter = ({ label, count }) => {
    return (
        <CounterWrapper>
            <Text fontSize="7em" color="#ffffff">
                {count.padStart(2, '0')}
            </Text>
            <Text fontSize="3.5em" color="#FFE249">
                {label}
            </Text>
        </CounterWrapper>
    )
}

export const Timer = () => {
    return (
        <TimerWrapper>
            <Counter label={'Days'} count="12" />
            <Counter label={'Hours'} count="6" />
            <Counter label={'Minutues'} count="2" />
            <Counter label={'Seconds'} count="11" />
        </TimerWrapper>
    )
}
