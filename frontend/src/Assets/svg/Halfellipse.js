import React from 'react'

export const Halfellipse = () => {
    return (
        <svg
            viewBox="0 0 1440 282"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f)">
                <ellipse
                    cx="725.5"
                    cy="908"
                    rx="953.5"
                    ry="904"
                    fill="url(#paint0_radial)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f"
                    x="-232"
                    y="0"
                    width="1915"
                    height="1816"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="2"
                        result="effect1_foregroundBlur"
                    />
                </filter>
                <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(726 642.5) rotate(-90) scale(781.5 824.292)"
                >
                    <stop stopColor="#3563C1" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#3B93F7" stopOpacity="0.2" />
                </radialGradient>
            </defs>
        </svg>
    )
}
