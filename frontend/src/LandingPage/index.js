import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HeroBanner } from './HeroBanner/HeroBanner'
import ReactFullpage from '@fullpage/react-fullpage'
import { NonTechEvents } from './NonTechEvents/NonTechEvents'
import TechEvents from './Events/Technical/index'
import ContactUs from './ContactUs/ContactUs'
import { Index as RegistrationForms } from './RegistrationForms'
import { ScrollIndicator } from '../Reusables/ScrollIndicator'
import { PageNotFound } from '../Reusables/PageNotFound'
export const index = () => {
    return (
        <Switch>
            <Route path="/register" component={RegistrationForms} />
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
                        'Contact Us',
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
                                    <ContactUs />
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
