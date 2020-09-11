import ActionTypes from './ActionTypes'

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    isCodingRegistered: false,
    isPaperPresentationRegistered: false,
    isDebuggingRegistered: false,
    isHackathonRegistered: false,
}

const techEventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.TECH_EVENTS_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isCodingRegistered: false,
                isPaperPresentationRegistered: false,
                isDebuggingRegistered: false,
                isHackathonRegistered: false,
            }

        case ActionTypes.REGISTER_CODING_EVENT_SUCCESS:
            return {
                ...state,
                isCodingRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_CODING_EVENT_FAIL:
            return {
                ...state,
                isCodingRegistered: false,
                isLoading: false,
                isError: true,
            }
        case ActionTypes.REGISTER_PAPERPRESENTATION_EVENT_SUCCESS:
            return {
                ...state,
                isPaperPresentationRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_PAPERPRESENTATION_EVENT_FAIL:
            return {
                ...state,
                isPaperPresentationRegistered: false,
                isLoading: false,
                isError: true,
            }
        case ActionTypes.REGISTER_DEBUGGING_EVENT_SUCCESS:
            return {
                ...state,
                isDebuggingRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_DEBUGGING_EVENT_FAIL:
            return {
                ...state,
                isDebuggingRegistered: false,
                isLoading: false,
                isError: true,
            }
        case ActionTypes.REGISTER_HACKATHON_EVENT_SUCCESS:
            return {
                ...state,
                isHackathonRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_HACKATHON_EVENT_FAIL:
            return {
                ...state,
                isHackathonRegistered: false,
                isLoading: false,
                isError: true,
            }

        default:
            return state
    }
}

export default techEventsReducer
