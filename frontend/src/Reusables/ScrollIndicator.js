import React from 'react'
import styled, { keyframes } from 'styled-components'

const AnimateArrows = keyframes`
 0% {
            opacity: 1;
            transform: translateX(0px) scale(1);
        }
        25% {
            opacity: 0;
            transform: translateX(10px) scale(0.9);
        }
        26% {
            opacity: 0;
            transform: translateX(-10px) scale(0.9);
        }
        55% {
            opacity: 1;
            transform: translateX(0px) scale(1);
        }
`

const ScrollIndicatorWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    .round {
        z-index: 150;
        position: absolute;
        top: 2rem;
        right: 2rem;
        background-color: ${(props) => props.theme.secondary};
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }

    #cta {
        width: 100%;
        cursor: pointer;
        position: absolute;
    }

    #cta .arrow {
        left: 30%;
    }
    .arrow {
        position: absolute;
        bottom: 0;
        margin-left: 0px;
        width: 12px;
        height: 12px;
        background-size: contain;
        top: 15px;
    }
    .segunda {
        margin-left: 8px;
    }
    .next {
        background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
    }

    .bounceAlpha {
        animation-name: ${AnimateArrows};
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .arrow.primera.bounceAlpha {
        animation-name: ${AnimateArrows};
        animation-duration: 1.4s;
        animation-delay: 0.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .round:not(:hover) .arrow {
        animation-name: ${AnimateArrows};
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .round:not(:hover) .arrow.primera {
        animation-name: ${AnimateArrows};
        animation-duration: 1.4s;
        animation-delay: 0.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`

export const ScrollIndicator = ({ fullpageApi }) => {
    return (
        <ScrollIndicatorWrapper onClick={() => fullpageApi.moveSlideRight()}>
            <div class="round">
                <div id="cta">
                    <span class="arrow primera next "></span>
                    <span class="arrow segunda next "></span>
                </div>
            </div>
        </ScrollIndicatorWrapper>
    )
}
