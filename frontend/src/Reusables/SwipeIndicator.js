import React from 'react'
import styled, { keyframes } from 'styled-components'
import SwipeSVG from './SwipeSVG'

const AnimateHand = keyframes`
    0%{
        transform: rotate(20deg);
        transform-origin: bottom;
    }
    25%{
        transform: rotate(-20deg);
        transform-origin: bottom;
    }
    75%{
        transform: rotate(-20deg);
        transform-origin: bottom;
    }
    100%{
        transform: rotate(20deg);
        transform-origin: bottom;
    }
`

const AnimateLine = keyframes`
    0%{
        width: 0%;
    }
    25%{
        width: 100%;
    }
    75%{
        width: 100%;
    }
    100%{
        width: 0%;
    }
`

const ScrollIndicatorWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    .round {
        z-index: 200;
        position: absolute;
        top: 20%;
        left: 30%;
        width: 40%;
        height: 40%;
    }

    .round svg {
        animation: ${AnimateHand} 1.25s infinite;
    }

    .round .swipe-line {
        float: right;
        height: 10px;
        background-image: linear-gradient(to right, white, transparent);
        animation: ${AnimateLine} 1.25s infinite;
    }

    .round .swipe-line .arrow {
        border: solid white;
        border-width: 0 10px 10px 0;
        display: inline-block;
        padding: 10px;
        transform: rotate(135deg) translateY(45%) translateX(-5%);
    }
`

const PageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`

export const SwipeIndicator = ({ fullpageApi }) => {
    return (
        <PageWrapper>
            <ScrollIndicatorWrapper
                onClick={() => fullpageApi.moveSlideRight()}
            >
                <div className="round">
                    <div className="swipe-line">
                        <div className="arrow" />
                    </div>
                    <SwipeSVG />
                </div>
            </ScrollIndicatorWrapper>
        </PageWrapper>
    )
}
