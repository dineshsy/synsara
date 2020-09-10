import React from 'react'
import { LandingBG } from '../../Assets/svg/LandingBG'
import Thiruvalluvar from '../../Assets/Images/Thiruvalluvar.png'
import './HeroBanner.css'
import { Button } from '../../Reusables/Button'
import Logo from '../../Assets/Images/synsara_logo.png'

export const HeroBanner = ({ fullpageApi }) => {
    return (
        <div className="hero">
            <div className="hero__bg">
                <LandingBG />
                <img
                    src={Thiruvalluvar}
                    className="img-liquid hero__img"
                    alt=""
                />
            </div>
            <div className="hero__logo">
                <img src={Logo} />
            </div>
            <div className="content-wrapper">
                <div className="hero__text">
                    <h1 className="hero__primary">
                        Synsara 20<sup>20</sup>
                    </h1>
                    <p className="hero__secondary">
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Praesent sapien massa.
                    </p>
                    <Button onClick={() => fullpageApi.moveSectionDown()}>
                        View Events
                    </Button>
                </div>
            </div>
        </div>
    )
}
