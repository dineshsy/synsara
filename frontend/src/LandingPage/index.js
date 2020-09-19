import React, { useState, useEffect, useRef } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { HeroBanner } from './HeroBanner/HeroBanner'
import Sponsors from './Sponsors/Sponsors'
import ReactFullpage from '@fullpage/react-fullpage'
import TechEvents from './Events/Technical/index'
import { Index as NonTechEvents } from './Events/NonTechnical'
import ContactUs from './ContactUs/ContactUs'
import { Index as RegistrationForms } from './RegistrationForms'
import { ScrollIndicator } from '../Reusables/ScrollIndicator'
import { PageNotFound } from '../Reusables/PageNotFound'

const Index = (props) => {
    const [pageNumber, setPageNumber] = useState(0)
    const [currentSlideInfo, setCurrentSlideInfo] = useState([0, 0])
    const [navVisible, setNavVisible] = useState(true)
    const Navref = useRef(null)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname == '/')
            Navref.current = document.getElementById('fp-nav')
        const navTimeout = setTimeout(
            () => Navref.current.classList.add('hide-tooltip'),
            2000
        )
        return () => {
            clearTimeout(navTimeout)
        }
    }, [location])

    const onLeave = (origin, destination, direction) => {
        Navref.current.classList.remove('hide-tooltip')
        setTimeout(() => Navref.current.classList.add('hide-tooltip'), 2000)
        setPageNumber(destination.index)
    }

    const onSlideLeave = (section, origin, destination, direction) => {
        setCurrentSlideInfo([section.index, destination.index])
    }

    return (
        <Switch>
            <Route path="/register" component={RegistrationForms} />
            <Route path="/" exact>
                <ReactFullpage
                    scrollingSpeed={700}
                    navigation={true}
                    onLeave={onLeave}
                    onSlideLeave={onSlideLeave}
                    navigationPosition="left"
                    slidesNavPosition="left"
                    navigationTooltips={[
                        'Home',
                        'Technical Events',
                        'Non-Technical Events',
                        'Sponsors',
                        'Contact Us',
                    ]}
                    showActiveTooltip={true}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <HeroBanner
                                        fullpageApi={fullpageApi}
                                        pageNumber={pageNumber}
                                    />
                                </div>
                                <div className="section">
                                    <div style={{ position: 'relative' }}>
                                        <TechEvents
                                            pageNumber={pageNumber}
                                            slideInfo={currentSlideInfo}
                                        />
                                        <ScrollIndicator
                                            fullpageApi={fullpageApi}
                                        />
                                    </div>
                                </div>
                                <div className="section">
                                    <div style={{ position: 'relative' }}>
                                        <NonTechEvents
                                            pageNumber={pageNumber}
                                            slideInfo={currentSlideInfo}
                                            id="hero"
                                        />
                                        <ScrollIndicator
                                            fullpageApi={fullpageApi}
                                        />
                                    </div>
                                </div>
                                <div className="section">
                                    <Sponsors
                                        fullpageApi={fullpageApi}
                                        pageNumber={pageNumber}
                                    />
                                </div>
                                <div className="section">
                                    <ContactUs
                                        fullpageApi={fullpageApi}
                                        pageNumber={pageNumber}
                                    />
                                </div>
                            </ReactFullpage.Wrapper>
                        )
                    }}
                />
            </Route>
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}

export default Index
