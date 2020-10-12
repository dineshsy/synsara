import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { FORM_ROUTES } from '../../utils/constants'

const ConnexionsForm = lazy(() =>
    import('./NonTechEvents/Connexions/ConnexionsForm')
)
const DubsmashForm = lazy(() => import('./NonTechEvents/Dubsmash/DubsmashForm'))
const CodingForm = lazy(() => import('./TechEvents/Coding/CodingForm'))
const PaperPresentationForm = lazy(() =>
    import('./TechEvents/Paper Presentation/PaperPresentation')
)
const DebuggingForm = lazy(() => import('./TechEvents/Debugging/DebuggingForm'))
const HackathonForm = lazy(() => import('./TechEvents/Hackathon/Hackathon'))
const { PageNotFound } = lazy(() => import('../../Reusables/PageNotFound'))
const GamingForm = lazy(() => import('./NonTechEvents/GamingForm/GamingForm'))
const Dream11iplForm = lazy(() =>
    import('./NonTechEvents/Dream11ipl/Dream11iplForm')
)
const TreasureHuntForm = lazy(() =>
    import('./NonTechEvents/TreasureHunt/TreasureHuntForm')
)

export const Index = ({ match }) => {
    return (
        <Suspense
            fallback={
                <div id="loader" class="loader-wrapper">
                    <span class="loader">
                        <span class="loader-inner"></span>
                    </span>
                </div>
            }
        >
            <Switch>
                <Route path={`/register/${FORM_ROUTES.nonTechEvents.gaming}`}>
                    <GamingForm />
                </Route>
                <Route
                    path={`/register/${FORM_ROUTES.nonTechEvents.dream11IPL}`}
                >
                    <Dream11iplForm />
                </Route>
                <Route
                    path={`/register/${FORM_ROUTES.nonTechEvents.treasureHunt}`}
                >
                    <TreasureHuntForm />
                </Route>
                <Route
                    path={`/register/${FORM_ROUTES.nonTechEvents.connexions}`}
                >
                    <ConnexionsForm />
                </Route>
                <Route path={`/register/${FORM_ROUTES.nonTechEvents.dubsmash}`}>
                    <DubsmashForm />
                </Route>
                <Route path={`/register/${FORM_ROUTES.techEvents.coding}`}>
                    <CodingForm />
                </Route>
                <Route
                    path={`/register/${FORM_ROUTES.techEvents.paperPresentation}`}
                >
                    <PaperPresentationForm />
                </Route>
                <Route path={`/register/${FORM_ROUTES.techEvents.debugging}`}>
                    <DebuggingForm />
                </Route> 
                <Route path={`/register/${FORM_ROUTES.techEvents.hackathon}`}>
                    <HackathonForm />
                </Route>
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Suspense>
    )
}
