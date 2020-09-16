import styled, { css } from 'styled-components'
import { sizeMaxH, sizeMinH } from '../../../utils/MediaQueires'

export const Label = styled.h1`
    ${({ color, size, bold }) => css`
        color: ${color};
        font-size: ${size};
        font-weight: ${bold ? 600 : 400};
        @media ${sizeMaxH.mobile} {
            font-size: calc(${size} / 1.5);
        }
        @media ${sizeMaxH.mobileL} {
            font-size: calc(${size} / 1.45);
        }
        @media ${sizeMaxH.tablet} {
            font-size: calc(${size} / 1.15);
        }
        @media ${sizeMinH.laptop} {
            font-size: calc(${size} / 1);
        }
    `}
`
