import React from 'react'
import styled from 'styled-components'

const FormWrapperStyle = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 1440px;
    margin: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    svg {
        width: 60%;
        height: 60%;
        position: absolute;
        top: 0;
        right: 0;
    }

    #button {
        font-weight: 600;
    }
`

const Header = styled.h1`
    font-size: 6.4rem;
    width: fit-content;
    height: fit-content;
    color: ${({ theme }) => theme.secondary};
    font-weight: 600;
`

export const FormWrapper = ({ children, formName }) => {
    return (
        <FormWrapperStyle>
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 976 726"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M790.5 613.5C880.1 690.3 951.167 685.833 975.5 674V-264H34C-1.50003 -120.5 5.49997 -69.5 165 71C324.5 211.5 267 492 481 470C695 448 678.5 517.5 790.5 613.5Z"
                    fill="#3B93F7"
                />
                <path
                    d="M977 77C959.849 54.1394 883.269 13.2879 714.157 32.7668C502.766 57.1153 458.132 18.9692 463.092 -15.9304C468.051 -50.83 510.205 -65.0333 421.558 -80.0482C332.91 -95.0632 270.299 -144.166 286.416 -183.53C300.421 -217.732 313.021 -254.386 279.486 -259.416H261C268.315 -260.214 274.426 -260.175 279.486 -259.416H977V77Z"
                    fill="url(#paint0_linear)"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M975 668.003C950.662 679.834 879.599 684.295 790.005 607.5C761.839 583.358 741.8 560.891 724.177 541.135C671.726 482.331 640.688 447.533 480.505 464C354.955 476.907 322.854 385.694 285.558 279.718C259.283 205.058 230.429 123.071 164.505 65C24.1542 -58.6319 1.88395 -112.964 22.747 -222H17.797C-18.2951 -77.9958 -11.1784 -26.8165 150.982 114.177C218.005 172.452 247.34 254.727 274.054 329.65C311.972 435.998 344.608 527.532 472.252 514.579C635.107 498.054 666.663 532.974 719.989 591.985C737.905 611.811 758.279 634.356 786.914 658.584C878.009 735.654 950.261 731.171 975 719.296V668.003Z"
                    fill="#DCF8FB"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="440.155"
                        y1="-91.8166"
                        x2="1085.34"
                        y2="-180.819"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#3B93F7" />
                        <stop offset="1" stop-color="#3563C1" />
                    </linearGradient>
                </defs>
            </svg>
            <Header>{formName}</Header>
            {children}
        </FormWrapperStyle>
    )
}
