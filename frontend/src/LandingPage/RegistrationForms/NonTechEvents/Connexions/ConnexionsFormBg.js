import React from 'react'
import styled from 'styled-components'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'
import connexions from '../../../../Assets/Images/connexions.png'

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

export default function ConnexionsFormBg() {
    return (
        <BgSVG
            viewBox="0 0 925 966"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect x="405" width="408" height="354" fill="url(#pattern0)" />
            <path
                d="M135.886 1141.17C61.7764 1233.01 68.348 1303.91 80.8975 1327.88L1018.49 1300.07L990.573 358.985C846.084 327.755 795.313 336.264 659.604 499.859C523.894 663.455 241.813 614.296 270.148 827.549C298.482 1040.8 228.524 1026.37 135.886 1141.17Z"
                fill="#3B93F7"
            />
            <path
                d="M677.68 1311.68C700.022 1293.86 738.585 1216.1 714.101 1047.64C683.496 837.065 720.302 791.32 755.333 795.243C790.365 799.165 805.812 840.88 818.192 751.826C830.572 662.772 877.797 598.733 917.621 613.676C952.224 626.661 989.235 638.169 993.269 604.499L992.721 586.021C993.735 593.309 993.877 599.419 993.269 604.499L1013.95 1301.71L677.68 1311.68Z"
                fill="url(#paint0_linear)"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.8776 1327.2C74.3299 1303.23 67.7644 1232.33 141.869 1140.49C165.166 1111.63 187.028 1090.93 206.254 1072.73C263.477 1018.56 297.339 986.501 276.13 826.877C259.507 701.764 349.728 666.973 454.552 626.552C528.4 598.075 609.496 566.803 665.587 499.186C785.003 355.232 838.651 331.361 948.258 348.982L948.111 344.034C803.1 312.227 752.154 320.858 616.03 487.127C559.768 555.849 478.399 587.61 404.301 616.533C299.123 657.587 208.598 692.923 225.329 820.127C246.675 982.42 212.705 1015 155.302 1070.05C136.015 1088.55 114.084 1109.58 90.7164 1138.92C16.3811 1232.26 23.0035 1304.35 35.6066 1328.72L86.8776 1327.2Z"
                fill="#DCF8FB"
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
                        transform="translate(-0.000102124) scale(0.00172152 0.00198413)"
                    />
                </pattern>
                <linearGradient
                    id="paint0_linear"
                    x1="830.506"
                    y1="770.066"
                    x2="938.598"
                    y2="1412.33"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#3B93F7" />
                    <stop offset="1" stop-color="#3563C1" />
                </linearGradient>
                <image id="image0" width="581" height="504" href={connexions} />
            </defs>
        </BgSVG>
    )
}
