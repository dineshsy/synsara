import React from 'react'
import styled from 'styled-components'
import CodeChefLogo from '../../Assets/Images/codechef.webp'
import HawkShawLogo from '../../Assets/Images/hawkshaw.webp'
import WebboombaaLogo from '../../Assets/Images/Webboombaa.webp'
import MadrasSwitchgears from '../../Assets/Images/madras-switchgears.webp'
import LemaLabsLogo from '../../Assets/Images/lema-labs-logo.png'
import RedHatLogo from '../../Assets/Images/red-hat-logo.svg'
import AdvantageProLogo from '../../Assets/Images/advantagepro_logo.jpg'

const SponsorsWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 15px solid rgba(59, 147, 247, 0.58);
    padding: 6rem;

    img {
        width: 225px;
        height: auto;
    }

    @media (max-width: 768px) and (orientation: portrait) {
        & #logo-div {
            flex-direction: column !important;
            justify-content: unset;
            margin-bottom: 0 !important;
        }
    }

    @media only screen and (max-width: 500px) {
        img {
            width: 125px;
        }
    }

    @media only screen and (min-width: 500px) {
        img {
            width: 175px;
        }
    }
    @media only screen and (min-width: 1000px) {
        img {
            width: 225px;
        }
    }
`

const SponsorsTitle = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 3rem;
    text-transform: uppercase;
    & span {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    margin-bottom: 3rem;
`

const BgWrapper = styled.svg`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
        width: 60%;
        height: auto;
    }

    @media (max-width: 768px) and (orientation: portrait) {
        width: 50%;
        height: auto;
    }
`

const RowWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    > img {
        margin: 2.5rem;
    }

    @media (max-width: 768px) and (orientation: portrait) {
        > img {
            margin-bottom: 1rem !important;
        }
    }
`

const Bg = () => (
    <BgWrapper
        width="676"
        height="506"
        viewBox="0 0 676 506"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M835.001 389.068C929.645 468.894 1004.71 464.251 1030.42 451.952V-523H35.9144C-1.58409 -373.847 5.80997 -320.838 174.289 -174.803C342.768 -28.7682 282.031 262.782 508.078 239.915C734.125 217.049 716.696 289.286 835.001 389.068Z"
            fill="#3B93F7"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1029.89 445.718C1004.18 458.015 929.116 462.651 834.478 382.832C804.727 357.738 783.559 334.387 764.945 313.852C709.541 252.731 676.755 216.563 507.555 233.679C374.937 247.094 341.029 152.288 301.633 42.1368C273.879 -35.4641 243.401 -120.681 173.766 -181.04C25.5143 -309.542 1.9902 -366.014 24.0276 -479.345H18.7989C-19.3249 -329.668 -11.8076 -276.473 159.481 -129.925C230.278 -69.3543 261.264 16.162 289.482 94.0358C329.534 204.574 364.008 299.713 498.838 286.251C670.86 269.074 704.193 305.37 760.521 366.706C779.445 387.313 800.966 410.746 831.214 435.928C927.436 516.034 1003.76 511.375 1029.89 499.032V445.718Z"
            fill="#DCF8FB"
        />
    </BgWrapper>
)

const Star = () => (
    <svg
        style={{ width: '2.75rem', height: '2.75rem' }}
        viewBox="0 0 61 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d)">
            <path
                d="M30.5 0L36.6741 16.2381H56.6541L40.49 26.2738L46.6641 42.5119L30.5 32.4762L14.3359 42.5119L20.51 26.2738L4.34595 16.2381H24.3259L30.5 0Z"
                fill="#1EBAEA"
                fillOpacity="0.49"
            />
        </g>
        <defs>
            <filter
                id="filter0_d"
                x="0.345703"
                y="0"
                width="60.3081"
                height="50.5119"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)

export default function Sponsors() {
    return (
        <SponsorsWrapper>
            <Bg />
            <SponsorsTitle>
                <Star />
                <span>Sponsors</span>
                <Star />
            </SponsorsTitle>
            <RowWrapper>
                <img src={LemaLabsLogo} alt="" />
                <img src={MadrasSwitchgears} alt="" />
                <img src={HawkShawLogo} alt="" />
                <img src={RedHatLogo} alt="" />
            </RowWrapper>
            <RowWrapper>
                <img src={WebboombaaLogo} alt="" />
                <img src={CodeChefLogo} alt="" />
                <img src={AdvantageProLogo} alt="" />
            </RowWrapper>
        </SponsorsWrapper>
    )
}
