import styled, { keyframes } from 'styled-components'

const load = keyframes`
0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 1em;
  }
  40% {
    box-shadow: 0 -0.5rem;
    height: 1.8em;
  }
`

export const Loader = styled.div`
    &,
    &:before,
    &:after {
        background: ${(props) => props.theme.textlight};
        animation: ${load} 1s infinite ease-in-out;
        width: 0.5rem;
        height: 1rem;
    }
    color: ${(props) => props.theme.textlight};
    margin: auto auto;
    position: relative;
    font-size: 11px;
    transform: translateZ(0);
    animation-delay: -0.16s !important;
    &:before,
    &:after {
        position: absolute;
        top: 0;
        content: '';
    }
    &:before {
        left: -1em;
        animation-delay: -0.32s;
    }
    &:after {
        left: 1em;
    }
`
