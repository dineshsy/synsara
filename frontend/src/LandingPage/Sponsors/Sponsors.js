import React from 'react'
import styled from 'styled-components'
import CodeChefLogo from '../../Assets/Images/codechef.webp'
import HawkShawLogo from '../../Assets/Images/hawkshaw.webp'
import WebboombaaLogo from '../../Assets/Images/Webboombaa.webp'

const SponsorsWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 15px solid rgba(59, 147, 247, 0.58);
    padding: 6rem;

    img {
        width: 400px;
        height: auto;
    }

    @media (max-width: 1024px) {
        img {
            width: 300px;
            height: auto;
        }
    }

    @media (max-width: 768px) and (orientation: portrait) {
        & #logo-div {
            flex-direction: column !important;
            justify-content: unset;
            margin-bottom: 0 !important;

            img {
                margin-bottom: 3rem;
            }
        }
    }
`

const SponsorsTitle = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 48px;
    text-transform: uppercase;
    & span {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    margin-bottom: 3rem;
`

const Star = () => (
    <svg
        style={{ width: '40px', height: 'auto' }}
        viewBox="0 0 61 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d)">
            <path
                d="M30.5 0L36.6741 16.2381H56.6541L40.49 26.2738L46.6641 42.5119L30.5 32.4762L14.3359 42.5119L20.51 26.2738L4.34595 16.2381H24.3259L30.5 0Z"
                fill="#1EBAEA"
                fill-opacity="0.49"
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
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <SponsorsTitle>
                <Star />
                <span>Sponsors</span>
                <Star />
            </SponsorsTitle>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: 'fit-content',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginBottom: '2rem',
                }}
                id="logo-div"
            >
                <img src={WebboombaaLogo} alt="" />
                <img src={HawkShawLogo} alt="" />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: 'fit-content',
                    alignItems: 'center',
                }}
            >
                <img src={CodeChefLogo} alt="" />
            </div>
        </SponsorsWrapper>
    )
}
