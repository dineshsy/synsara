import ActionTypes from './ActionTypes'

export const registrationSuccess = (details) => {
    return { type: ActionTypes.EVENT_REGISTERED_SUCCESSFULLY, payload: details }
}

export const registrationFailed = (error_details) => {
    return {
        type: ActionTypes.EVENT_REGISTRATION_FAILED,
        payload: error_details,
    }
}
