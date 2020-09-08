import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import GamingForm from './NonTechEvents/GamingForm/GamingForm'
import { FORM_ROUTES } from '../../utils/constants'

export const Index = () => {
    return (
        <BrowserRouter basename="/register">
            <Switch>
                <Route path={`/${FORM_ROUTES.nonTechEvents.gaming}`}>
                    <GamingForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
