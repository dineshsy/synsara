import ActionTypes from './ActionTypes'
import axios from '../../../utils/axiosConfig'

export const registerGamingEvent = (data) => (dispatch, getState) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/gaming', data)
        .then((res) => {
            dispatch({ type: ActionTypes.REGISTER_GAMING_EVENT_SUCCESS })
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_GAMING_EVENT_FAIL })
        })
}

export const registerDream11iplEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/dream11', data)
        .then((res) =>
            dispatch({ type: ActionTypes.REGISTER_DREAM11IPL_EVENT_SUCCESS })
        )
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_DREAM11IPL_EVENT_FAIL })
        })
}

export const registerConnexionsEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/connexion', data)
        .then((res) =>
            dispatch({ type: ActionTypes.REGISTER_CONNEXIONS_EVENT_SUCCESS })
        )
        .catch((err) =>
            dispatch({ type: ActionTypes.REGISTER_CONNEXIONS_EVENT_FAIL })
        )
}

export const registerPhotographyEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/photo', data)
        .then((res) =>
            dispatch({ type: ActionTypes.REGISTER_PHOTOGRAPHY_EVENT_SUCCESS })
        )
        .catch((err) =>
            dispatch({ type: ActionTypes.REGISTER_PHOTOGRAPHY_EVENT_FAIL })
        )
}

export const registerTreasureHuntEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/treasure', data)
        .then((res) =>
            dispatch({ type: ActionTypes.REGISTER_TREASUREHUNT_EVENT_SUCCESS })
        )
        .catch((err) =>
            dispatch({ type: ActionTypes.REGISTER_TREASUREHUNT_EVENT_FAIL })
        )
}

export const registerMemeContestEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/*MEME_CONTEST_ROUTE*', data)
        .then((res) =>
            dispatch({ type: ActionTypes.REGISTER_MEMECONTEST_EVENT_SUCCESS })
        )
        .catch((err) =>
            dispatch({ type: ActionTypes.REGISTER_MEMECONTEST_EVENT_FAIL })
        )
}

export const registerInstaReelsEvent = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/nontechnical/*INSTA_REELS_ROUTE*', data)
        .then((res) =>
            dispatch({ type: ActionTypes.REGISTER_INSTA_REEL_CONTEST_SUCCESS })
        )
        .catch((err) =>
            dispatch({ type: ActionTypes.REGISTER_INSTA_REEL_CONTEST_FAIL })
        )
}
