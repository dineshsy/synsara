import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HeroBanner } from './HeroBanner/HeroBanner'
import ReactFullpage from '@fullpage/react-fullpage'
import { NonTechEvents } from './NonTechEvents/NonTechEvents'
import { TechEvents } from './TechEvents/TechEvents'
import AboutUs from './AboutUs/AboutUs'
import { Index as RegistrationForms } from './RegistrationForms'
import { ScrollIndicator } from '../Reusables/ScrollIndicator'
export const index = () => {
    return (
        <Switch>
            <Route path="/register/:formID">
                <RegistrationForms />
            </Route>
            <Route path="/" exact>
                <ReactFullpage
                    scrollingSpeed={1000}
                    navigation={true}
                    navigationPosition="left"
                    slidesNavPosition="left"
                    navigationTooltips={[
                        'Home',
                        'Non-Technical Events',
                        'Technical Events',
                        'About Us',
                    ]}
                    showActiveTooltip={true}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <HeroBanner fullpageApi={fullpageApi} />
                                </div>
                                <div className="section">
                                    <div style={{ position: 'relative' }}>
                                        <NonTechEvents />
                                        <ScrollIndicator
                                            fullpageApi={fullpageApi}
                                        />
                                    </div>
                                </div>
                                <div className="section">
                                    <div style={{ position: 'relative' }}>
                                        <TechEvents />
                                        <ScrollIndicator
                                            fullpageApi={fullpageApi}
                                        />
                                    </div>
                                </div>
                                <div className="section">
                                    <AboutUs />
                                </div>
                            </ReactFullpage.Wrapper>
                        )
                    }}
                />
            </Route>
        </Switch>
    )
}
