import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    background-color: transparent;
    color: white;
`

export const Radio = styled.button`
    box-sizing: border-box;
    padding: 0;
    background-color: #bdbdbd;
    width: 1.5625rem;
    height: 1.5625rem;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    border: none;
    ${(props) =>
        props.label &&
        css`
            margin-right: 1rem;
            color: white;
        `}

    ${(props) =>
        props.active &&
        css`
            border: 3px solid #bdbdbd;
            background-color: ${(props) => props.theme.primary};
        `}
`

export const Label = styled.div`
    font-weight: normal;
    font-size: 1.125rem;
    font-style: normal;
    line-height: 22px;
    color: #828282;
`
