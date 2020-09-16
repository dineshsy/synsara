import ActionTypes from './ActionTypes'
import axios from '../../../utils/axiosConfig'
import { registrationFailed, registrationSuccess } from '../Toast/Actions'

export const registerCodingEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.TECH_EVENTS_LOADING })
    axios
        .post('/technical/coding', data)
        .then((res) => {
            dispatch(registrationSuccess(res.data))
            dispatch({ type: ActionTypes.REGISTER_CODING_EVENT_SUCCESS })
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_CODING_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Coding',
                })
            )
        })
}

export const registerDebuggingEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.TECH_EVENTS_LOADING })
    axios
        .post('/technical/debugging', data)
        .then((res) => {
            dispatch(registrationSuccess(res.data))
            dispatch({ type: ActionTypes.REGISTER_DEBUGGING_EVENT_SUCCESS })
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_DEBUGGING_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Debugging',
                })
            )
        })
}

export const registerPaperPresentationEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.TECH_EVENTS_LOADING })
    axios
        .post('/technical/paper', data)
        .then((res) => {
            dispatch(registrationSuccess({ ...res.data, name: 'Hooray!' }))
            dispatch({
                type: ActionTypes.REGISTER_PAPERPRESENTATION_EVENT_SUCCESS,
            })
        })
        .catch((err) => {
            dispatch({
                type: ActionTypes.REGISTER_PAPERPRESENTATION_EVENT_FAIL,
            })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Paper Presentation',
                })
            )
        })
}

export const registerHackathonEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.TECH_EVENTS_LOADING })
    axios
        .post('/technical/hackathon', data)
        .then((res) => {
            dispatch(registrationSuccess({ ...res.data, name: 'Hooray!' }))
            dispatch({ type: ActionTypes.REGISTER_HACKATHON_EVENT_SUCCESS })
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_HACKATHON_EVENT_FAIL })
            dispatch(
                registrationFailed({
                    err_type: err.response,
                    event: 'Hackathon',
                })
            )
        })
}
