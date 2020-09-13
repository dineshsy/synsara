import React from 'react'
import styled from 'styled-components'
const ButtonWrapper = styled.button`
    width: fit-content;
    min-width: 11.6875rem;
    height: 3.9375rem;
    position: relative;
    background-color: #3563c1;
    color: ${({ theme }) => theme.textlight};
    font-size: 1.4rem;
    border: none;
    border-radius: 0.625rem;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
    transform: translate(-2%, -2%);
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
    padding: 0.2rem 1.1rem;

    &:focus {
        outline: none;
    }

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

    span {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);

        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;

        animation: ripple 1s;
        opacity: 0;
    }

    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }

        to {
            opacity: 0;
            transform: scale(10);
        }
    }
`

export const Button = ({ children, onClick, disabled }) => {
    const onBtnClick = (e) => {
        const button = document.querySelector('#button')

        let ripple = document.createElement('span')
        button.appendChild(ripple)

        let x = e.pageX - e.target.offsetLeft
        let y = e.pageY - e.target.offsetTop

        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`

        setTimeout(() => {
            ripple.remove()
        }, 300)

        if (onClick) onClick(e)
    }

    return (
        <ButtonWrapper id="button" onClick={disabled ? null : onBtnClick}>
            {children}
        </ButtonWrapper>
    )
}
