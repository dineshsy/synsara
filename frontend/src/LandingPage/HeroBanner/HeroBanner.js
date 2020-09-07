import React from 'react'
import { LandingBG } from '../../Assets/svg/LandingBG'
import { Section } from '../../Reusables/Section'
import Thiruvalluvar from '../../Assets/Images/Thiruvalluvar.png'
import './HeroBanner.css'
import { Button } from '../../Reusables/Button'

export const HeroBanner = () => {
    const randomNum = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    const svg = [
        'A',
        'Aa',
        'Ai',
        'Angular',
        'Api',
        'Bharatham',
        'Bull',
        'Cow',
        'Css',
        'Ee',
        'Html',
        'Jssvg',
        'Python',
        'React',
        'Ru',
        'Tamil',
        'Temple',
    ].map((name, index) => {
        return (
            <img
                key={index}
                style={{
                    top: `${randomNum(1, 40)}rem`,
                    right: `${randomNum(1, 50)}rem`,
                    width: `${randomNum(2, 6)}rem`,
                    height: `${randomNum(3, 5)}rem`,
                }}
                src={require(`../../Assets/svg/${name}.svg`)}
            />
        )
    })

    return (
        <div className="hero">
            <div className="hero__bg">
                <LandingBG />
                {svg}
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
