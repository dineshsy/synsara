import styled from 'styled-components'
import EventBG from '../../../../Assets/Images/events-bg.webp'
import { FadeIn } from '../../../../utils/globalStyles'
import { sizeMaxW } from '../../../../utils/MediaQueires'

export const EventWrapper = styled.section`
    width: 100%;
    height: 100%;
    background: url('${EventBG}') no-repeat right;
    padding: 6rem;
    @media ${sizeMaxW.tablet} {
        background: none;
    }
    @media ${sizeMaxW.mobileL} {
        padding: 2rem;
    }
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
        > svg {
            display: none;
        }
    }
`
