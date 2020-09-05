import styled from 'styled-components'

export const TimerWrapper = styled.div`
    display: grid;
    gap: 3.5rem;
    grid-auto-flow: column;
`

export const CounterWrapper = styled.div`
    width: 18.75rem;
    height: 17rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #e5e5e5;

    @media (max-width: 600px) {
        width: fit-content;
        height: fit-content;
        border-radius: none;
        background: none;
        border: none;
    }
`

export const Text = styled.h1`
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color};
`
