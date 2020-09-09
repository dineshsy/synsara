import React from 'react'
import styled from 'styled-components'
import { sizeMaxW, sizeMaxH } from '../../../../utils/MediaQueires'

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

export default function CodingFormBg() {
    return (
        <BgSVG
            viewBox="0 0 977 935"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="M790.5 375.5C880.1 298.7 951.167 303.167 975.5 315V1253H34C-1.50003 1109.5 5.49997 1058.5 165 918C324.5 777.5 267 497 481 519C695 541 678.5 471.5 790.5 375.5Z"
                fill="#3B93F7"
            />
            <path
                d="M977 912C959.849 934.861 883.269 975.712 714.157 956.233C502.766 931.885 458.132 970.031 463.092 1004.93C468.051 1039.83 510.205 1054.03 421.558 1069.05C332.91 1084.06 270.299 1133.17 286.416 1172.53C300.421 1206.73 313.021 1243.39 279.486 1248.42H261C268.315 1249.21 274.426 1249.18 279.486 1248.42H977V912Z"
                fill="url(#paint0_linear)"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M975 320.997C950.662 309.166 879.599 304.705 790.005 381.5C761.839 405.642 741.8 428.109 724.177 447.865C671.726 506.669 640.688 541.467 480.505 525C354.955 512.093 322.854 603.306 285.558 709.282C259.283 783.942 230.429 865.929 164.505 924C24.1542 1047.63 1.88395 1101.96 22.747 1211H17.797C-18.2951 1067 -11.1784 1015.82 150.982 874.823C218.005 816.548 247.34 734.273 274.054 659.35C311.972 553.002 344.608 461.468 472.252 474.421C635.107 490.946 666.663 456.026 719.989 397.015C737.905 377.189 758.279 354.644 786.914 330.416C878.009 253.346 950.261 257.829 975 269.704V320.997Z"
                fill="#DCF8FB"
            />
            <g clip-path="url(#clip0)">
                <path
                    opacity="0.1"
                    d="M671.936 212.465L713.086 171.387L671.936 130.309L684.482 117.788L738.178 171.387L684.482 224.985L671.936 212.465Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M554.422 174.318H571.15V157.568H554.422V174.318ZM638.396 157.568H621.668V174.318H638.396V157.568ZM588.045 174.318H604.773V157.568H588.045V174.318Z"
                    fill="black"
                />
                <path
                    opacity="0.1"
                    d="M531.756 212.046L490.563 170.968L531.714 129.89L519.168 117.37L465.513 170.968L519.21 224.566L531.756 212.046Z"
                    fill="black"
                />
                <path
                    opacity="0.2"
                    d="M682.861 309.965C676.849 310.013 668.891 309.027 667.29 308.05C666.07 307.306 665.584 304.636 665.421 303.405C665.308 303.409 665.243 303.411 665.243 303.411C665.243 303.411 665.58 307.712 667.182 308.689C668.784 309.666 676.742 310.652 682.754 310.604C684.489 310.59 685.089 309.971 685.056 309.056C684.815 309.609 684.153 309.954 682.861 309.965Z"
                    fill="black"
                />
                <path
                    d="M732.965 160.315C732.965 160.315 720.089 150.526 719.112 154.114C718.134 157.702 728.559 165.857 728.559 165.857L732.965 160.315Z"
                    fill="#FFB9B9"
                />
                <path
                    opacity="0.1"
                    d="M732.965 160.315C732.965 160.315 720.089 150.526 719.112 154.114C718.134 157.702 728.559 165.857 728.559 165.857L732.965 160.315Z"
                    fill="black"
                />
                <path
                    d="M671.936 204.509L713.086 163.431L671.936 122.353L684.482 109.832L738.178 163.431L684.482 217.029L671.936 204.509Z"
                    fill="#3563C1"
                />
                <path
                    d="M554.422 166.362H571.15V149.612H554.422V166.362ZM638.396 149.612H621.668V166.362H638.396V149.612ZM588.045 166.362H604.773V149.612H588.045V166.362Z"
                    fill="#3563C1"
                />
                <path
                    d="M531.756 204.09L490.563 163.012L531.714 121.934L519.168 109.414L465.513 163.012L519.21 216.61L531.756 204.09Z"
                    fill="#3563C1"
                />
                <rect
                    x="779.766"
                    y="147.656"
                    width="36.6936"
                    height="36.7304"
                    fill="url(#pattern0)"
                />
                <rect
                    x="498.694"
                    y="281.354"
                    width="22.0161"
                    height="22.0382"
                    fill="url(#pattern1)"
                />
                <rect
                    x="368.798"
                    y="78.603"
                    width="22.0161"
                    height="22.0382"
                    fill="url(#pattern2)"
                />
                <rect
                    x="628.589"
                    y="274.009"
                    width="36.6935"
                    height="36.7304"
                    fill="url(#pattern3)"
                />
                <rect
                    x="561.806"
                    y="19.8344"
                    width="36.6936"
                    height="36.7304"
                    fill="url(#pattern4)"
                />
                <rect
                    x="371"
                    y="173.367"
                    width="22.0161"
                    height="22.0382"
                    fill="url(#pattern5)"
                />
                <rect
                    x="559.605"
                    y="307.066"
                    width="38.8952"
                    height="38.9342"
                    fill="url(#pattern6)"
                />
            </g>
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0"
                        transform="translate(-0.0005013) scale(0.0200201)"
                    />
                </pattern>
                <pattern
                    id="pattern1"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image1"
                        transform="translate(-0.000502305) scale(0.0333668)"
                    />
                </pattern>
                <pattern
                    id="pattern2"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image2"
                        transform="translate(-0.000501612) scale(0.0333668)"
                    />
                </pattern>
                <pattern
                    id="pattern3"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image3"
                        transform="translate(-0.000501924) scale(0.0200201)"
                    />
                </pattern>
                <pattern
                    id="pattern4"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image4"
                        transform="translate(-0.000501508) scale(0.0200201)"
                    />
                </pattern>
                <pattern
                    id="pattern5"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image5"
                        transform="translate(-0.000502132) scale(0.0333668)"
                    />
                </pattern>
                <pattern
                    id="pattern6"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image6"
                        transform="translate(-0.000501366) scale(0.0385001)"
                    />
                </pattern>
                <linearGradient
                    id="paint0_linear"
                    x1="440.155"
                    y1="1080.82"
                    x2="1085.34"
                    y2="1169.82"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#3B93F7" />
                    <stop offset="1" stop-color="#3563C1" />
                </linearGradient>
                <clipPath id="clip0">
                    <rect
                        width="455"
                        height="346"
                        fill="white"
                        transform="translate(371)"
                    />
                </clipPath>
                <image
                    id="image0"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,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"
                />
                <image
                    id="image1"
                    width="30"
                    height="30"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAC3UlEQVRIDe1WT0gUYRR/3+esGoLQKYwoiA4REYg7mx1ylYiU0v4hBOZl1zxUUhejW3aKyEuHLlu7RGkFQuGfCg+Ru0ZY4yLUHrrUJQ8SRCQYuu7M129mV90ZZ2Z33cWTy3vv2/d7f37Mm2++GaKt3yZNgJWaZ1/Pm4rt/6ruoq+fiI1oZerzeKjpG3yTlJS4NvhujySkIWIkm1iIZuA/I1UbUB43zeE/cd2UQr2BiRaJpLgNqd6+FuYelXEFqyGSYYswdd3THp5a6AdhD9rkmuAu5BhSFHFdd6yGqwsvQNpgdCvArBH3Ce6djTUzQVfRaFHjqd546Nh3p17eYMzHVDGE+G5owbJ6j+WfsfcgfY0OLSToLFelhK8r2nek/eM2YCaRgxOXGYlJgBsiRZ1pczXoQJZWCkG3UtXLCd+lyVM6fqhzvEruig7gMXkAvxzqIAI5DqEMvHrFGd9u2Ss0bVQORkcqyiunMI0OuyQDE/SLCXFOCTd2Gr6LkVxi1lCrFTD5gkKalLwRDx3/a8IdHDfiftRcg3qgbvIHU+hRIv5BtyRrzHHUStjfq5J2AE3HrUVZ/kuPR9pfKKle70isByUucWLY67pjqyK5pCU121AO0JFYDkTvYFN9JRLNzj3YBa7yhC8YO+OcYx9xJMYhchMlLo8MomnZIUi88gajY7WBDzvTUG7rTLy+dhRQAmorOKRPSkyd9gaibbYJFjAf4h+M81Zstral5GI9JuG2e2sYo2GM/omFZ53LsxD9CMxyaRFNbkvznoOfHx4d0wNfnp5YUB75L+K+X4GfhNoKRp/zAMGEMrUbeUlQ4S8JTM7gNEyGuuDlcMdUtVa5FEHheWheskKcPeq8CrOTPg3WzyvhhnZg16HL0LylKOI0CxO4ivtCiNPwf0PdZHYlWALidKvpSOPbFKXqcMQqacRkZ+D14mNPxmpIUffY6GAxa5+3opGIDzt93tLWb7Mm8B+0Id3QWHU1nQAAAABJRU5ErkJggg=="
                />
                <image
                    id="image2"
                    width="30"
                    height="30"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACY0lEQVRIDe1VPWgUQRR+b3aD2gYstdAihQiGcKhw8WwsJL0WoqiBCCmFQMDSSu1sDCGHnYUp0ki6EFdCIJ6BYGdACElatbHMzcv3dm/JbTKzuxNFLLK82Zn53s+3b2Z2HtHJ849WgH08IxMr543tvmLhq2ojLGvWRFPrs81tnR9uofZO4saj5BwZ2kDwQbR++UmWrnTetnb6wVB79TX6OtKMvAQ2SCIfmOkCibmIL1xUTJhfoC9KqD28YzSH8I0UFJ78PJdlNzy+NBlTvMVGMl1qkL9C7QkLmvsW+3QlTGQlh2Mb23QsTp9Qe/JkTAlI7nbFzFx/sPQEY+oamul9xbLOD7VQew+xpSnkdYuJxvYG4t0+Ej1c033zbBhqD690idAXRE+tjaJhIp4/UPC8Yqo7wLKRYqojpoUMoT31VUx1PazQIanC/MikMZ6Igp12q9J25GFy2UT0FfabsB9C7xVnxl7rCgVI76UmQh+p4vlrxI3HyR1wPUXrGmNm0ZdKXKqtUOqNJZE0ca3eh+ltNMKl83ytPbqejktelfuW77HeYGK5xSzXcHAuCYnu4dk8NgL9xn3+rDN383WOlfW1Mxah74TU0pNG2RuBd3GSVzH7dGrAvFt5M/oLWC2pTYxoyAi/i9CqWLNx5jRthhDBvyC1iUWixpd281vB+w8m2Bq3d15fsap6WrGt9L6sHruj+FEnsZ5WXJm167E/vF/j/o+PUV/9FG6NZ4/D66s7vB91Z9yr0wH12M/g0XgyDq7HnvB+2E18jPrqp3BrnEutNVRrKf4hrcc/4Irmr8fQn8j/uwL74KUEASAkNqQAAAAASUVORK5CYII="
                />
                <image
                    id="image3"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,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"
                />
                <image
                    id="image4"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAESUlEQVRYCe1Y229URRif75zdtEpbQkBqGqOi8tQQQsruNoRuuzFeHtAXhXhJiHS3CSmXfwCjRiL6phivdXeNmvIgDzzUkEBC2G1Fuu0WH9AQEhIIkEK1obFoW9yzM/6GdLdzLru9Hnc1p/m+zHyXmfl+3zdndqaMeX9eBrwMlMsAWY3b9p5bn8sZH0P/LHgNuJpogjFxyuDawZ+/Dv+uBuZTBdkHiM/QvgSuRkJi6RWfxnQEtwtcJK3Ym+2gRM/Ndqu4Ec9bg7MBEYzVWZ2qUK63xmQDYnX4r8gekGqrlFcRryIuZcDbWi4ldsnTehVZcupcGuhVxKXELnlaryJLTp1LA/83FbG9EFcyYcOJdrzT5mYMRNN47szJ93vEThDRlzmDXVhVS8a9GV5HPm2z4LwL9hfBCyJXgcwTASfB9gwl2r+1+OFdzm5A98PWaLoTmfgKfQ1cluZ1KDt6OUbBPhxK2kCYZswm2pMo4fsmZQmhUhURmsY/UmMKxFIHBddaiUTm8cmxT44f35XfEj3zGDFqwX9OVFfHfqWA/JaJR24WIgpE+59mQhwFCKl69Vp948atsfQlbD1UQ9je59LJyj6r4l+S8+o6gvJ5EsouJ7YPIFSXefvK6Hl9V9KhMfT6YENhwmw8kmJEbzFi0wXdYttKAdHztfdeVoMdjocPc42exFF8BPo74EVRpYAg+eyDQOfAE2q0Iz3hW0Px8CFtpmaDEOIQbJPgBZG2IC93nB5ixDOhzlTEOn2mt3Uym+w4IoQexPF7yWp3kisJRMazjhOdCXSm+kKxs61SoXI2uf2y0HkYupvgslRpIDI4/FTQDi6088FoejDYNbBDKgs80hMZxz48XJBLtW4CMR2xpQJQ9dhGIdyx+oKx/vdUvW7w06rs1F8JIDP45X1bEPtCXQBpNm2Hpw6crFHt6E8IJnYj2yfQNxE+9H2qYrx++pYqO/WXBQQZPJ1nfNNwouPdDX+M7YcsMzmOhe5KcGiLVD9V83BRYKyP69ScTXR8V+PXogBzUbFhKPtVldfnVq9WZae+z0m5YJ1gn15IRq5If3k3QvvmLKMxk4/8bbiG3FcKweLyqJXCj5+3TaBagTXTD77GOO5VGo0Z3Fzdv418mKRzGbbZHd8MpScYJWLbh+LtV0u7wPKO0ALX+weR+QAkSaMa8ZB635JKJ96583v9WkNjBrYWcJGsb51lbS3M2oTsngvFBkyLQD9HABG80X9UASFtTTilfmp5I71JCqW4uftsHUD0wl56fhglLbcicg7JBj72b5CVY36uDzfdHZ260rD2EZ3pYRK0FyC2SScHzuGD6MXYY7jX/zLS03a7uTu1qnba14xr/jPw7wI/CraRtSIrBcS2kNsKKxAk0bwkkP1p1lSl9Jc1KhsQwdgpq1P1yXTSGpPt+PX7fd05w5C/yi8wwR6wDqiwPIX1+3A8H0DrkZcBLwOLyMA/8So2FjQ4FmwAAAAASUVORK5CYII="
                />
                <image
                    id="image5"
                    width="30"
                    height="30"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAC8klEQVRIDe1WTUhUURQ+584TwYoQojZFGkmFbQSVfv1pUVAWgiTYrhyhjZtqEa5m149Y0UIIHBFaGAhFCUKRoWZJOlSb2hQKWoIQJjgp6Xv39F1zhpfz3psJZlM4fB/n3HPOPd+7P+8xROu//30HeO0Cy5te1ojWdxEvBLOBcWFqjnVU9rmbKffA+BBth82WKFrRLiVseho/yRRhZHaAf4MpJooHTRCSnWvzXsJra9KNt6LxORRNgBkjU+FvJPTUp2suMZ+3ya5GfhLMCCpNlVlFDDVbhHgWvAk/FUK1TCoH+bNILoFpkU64kJmfEUkXszSw6M9M3ISuy6AbjAtUH4tWjApRqzvh56cTJhG5KsKPsJpmYm51NL0l0SfRcA50Qe03g8VcfR12HgxEWmHMVszUzUq/0ZqPKUVtNuV8VJoPIzcOrgA1+cb50F4dx33oNn4QMxE28/NIcy+eYG4h1zltkT6u4taERTllEFm9dPqLKTTkED80NoiZCpse24h1f96iyh/rrOgaKT74cyR6aLZgfuYU7sA1nP2wKTIUhz8ZG0QrKOmRKyBF/SUXhqveRXja5Ht66h3YFopIchHakkVlokj4IVnsUTDpETOhIoudgQPhwX1mkGSEdcJXtlOc8P2s8kvgFj9gkcvIr6wM1o0iR2iktHGo3B1M+KLUnoTvZ32FmeQKNu+7Dm0owBmewYPcwuv0HJfpNcZdeM0aYtGjY+Tx27hd30P4PeiLoDNWJBxle2HzWGfVHXToBTPCQKTaLgsPtZHIfb8JQcJmDj5ccru0caASr9Kl0Y7KCRP0pnB5ePCIEJVgN15YYvXZtOxdimg6YZQQ4VWpFaGassbBxyz0xLHsV5uW1FeTjIdoN7M6QXoojC/cXhNDvePQUouZacZezEh4daKprcO/iTrlWPQj9DvKxmCZeDrjJRjCnbiRGHhZ38vlVZzNWKow08oWZlMEvabAP5AijPO6iIppMDvAQnA8pmd2+q13+Wd24BfCzuMZ/hqcpAAAAABJRU5ErkJggg=="
                />
                <image
                    id="image6"
                    width="26"
                    height="26"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAACzUlEQVRIDb1WTUhUURQ+987T1zRRJvazzJI2URbpgDkoUhiEtAmXtWhIMDJaREE/q1Ytigi0MBuSaFNEqxJXqaVpGmbRwsqFqzAXEzaD2vje7TvGDM7MffdlAz2+791zz88979173r2P6D9dwi9PdXTgICl1lCRVkqJN8N8MSshTJKhfOtQ58qD+C3RGGBNVR/uvIPoaaEJSCvfQSFfDsMlJmoywtRCpSaFEK+TPoA4hV8nrOsNKnTmRoDKhqP1trO4ugjpAL1R6GdJ6Ky1oW0V4GdEWPtlXBHurws0D5nEQ5OfwAz5lSgheK4gU5xu4EVwVjMXgNRKKZBG2YjCN5Oj9+nXQp196DsIwqcDZsVhkkp2W36gmOlS6JFJXsR5NcCiHIQAWgvWCqJGE07PneO/uDw8PJ+Wu5k/FS5TqwXdxDkkqMHqhSTBEBuV2UbCZezK4YfYYhDBYCKYr2l7YugHw8I2slyirJhYKoSDVXTIfrNGNIYSqZL2FjPswnyybmIIxAWZD0Qy2pu6FksV2O24PZhszvS0sWUiylQUPjmOgM6P36oc87FQVHai142tew7785Gi1sLTaP8pxNxCKCCd5CWX7CKptpL0wJ1p9RvmNJU7EQt4HqIS6KJ3EeSJxmR3/neo9x0qlxAQLubRdC7uxPJGrX21fkHzKMRJl18tCLgdjkZ/YuU3rlxui6w87gbXP2SADc0WPMT1T3PlLxuFnJArsK/bjm3axPPKusyoFf7LePDkwv7/lZZN05G0o9oK8bmi0+IU9rVRr8VEiubcHqi0Bawj0wwIeIGhyMh98pkj/kzcr2i+Rk+W9siOog09eVO0dqF3QCNN6cOBH3GrBPGCP5JPXUoJOwzgDGmF+I0kXEJ0E84D9oAIn7w18Attx4N/Kc8hRGIuBfcOnXu1UjtsCuQ7/cTvQ8jR9hzxLLk0o6T4b62roI5/rN4/zyPI+mZtzAAAAAElFTkSuQmCC"
                />
            </defs>
        </BgSVG>
    )
}
