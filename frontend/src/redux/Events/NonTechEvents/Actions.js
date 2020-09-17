import ActionTypes from './ActionTypes'
import axios from '../../../utils/axiosConfig'
import { registrationFailed, registrationSuccess } from '../Toast/Actions'

export const registerGamingEvent = (data) => (dispatch, getState) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/gaming', data)
        .then((res) => {
            dispatch({ type: ActionTypes.REGISTER_GAMING_EVENT_SUCCESS })
            dispatch(registrationSuccess({ ...res.data, name: 'Hooray!' }))
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_GAMING_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Gaming',
                })
            )
        })
}

export const registerDream11iplEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/dream11', data)
        .then((res) => {
            dispatch({ type: ActionTypes.REGISTER_DREAM11IPL_EVENT_SUCCESS })
            dispatch(registrationSuccess(res.data))
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_DREAM11IPL_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Dream 11 ipl',
                })
            )
        })
}

export const registerConnexionsEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/connexion', data)
        .then((res) => {
            dispatch({ type: ActionTypes.REGISTER_CONNEXIONS_EVENT_SUCCESS })
            dispatch(registrationSuccess(res.data))
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_CONNEXIONS_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Connexions',
                })
            )
        })
}

export const registerDubsmashEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/dub', data)
        .then((res) => {
            dispatch({ type: ActionTypes.REGISTER_DUBSMASH_EVENT_SUCCESS })
            dispatch(registrationSuccess(res.data))
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_DUBSMASH_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Dubsmash',
                })
            )
        })
}

export const registerTreasureHuntEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/treasure', data)
        .then((res) => {
            dispatch(registrationSuccess(res.data))
            dispatch({ type: ActionTypes.REGISTER_TREASUREHUNT_EVENT_SUCCESS })
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_TREASUREHUNT_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Treasure Hunt',
                })
            )
        })
}
