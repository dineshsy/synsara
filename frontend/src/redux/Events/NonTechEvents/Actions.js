import ActionTypes from './ActionTypes'
import axios from '../../../utils/axiosConfig'

export const registerGamingEvent = (data) => (dispatch, getState) => {
    dispatch({ type: ActionTypes.NON_TECH_EVENTS_LOADING })
    axios
        .post('/notSureAboutTheRoute', data)
        .then((res) => {
            dispatch({ type: ActionTypes.REGISTER_GAMING_EVENT_SUCCESS })
        })
        .catch((err) => {
            dispatch({ type: ActionTypes.REGISTER_GAMING_EVENT_FAIL })
        })
}
