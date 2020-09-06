import React from 'react'
import { HeroBanner } from './HeroBanner/HeroBanner'
import ReactFullpage from '@fullpage/react-fullpage'
import { NonTechEvents } from './NonTechEvents/NonTechEvents'
import { TechEvents } from './TechEvents/TechEvents'

export const index = () => {
    return (
        <ReactFullpage
            scrollingSpeed={1000}
            navigation={true}
            navigationPosition="left"
            slidesNavPosition="left"
            navigationTooltips={[
                'Home',
                'Non-Technical Events',
                'Technical Events',
            ]}
            showActiveTooltip={true}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <HeroBanner />
                        </div>
                        <div className="section">
                            <NonTechEvents />
                        </div>
                        <div className="section">
                            <TechEvents />
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
}
