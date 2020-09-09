import React from 'react'
import styled from 'styled-components'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import iplIcon from '../../../../Assets/Images/dream-11-ipl.png'

const BgSVG = styled.svg`
    width: auto;
    height: 90%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: -1;
    overflow: hidden;

    @media ${sizeMaxW.laptop} {
        height: 80%;
    }

    @media ${sizeMaxW.tablet} {
        height: 55%;
    }

    @media ${sizeMaxW.mobileL} {
        height: 40%;
    }

    @media ${sizeMaxH.mobileL} {
        height: 80%;
    }
`

export default function Dream11iplBg() {
    return (
        <BgSVG
            viewBox="0 0 913 920"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M790.5 310.5C880.1 233.7 951.167 238.167 975.5 250V1188H34C-1.50003 1044.5 5.49997 993.5 165 853C324.5 712.5 267 432 481 454C695 476 678.5 406.5 790.5 310.5Z"
                fill="#3B93F7"
            />
            <path
                d="M977 847C959.849 869.861 883.269 910.712 714.157 891.233C502.766 866.885 458.132 905.031 463.092 939.93C468.051 974.83 510.205 989.033 421.558 1004.05C332.91 1019.06 270.299 1068.17 286.416 1107.53C300.421 1141.73 313.021 1178.39 279.486 1183.42H261C268.315 1184.21 274.426 1184.18 279.486 1183.42H977V847Z"
                fill="url(#paint0_linear)"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M975 255.997C950.662 244.166 879.599 239.705 790.005 316.5C761.839 340.642 741.8 363.109 724.177 382.865C671.726 441.669 640.688 476.467 480.505 460C354.955 447.093 322.854 538.306 285.558 644.282C259.283 718.942 230.429 800.929 164.505 859C24.1542 982.632 1.88395 1036.96 22.747 1146H17.797C-18.2951 1002 -11.1784 950.817 150.982 809.823C218.005 751.548 247.34 669.273 274.054 594.35C311.972 488.002 344.608 396.468 472.252 409.421C635.107 425.946 666.663 391.026 719.989 332.015C737.905 312.189 758.279 289.644 786.914 265.416C878.009 188.346 950.261 192.829 975 204.704V255.997Z"
                fill="#DCF8FB"
            />
            <rect
                x="229"
                width="516"
                height="291"
                rx="10"
                fill="url(#pattern0)"
            />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0"
                        transform="translate(-0.00015269) scale(0.0011393 0.0020202)"
                    />
                </pattern>
                <linearGradient
                    id="paint0_linear"
                    x1="440.155"
                    y1="1015.82"
                    x2="1085.34"
                    y2="1104.82"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#3B93F7" />
                    <stop offset="1" stop-color="#3563C1" />
                </linearGradient>
                <image id="image0" width="878" height="495" href={iplIcon} />
            </defs>
        </BgSVG>
    )
}
