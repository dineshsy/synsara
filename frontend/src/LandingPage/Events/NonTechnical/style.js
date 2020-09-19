import styled, { css } from 'styled-components'
import { sizeMinH, sizeMaxH } from '../../../utils/MediaQueires'

export const Label = styled.h1`
    ${({ color, size, bold }) => css`
        color: ${color};
        font-size: ${size};
        font-weight: ${bold ? 600 : 400};
    `}
    @media ${sizeMinH.mobile} {
        font-size: calc(${({ size }) => size} / 1.3);
        line-height: calc(${({ size }) => size} / 1);
    }
    @media ${sizeMinH.mobileL} {
        font-size: calc(${({ size }) => size} / 1.2);
        line-height: calc(${({ size }) => size} / 0.9);
    }
    @media ${sizeMinH.tablet} {
        font-size: calc(${({ size }) => size} / 1.15);
        line-height: calc(${({ size }) => size} / 0.85);
    }
    @media ${sizeMinH.laptop} {
        font-size: calc(${({ size }) => size} / 1);
        line-height: calc(${({ size }) => size} / 0.7);
    }
`

export const ImageWrapper = styled.div`
    animation: float 3s ease-in-out infinite;
`
