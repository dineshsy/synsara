import React from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1550px;
    min-height: 100vh;
    padding: 5rem 2rem;
    margin: auto;
    position: relative;
`

export const Section = (props) => {
    return <SectionWrapper style={props.style}>{props.children}</SectionWrapper>
}
