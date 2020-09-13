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
        visibility: hidden;
        .Photography-bg-svg {
            visibility: visible;
        }
    }

    @media ${sizeMaxH.mobileL} {
        height: 80%;
    }
`

export default function PhotographyFormBg() {
    return (
        <BgSVG
            viewBox="0 0 971 968"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M790.5 495.5C880.1 418.7 951.167 423.167 975.5 435V1373H34C-1.50003 1229.5 5.49997 1178.5 165 1038C324.5 897.5 267 617 481 639C695 661 678.5 591.5 790.5 495.5Z"
                fill="#3B93F7"
                className="Photography-bg-svg"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M975 440.997C950.662 429.166 879.599 424.705 790.005 501.5C761.839 525.642 741.8 548.109 724.177 567.865C671.726 626.669 640.688 661.467 480.505 645C354.955 632.093 322.854 723.306 285.558 829.282C259.283 903.942 230.429 985.929 164.505 1044C24.1542 1167.63 1.88395 1221.96 22.747 1331H17.797C-18.2951 1187 -11.1784 1135.82 150.982 994.823C218.005 936.548 247.34 854.273 274.054 779.35C311.972 673.002 344.608 581.468 472.252 594.421C635.107 610.946 666.663 576.026 719.989 517.015C737.905 497.189 758.279 474.644 786.914 450.416C878.009 373.346 950.261 377.829 975 389.704V440.997Z"
                fill="#DCF8FB"
                className="Photography-bg-svg"
            />
            <g clipPath="url(#clip0)">
                <path
                    d="M525.171 323.231C575.518 323.15 616.328 320.43 616.323 317.155C616.318 313.88 575.499 311.291 525.152 311.372C474.805 311.453 433.995 314.173 434 317.448C434.005 320.723 474.824 323.312 525.171 323.231Z"
                    fill="#E6E6E6"
                />
                <path
                    d="M718.002 245.53C757.535 245.467 789.578 243.331 789.574 240.759C789.57 238.188 757.52 236.155 717.987 236.218C678.455 236.282 646.411 238.418 646.416 240.989C646.42 243.56 678.47 245.594 718.002 245.53Z"
                    fill="#E6E6E6"
                />
                <path
                    d="M847.582 326.127C897.533 326.046 938.014 318.82 938 309.985C937.986 301.151 897.482 294.054 847.531 294.134C797.581 294.214 757.099 301.441 757.114 310.276C757.128 319.11 797.632 326.207 847.582 326.127Z"
                    fill="#E6E6E6"
                />
                <path
                    d="M538.688 155.84L548.953 152.98C548.953 152.98 552.974 152.176 550.517 144.317C548.06 136.458 543.188 138.657 543.188 138.657L534.082 141.305L530.486 142.416L535.545 149.519L535.969 154.253L538.688 155.84Z"
                    fill="#3F3D56"
                />
                <path
                    d="M518.853 135.074L515.633 147.95L532.134 163.956L533.553 164.312L537.337 163.247L540.558 150.373L537.296 146.939L540.63 146.065L533.514 139.15L529.801 139.931L526.823 136.971L528.833 136.167L529.023 135.409L526.587 133.491L518.853 135.074Z"
                    fill="#3F3D56"
                />
                <path
                    d="M534.314 153.235L532.182 161.755L522.348 152.449L524.81 143.811L534.314 153.235Z"
                    fill="#6C63FF"
                />
                <path
                    d="M518.853 135.074L518.402 136.879L534.81 152.856L536.229 153.212L539.896 152.218L540.098 152.214L540.558 150.373L537.296 146.939L540.63 146.065L533.514 139.15L529.801 139.931L526.823 136.971L528.833 136.167L529.023 135.409L526.588 133.491L518.853 135.074Z"
                    stroke="#3F3D56"
                    strokeMiterlimit="10"
                />
                <path
                    d="M527.758 135.243C527.882 134.747 527.39 134.195 526.658 134.012C525.927 133.829 525.233 134.083 525.109 134.58C524.985 135.076 525.477 135.628 526.208 135.811C526.94 135.994 527.633 135.74 527.758 135.243Z"
                    fill="#6C63FF"
                />
                <path
                    d="M538.182 149.023C538.306 148.526 537.814 147.975 537.083 147.791C536.352 147.608 535.658 147.862 535.534 148.359C535.409 148.856 535.902 149.407 536.633 149.59C537.364 149.773 538.058 149.519 538.182 149.023Z"
                    fill="#6C63FF"
                />
                <path
                    d="M545.508 171.879L543.27 164.262C543.27 164.262 549.09 150.371 542.374 149.026C535.659 147.682 535.211 162.021 535.211 162.021L537.897 170.535L545.508 171.879Z"
                    fill="#FFB6B6"
                />
                <path
                    d="M503.947 157.068C513.769 157.068 521.732 149.099 521.732 139.268C521.732 129.438 513.769 121.469 503.947 121.469C494.126 121.469 486.163 129.438 486.163 139.268C486.163 149.099 494.126 157.068 503.947 157.068Z"
                    fill="#FFB6B6"
                />
                <path
                    d="M509.701 151.832C509.701 151.832 510.747 164.92 513.362 165.967C515.977 167.014 489.98 174.344 489.98 174.344L497.826 165.444C497.826 165.444 494.532 151.832 490.871 148.691L509.701 151.832Z"
                    fill="#FFB6B6"
                />
                <path
                    d="M534.764 167.846L541.927 166.95C541.927 166.95 550.433 171.431 550.433 177.256C550.433 183.082 555.358 192.491 555.358 192.491C555.358 192.491 558.94 205.038 550.881 205.934C542.822 206.83 535.659 192.491 535.659 192.491L534.764 167.846Z"
                    fill="#6C63FF"
                />
                <path
                    d="M538.793 239.093L553.233 229.136C555.517 227.532 558.228 226.648 561.018 226.598C563.807 226.547 566.548 227.332 568.888 228.853C570.878 230.181 572.37 231.923 572.37 234.164C572.37 240.885 557.596 256.568 557.596 256.568C557.596 256.568 546.404 281.213 535.659 282.109C528.591 282.751 521.565 283.798 514.617 285.246C514.617 285.246 519.541 303.17 516.855 308.099C514.169 313.028 503.872 318.853 502.976 318.405C502.081 317.957 489.545 306.306 484.173 289.727C478.8 273.147 475.219 260.601 480.144 259.705C485.068 258.809 538.793 239.093 538.793 239.093Z"
                    fill="#2F2E41"
                />
                <path
                    d="M571.028 232.819C571.028 232.819 574.161 232.371 573.714 239.989C573.266 247.606 571.923 274.94 569.684 280.317C567.446 285.694 566.998 291.968 567.894 294.208C568.789 296.448 570.58 300.033 567.446 300.481C564.312 300.929 551.329 299.137 549.986 298.689C548.642 298.241 555.358 280.765 554.463 279.869C553.567 278.973 552.672 257.913 552.672 257.913L571.028 232.819Z"
                    fill="#2F2E41"
                />
                <path
                    d="M566.55 299.137C566.55 299.137 574.161 296.896 575.057 301.826C575.057 301.826 576.4 309.443 570.58 312.132C566.824 313.908 563.229 316.007 559.835 318.405C559.835 318.405 550.433 321.99 549.985 317.509C549.537 313.028 551.776 296.896 551.776 296.896L566.55 299.137Z"
                    fill="#2F2E41"
                />
                <path
                    d="M515.96 304.514L501.633 292.864C501.633 292.864 504.319 307.203 500.738 309.891L499.102 314.678L503.683 318.429C503.683 318.429 517.75 316.165 515.96 304.514Z"
                    fill="#2F2E41"
                />
                <path
                    d="M495.813 284.798C495.813 284.798 505.215 287.487 503.872 296.897C502.529 306.307 500.807 316.53 500.807 316.53C500.807 316.53 500.29 341.706 493.575 343.498C486.859 345.291 485.068 341.706 485.068 341.706C485.068 341.706 477.435 322.033 479.696 316.165C482.433 309.062 486.377 301.087 485.068 298.689C483.78 296.33 485.964 283.454 495.813 284.798Z"
                    fill="#2F2E41"
                />
                <path
                    d="M490.441 161.125C490.441 161.125 494.022 161.573 499.843 162.469C505.663 163.365 509.692 158.884 512.826 159.78C515.96 160.676 541.927 166.95 541.927 166.95L539.681 184.184C538.945 189.833 537.116 195.242 534.774 200.434C530.998 208.805 536.593 235.031 541.927 239.989C546.566 244.301 552.672 245.366 545.956 252.983C539.241 260.601 527.6 267.322 503.872 265.082C480.144 262.841 477.01 263.29 477.01 259.705C477.01 256.12 485.454 209.07 482.768 206.382C480.082 203.693 478.739 201.005 478.739 199.66C478.739 198.762 475.938 188.653 474.081 182.049C472.732 177.387 473.234 172.384 475.482 168.084C476.322 166.51 477.284 165.301 478.291 165.157C481.425 164.709 479.248 162.469 481.487 162.469C483.725 162.469 485.068 162.917 486.411 162.469L490.441 161.125Z"
                    fill="#6C63FF"
                />
                <path
                    d="M524.755 127.262C524.755 127.262 524.351 105.267 502.779 115.679C502.779 115.679 486.193 115.093 483.871 136.093L481.627 158.078L484.031 156.269L485.642 158.755L490.035 159.204L491.318 155.337L492.838 159.58L528.036 157.928C528.036 157.928 511.146 151.022 508.475 134.577L511.895 137.27L524.755 127.262Z"
                    fill="#2F2E41"
                />
                <path
                    d="M484.214 127.455C489.083 127.455 493.03 123.504 493.03 118.631C493.03 113.757 489.083 109.807 484.214 109.807C479.344 109.807 475.397 113.757 475.397 118.631C475.397 123.504 479.344 127.455 484.214 127.455Z"
                    fill="#2F2E41"
                />
                <path
                    d="M492.887 115.169C492.418 112.975 491.131 111.043 489.288 109.766C487.445 108.488 485.185 107.962 482.968 108.295C483.145 108.245 483.319 108.191 483.501 108.152C484.633 107.91 485.802 107.894 486.941 108.104C488.079 108.314 489.166 108.746 490.137 109.376C491.109 110.007 491.947 110.822 492.604 111.777C493.26 112.731 493.723 113.805 493.965 114.939C494.207 116.072 494.223 117.242 494.013 118.381C493.803 119.521 493.371 120.608 492.742 121.581C492.112 122.553 491.297 123.392 490.344 124.049C489.39 124.706 488.316 125.169 487.184 125.411C487.002 125.45 486.821 125.472 486.639 125.499C488.799 124.896 490.647 123.492 491.807 121.573C492.968 119.653 493.354 117.363 492.887 115.169Z"
                    fill="#2F2E41"
                />
                <path
                    d="M708.61 53.3349C716.636 53.3349 723.142 46.8227 723.142 38.7895C723.142 30.7563 716.636 24.2441 708.61 24.2441C700.583 24.2441 694.077 30.7563 694.077 38.7895C694.077 46.8227 700.583 53.3349 708.61 53.3349Z"
                    fill="#2F2E41"
                />
                <path
                    d="M716.261 48.4731C716.261 48.4731 716.042 57.4516 716.918 57.6706C717.793 57.8896 704.884 61.3934 704.884 61.3934L703.571 49.1301L716.261 48.4731Z"
                    fill="#FFB8B8"
                />
                <path
                    d="M614.302 125.119C614.302 125.119 604.675 125.119 604.456 124.024C604.237 122.929 602.268 133.002 602.268 133.002L606.206 134.316C606.206 134.316 613.645 131.031 614.302 131.031C614.958 131.031 614.302 125.119 614.302 125.119Z"
                    fill="#FFB8B8"
                />
                <path
                    d="M603.8 129.06C603.8 129.06 605.55 123.147 607.738 122.929C607.738 122.929 600.299 118.111 600.08 116.578C599.862 115.045 597.236 111.103 596.142 112.417C595.048 113.731 595.048 134.535 597.017 136.725C598.986 138.914 607.738 133.647 607.738 133.647C607.738 133.647 602.268 131.25 603.8 129.06Z"
                    fill="#2F2E41"
                />
                <path
                    d="M722.606 212.932L724.356 222.348L716.261 223.662V212.932H722.606Z"
                    fill="#FFB8B8"
                />
                <path
                    d="M722.606 221.253C722.606 221.253 723.919 217.093 724.794 217.75C725.669 218.407 726.982 222.567 726.763 223.662C726.545 224.757 725.013 233.298 725.669 234.83C726.326 236.363 722.387 244.247 717.355 243.59C712.323 242.933 712.76 238.553 712.76 238.553L714.511 231.765L715.167 221.034C715.167 221.034 720.856 220.158 722.606 221.253Z"
                    fill="#2F2E41"
                />
                <path
                    d="M713.693 29.4995C717.015 29.4995 719.707 26.8048 719.707 23.4807C719.707 20.1566 717.015 17.4619 713.693 17.4619C710.372 17.4619 707.68 20.1566 707.68 23.4807C707.68 26.8048 710.372 29.4995 713.693 29.4995Z"
                    fill="#2F2E41"
                />
                <path
                    d="M721.712 20.2204C721.712 18.7327 721.161 17.2977 720.166 16.1923C719.172 15.0869 717.803 14.3893 716.325 14.2342C716.533 14.2126 716.742 14.2017 716.951 14.2017C718.545 14.2031 720.073 14.8379 721.2 15.9665C722.326 17.0951 722.959 18.6251 722.959 20.2204C722.959 21.8158 722.326 23.3458 721.2 24.4744C720.073 25.603 718.545 26.2378 716.951 26.2392C716.742 26.2392 716.533 26.2283 716.325 26.2067C717.803 26.0516 719.172 25.354 720.166 24.2486C721.161 23.1432 721.712 21.7082 721.712 20.2204Z"
                    fill="#2F2E41"
                />
                <path
                    d="M708.603 54.6048C713.678 54.6048 717.793 50.487 717.793 45.4074C717.793 40.3278 713.678 36.21 708.603 36.21C703.528 36.21 699.414 40.3278 699.414 45.4074C699.414 50.487 703.528 54.6048 708.603 54.6048Z"
                    fill="#FFB8B8"
                />
                <path
                    d="M726.763 109.351C726.763 109.351 726.326 120.301 724.575 125.994C722.825 131.688 716.514 172.237 717.827 175.302C719.14 178.368 725.888 212.275 724.357 214.246C722.825 216.217 715.605 215.56 715.605 215.56L705.793 174.427C705.793 174.427 707.728 129.06 691.537 127.965C675.346 126.87 648.872 126.213 648.872 126.213C648.872 126.213 631.806 131.25 624.148 131.031C616.49 130.812 612.114 133.002 612.114 133.002L610.801 124.024L644.715 116.578C644.715 116.578 675.784 105.848 692.85 108.694C709.916 111.541 726.763 109.351 726.763 109.351Z"
                    fill="#2F2E41"
                />
                <path
                    d="M714.511 54.8239C714.511 54.8239 717.136 53.291 717.793 54.8239C718.449 56.3568 723.044 57.6707 724.794 56.3568C726.545 55.0429 730.921 56.7948 730.921 56.7948L735.734 71.0289C735.734 71.0289 733.327 83.2921 731.139 90.0807C728.951 96.8693 728.076 110.884 728.951 112.198C729.827 113.512 711.448 118.768 702.477 115.483C693.506 112.198 691.537 108.476 691.537 108.476C691.537 108.476 701.383 94.4604 698.101 87.8909C694.819 81.3213 697.445 73.8757 697.445 73.8757L696.132 66.4302L703.571 62.2694C703.571 62.2694 704.009 58.3277 705.759 58.3277C707.509 58.3277 714.511 54.8239 714.511 54.8239Z"
                    fill="#D0CDE1"
                />
                <path
                    d="M699.414 66.6489H696.132C695.221 67.5016 694.543 68.5722 694.16 69.7598C693.777 70.9475 693.703 72.2131 693.944 73.4375C694.819 77.5982 698.766 91.3924 698.766 91.3924L702.039 82.8539L699.414 66.6489Z"
                    fill="#D0CDE1"
                />
                <path
                    d="M689.989 101.817C689.989 101.817 683.442 108.913 688.255 112.636C693.069 116.359 694.255 104.096 694.255 104.096L689.989 101.817Z"
                    fill="#FFB8B8"
                />
                <path
                    d="M699.414 87.0146L697.882 93.1463L695.257 97.964C695.257 97.964 686.286 103.877 686.286 106.066C686.286 106.066 690.224 101.03 695.257 106.066L699.742 95.2266L699.414 87.0146Z"
                    fill="#D0CDE1"
                />
                <path
                    d="M706.919 41.7246C712.454 41.7246 716.941 39.0299 716.941 35.7058C716.941 32.3817 712.454 29.687 706.919 29.687C701.383 29.687 696.896 32.3817 696.896 35.7058C696.896 39.0299 701.383 41.7246 706.919 41.7246Z"
                    fill="#2F2E41"
                />
                <path
                    d="M726.763 36.2097C726.763 36.2097 719.762 32.2679 716.917 35.1148C714.073 37.9616 725.451 42.3413 725.451 42.3413L726.763 36.2097Z"
                    fill="#FFB8B8"
                />
                <path
                    d="M729.389 57.8894L730.921 56.7944C730.921 56.7944 732.671 54.1666 734.203 55.0425C735.734 55.9185 744.705 51.7577 744.705 51.7577C744.705 51.7577 741.423 53.2907 741.423 50.6628C741.423 48.035 740.985 48.4729 738.797 48.4729C736.609 48.4729 736.609 49.5679 735.734 48.035C734.859 46.5021 735.297 45.6261 733.765 46.502C732.233 47.378 730.483 46.721 730.045 46.0641C729.608 45.4071 721.731 44.3122 721.731 44.3122C721.731 44.3122 724.794 35.3337 725.451 34.6768C726.107 34.0198 742.955 41.4654 742.955 41.4654C742.955 41.4654 764.178 47.378 758.708 54.1666C753.238 60.9552 733.546 71.2476 733.546 71.2476L729.389 57.8894Z"
                    fill="#D0CDE1"
                />
                <path
                    d="M770.341 0L809.814 0.245378C809.814 0.245378 874.784 34.8446 829.182 106.497C829.182 106.497 810.549 102.08 789.955 117.294C789.955 117.294 777.942 2.69923 770.341 0Z"
                    fill="#6C63FF"
                />
                <path
                    opacity="0.2"
                    d="M782.083 0.358633C789.155 29.924 797.149 106.179 797.149 106.179C815.549 92.5864 832.371 94.6621 835.75 95.2592C833.757 99.209 831.565 103.055 829.182 106.782C829.182 106.782 810.549 102.366 789.955 117.579C789.955 117.579 777.942 2.98487 770.341 0.285645L782.083 0.358633Z"
                    fill="black"
                />
                <path
                    d="M829.427 37.0527L832.86 53.739L875.995 45.8915L876.009 45.8864L876.99 26.2559H868.655L829.427 37.0527Z"
                    fill="#3F3D56"
                />
                <path
                    opacity="0.2"
                    d="M869.351 26.2559L875.996 45.8915L876.01 45.8864L876.991 26.2559H869.351Z"
                    fill="black"
                />
                <path
                    d="M830.898 55.7023C833.606 55.7023 835.802 50.6487 835.802 44.4146C835.802 38.1806 833.606 33.127 830.898 33.127C828.19 33.127 825.995 38.1806 825.995 44.4146C825.995 50.6487 828.19 55.7023 830.898 55.7023Z"
                    fill="#3F3D56"
                />
                <path
                    d="M856.396 282.956C856.199 282.956 856.005 282.917 855.823 282.842C855.641 282.766 855.476 282.656 855.336 282.517C855.197 282.377 855.087 282.212 855.012 282.03C854.936 281.848 854.897 281.653 854.897 281.456V44.4146C854.897 44.0168 855.055 43.6352 855.336 43.3539C855.618 43.0726 855.999 42.9146 856.396 42.9146C856.794 42.9146 857.175 43.0726 857.456 43.3539C857.737 43.6352 857.895 44.0168 857.895 44.4146V281.456C857.895 281.653 857.856 281.848 857.781 282.03C857.706 282.212 857.595 282.377 857.456 282.516C857.317 282.656 857.152 282.766 856.97 282.842C856.788 282.917 856.593 282.956 856.396 282.956H856.396Z"
                    fill="#3F3D56"
                />
                <path
                    d="M835.804 324.671C835.583 324.672 835.364 324.623 835.164 324.529C834.963 324.435 834.787 324.297 834.646 324.126C834.505 323.955 834.404 323.755 834.349 323.54C834.295 323.326 834.289 323.102 834.331 322.884L853.463 224.716L803.222 301.418C803.114 301.583 802.975 301.726 802.812 301.837C802.649 301.948 802.466 302.026 802.274 302.066C802.081 302.107 801.882 302.108 801.688 302.072C801.494 302.035 801.31 301.96 801.145 301.852C800.98 301.744 800.839 301.605 800.728 301.441C800.617 301.278 800.539 301.095 800.499 300.902C800.459 300.709 800.458 300.51 800.495 300.316C800.532 300.122 800.607 299.938 800.715 299.773L855.143 216.68C855.334 216.39 855.619 216.174 855.951 216.071C856.282 215.967 856.64 215.983 856.961 216.114C857.283 216.245 857.55 216.483 857.715 216.789C857.88 217.095 857.934 217.449 857.868 217.79L837.274 323.458C837.207 323.8 837.024 324.107 836.756 324.328C836.488 324.55 836.152 324.671 835.804 324.671Z"
                    fill="#3F3D56"
                />
                <path
                    d="M913.278 306.022C913.029 306.022 912.784 305.96 912.564 305.842C912.345 305.724 912.159 305.552 912.023 305.344L855.143 218.478C855.035 218.313 854.96 218.129 854.923 217.935C854.886 217.741 854.888 217.542 854.928 217.349C854.968 217.156 855.045 216.973 855.156 216.81C855.267 216.647 855.409 216.507 855.574 216.399C855.738 216.291 855.923 216.217 856.117 216.18C856.31 216.143 856.509 216.145 856.702 216.186C856.895 216.226 857.078 216.304 857.24 216.415C857.403 216.526 857.542 216.669 857.65 216.834L914.53 303.7C914.678 303.926 914.762 304.188 914.774 304.458C914.785 304.728 914.723 304.996 914.595 305.234C914.467 305.472 914.277 305.671 914.045 305.81C913.813 305.948 913.548 306.022 913.278 306.022Z"
                    fill="#3F3D56"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect
                        width="504"
                        height="344"
                        fill="white"
                        transform="translate(434)"
                    />
                </clipPath>
            </defs>
        </BgSVG>
    )
}
