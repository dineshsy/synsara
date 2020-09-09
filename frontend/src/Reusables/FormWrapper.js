import React from 'react'
import styled from 'styled-components'

const FormWrapperStyle = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 1440px;
    margin: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 7rem;

    #button {
        font-weight: 600;
    }

    @media (max-width: 1024px) {
        padding: 5rem;
    }
`

const Header = styled.h1`
    font-size: 6.4rem;
    width: fit-content;
    height: fit-content;
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 2rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 5.5rem;
    }
`

export const FormWrapper = ({ children, formName }) => {
    return (
        <FormWrapperStyle>
            <Header>{formName}</Header>
            {children}
        </FormWrapperStyle>
    )
}
