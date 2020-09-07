import React from 'react'
import styled from 'styled-components'
const ButtonWrapper = styled.button`
    min-width: 11.6875rem;
    height: 3.9375rem;
    position: relative;
    background-color: #3563c1;
    color: ${({ theme }) => theme.textlight};
    font-size: 2rem;
    border: none;
    border-radius: 0.625rem;
    cursor: pointer;
    outline: none;
    filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
    transform: translate(-2%, -2%);
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
    padding: 0.2rem 1.1rem;

    &:hover {
        filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
        transform: translate(-2%, -10%);
        transition: all 0.2s;
    }
    &:active {
        filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.25));
        transform: translate(-1%, -1%);
        transition: all 0.2s;
    }

    @media (max-width: 768px) {
        width: 10.6875rem;
        height: 3.5375rem;
    }
`

export const Button = ({ children, onClick }) => {
    return (
        <ButtonWrapper id="button" onClick={onClick}>
            {children}
        </ButtonWrapper>
    )
}
