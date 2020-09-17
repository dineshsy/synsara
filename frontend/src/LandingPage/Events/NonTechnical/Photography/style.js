import styled, { keyframes, css } from 'styled-components'
import EventBG from '../../../../Assets/Images/events-bg.webp'
import { FadeIn } from '../../../../utils/globalStyles'
import { sizeMaxW } from '../../../../utils/MediaQueires'
import OvalBG from '../../../../Assets/svg/OvalBG.svg'

const float = () => keyframes`
    0% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
    }
    50% {
        box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
        transform: translatey(-20px);
    }
    100% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
    }
`
const moveInLeft = () => keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(30px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }`

export const EventWrapper = styled.section`
    width: 100%;
    height: 100%;
    background: url('${EventBG}') no-repeat right;
    padding: 6rem;
    @media ${sizeMaxW.tablet} {
        background: url('${OvalBG}') no-repeat left;
    }
    @media ${sizeMaxW.mobileL} {
        padding: 2rem;
    }
    ${({ pageNumber, slideInfo, isAnimated }) =>
        pageNumber === 1 && slideInfo == 1 && !isAnimated
            ? css`
                  .para1 {
                      animation: ${FadeIn(`0`, `50px`)} 0.5s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 0.8s;
                  }
                  .para2 {
                      animation: ${FadeIn(`0`, `50px`)} 0.8s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 1s;
                  }
                  .event__title {
                      animation-name: ${moveInLeft()};
                      animation-duration: 2s;
                  }
                  .button__animation {
                      animation: ${FadeIn(`0`, `150px`)} 1s ease-in;
                      opacity: 0;
                      animation-fill-mode: forwards;
                      animation-delay: 1s;
                  }
              `
            : null}
`

export const MainContentWrapper = styled.div`
    max-width: 1550px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    margin: auto;
    @media ${sizeMaxW.tablet} {
        grid-template-columns: 1fr;
    }
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;

    gap: ${({ gap }) => gap};
`

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-height: 600px;
    #Gamer {
        opacity: 0;
        animation: ${FadeIn('50px', 0)} 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
    }
    @media ${sizeMaxW.tablet} {
        justify-content: flex-start;
        img {
            display: none;
        }
    }
`
