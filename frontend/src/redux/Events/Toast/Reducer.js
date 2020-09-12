import ActionTypes from './ActionTypes'

const initialState = {
    isError: false,
    error_details: null,
    registration_details: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.EVENT_REGISTERED_SUCCESSFULLY:
            return {
                ...state,
                isError: false,
                registration_details: action.payload,
            }
        case ActionTypes.EVENT_REGISTRATION_FAILED:
            return {
                ...state,
                isError: true,
                error_details: action.payload,
            }
        default:
            return state
    }
}
