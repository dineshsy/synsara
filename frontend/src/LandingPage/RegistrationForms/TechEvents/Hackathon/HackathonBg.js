import React from 'react'
import styled from 'styled-components'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'

const BgSVG = styled.svg`
    width: auto;
    height: 60%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: -1;
    overflow: hidden;

    @media ${sizeMaxW.laptop} {
        height: 40%;
    }

    @media ${sizeMaxW.tablet} {
        height: 20%;
    }

    @media ${sizeMaxW.mobileL} {
        height: 40%;
        visibility: hidden;
        .Paper-bg-svg {
            visibility: visible;
        }
    }

    @media ${sizeMaxH.mobileL} {
        height: 80%;
    }
`

export default function HackathonBg() {
    return (
        <BgSVG
            viewBox="0 0 904 984"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M117.301 795.818C41.0472 885.883 45.9456 956.921 57.9266 981.182L995.909 975.482L990.188 33.9994C846.475 -0.627952 795.519 6.68182 655.991 167.033C516.462 327.383 235.618 271.589 258.918 485.451C282.218 699.314 212.619 683.236 117.301 795.818Z"
                fill="#3B93F7"
            />
            <path
                d="M654.925 979.054C677.681 961.765 718.066 884.938 697.56 715.947C671.927 504.708 709.802 459.844 744.731 464.591C779.66 469.338 794.119 511.405 808.595 422.668C823.071 333.93 871.793 271.022 911.253 286.9C945.54 300.697 982.27 313.074 987.096 279.509L986.984 261.023C987.826 268.333 987.824 274.444 987.096 279.509L991.335 977.01L654.925 979.054Z"
                fill="url(#paint0_linear)"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M63.9213 980.645C51.9422 956.379 47.0498 885.345 123.299 795.286C147.269 766.974 169.614 746.798 189.263 729.056C247.747 676.249 282.356 644.999 264.915 484.92C251.245 359.45 342.262 326.796 448.009 288.856C522.508 262.128 604.319 232.777 661.988 166.501C784.765 25.4017 838.96 2.80168 948.121 23.0018L948.091 18.0519C803.87 -17.1645 752.735 -9.7369 612.729 153.277C554.863 220.653 472.767 250.488 398.009 277.656C291.892 316.22 200.559 349.411 214.287 476.975C231.801 639.726 197.073 671.493 138.388 725.177C118.671 743.213 96.25 763.723 72.1972 792.506C-4.31767 884.067 0.603649 956.29 12.6286 980.957L63.9213 980.645Z"
                fill="#DCF8FB"
            />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="820.476"
                    y1="441.193"
                    x2="913.398"
                    y2="1085.83"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#3B93F7" />
                    <stop offset="1" stop-color="#3563C1" />
                </linearGradient>
            </defs>
        </BgSVG>
    )
}
