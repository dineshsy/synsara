import React from 'react'
import { LandingBG } from '../../Assets/svg/LandingBG'
import { Section } from '../../Reusables/Section'
import Thiruvalluvar from '../../Assets/Images/Thiruvalluvar.png'
import './HeroBanner.css'
import { Button } from '../../Reusables/Button'
import Jssvg from '../../Assets/svg/Jssvg.svg'
export const HeroBanner = () => {
    return (
        <div className="hero">
            <div className="hero__bg">
                <LandingBG />
                <img src={Jssvg} style={{ top: '10rem', right: '5rem' }} />
            </div>
            <div className="hero__logo">Logo</div>
            <div className="container">
                <div className="hero__text">
                    <h1 className="hero__primary">
                        Synsara 20<sup>20</sup>
                    </h1>
                    <p className="hero__secondary">
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Praesent sapien massa.
                    </p>
                    <Button>View Events</Button>
                </div>
                <div>
                    <img
                        src={Thiruvalluvar}
                        className="img-liquid hero__img"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
