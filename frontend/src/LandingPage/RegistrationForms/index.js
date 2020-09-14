import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GamingForm from './NonTechEvents/GamingForm/GamingForm'
import Dream11iplForm from './NonTechEvents/Dream11ipl/Dream11iplForm'
import TreasureHuntForm from './NonTechEvents/TreasureHunt/TreasureHuntForm'
import ConnexionsForm from './NonTechEvents/Connexions/ConnexionsForm'
import { FORM_ROUTES } from '../../utils/constants'
import PhotographyForm from './NonTechEvents/Photography/PhotographyForm'
import MemeContestForm from './NonTechEvents/MemeContest/MemeContest'
import CodingForm from './TechEvents/Coding/CodingForm'
import PaperPresentationForm from './TechEvents/Paper Presentation/PaperPresentation'
import InstaReelsForm from './NonTechEvents/InstaReelsContest/InstaReelsForm'
import DebuggingForm from './TechEvents/Debugging/DebuggingForm'
import { PageNotFound } from '../../Reusables/PageNotFound'

export const Index = ({ match }) => {
    return (
        <Switch>
            <Route path={`/register/${FORM_ROUTES.nonTechEvents.gaming}`}>
                <GamingForm />
            </Route>
            <Route path={`/register/${FORM_ROUTES.nonTechEvents.dream11IPL}`}>
                <Dream11iplForm />
            </Route>
            <Route path={`/register/${FORM_ROUTES.nonTechEvents.treasureHunt}`}>
                <TreasureHuntForm />
            </Route>
            <Route path={`/register/${FORM_ROUTES.nonTechEvents.connexions}`}>
                <ConnexionsForm />
            </Route>
            <Route path={`/register/${FORM_ROUTES.nonTechEvents.photography}`}>
                <PhotographyForm />
            </Route>
            <Route path={`/register/${FORM_ROUTES.nonTechEvents.memeContest}`}>
                <MemeContestForm />
            </Route>
            <Route path={`/register/${FORM_ROUTES.nonTechEvents.instareels}`}>
                <InstaReelsForm />
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
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}
