import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import GamingForm from './NonTechEvents/GamingForm/GamingForm'
import Dream11iplForm from './NonTechEvents/Dream11ipl/Dream11iplForm'
import TreasureHuntForm from './NonTechEvents/TreasureHunt/TreasureHuntForm'
import ConnexionsForm from './NonTechEvents/Connexions/ConnexionsForm'
import { FORM_ROUTES } from '../../utils/constants'
import PhotographyForm from './NonTechEvents/Photography/PhotographyForm'
import MemeContestForm from './NonTechEvents/MemeContest/MemeContest'
import CodingForm from './TechEvents/Coding/CodingForm'
import PaperPresentationForm from './TechEvents/Paper Presentation/PaperPresentation'

export const Index = () => {
    return (
        <BrowserRouter basename="/register">
            <Switch>
                <Route path={`/${FORM_ROUTES.nonTechEvents.gaming}`}>
                    <GamingForm />
                </Route>
                <Route path={`/${FORM_ROUTES.nonTechEvents.dream11IPL}`}>
                    <Dream11iplForm />
                </Route>
                <Route path={`/${FORM_ROUTES.nonTechEvents.treasureHunt}`}>
                    <TreasureHuntForm />
                </Route>
                <Route path={`/${FORM_ROUTES.nonTechEvents.connexions}`}>
                    <ConnexionsForm />
                </Route>
                <Route path={`/${FORM_ROUTES.nonTechEvents.photography}`}>
                    <PhotographyForm />
                </Route>
                <Route path={`/${FORM_ROUTES.nonTechEvents.memeContest}`}>
                    <MemeContestForm />
                </Route>
                <Route path={`/${FORM_ROUTES.techEvents.coding}`}>
                    <CodingForm />
                </Route>
                <Route path={`/${FORM_ROUTES.techEvents.paperPresentation}`}>
                    <PaperPresentationForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
