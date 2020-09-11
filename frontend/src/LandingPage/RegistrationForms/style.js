import styled from 'styled-components'

export const InputWrapper = styled.div`
    display: grid;
    gap: 2rem;
    margin-bottom: 0.5rem;
`

export const Label = styled.h4`
    font-size: ${({ size }) => size};
    color: ${({ state, theme }) =>
        state === 'normal' ? theme.textdark : `#dc3545`};
`

export const RadioButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(27rem / 2), 1fr));
    width: fit-content;
    row-gap: 1.25rem;
`
