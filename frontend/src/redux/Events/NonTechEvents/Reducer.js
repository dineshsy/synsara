import ActionTypes from './ActionTypes'

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    isGamingRegistered: false,
    isDream11IPLRegistered: false,
    isTreasureHuntRegistered: false,
    isConnexionsRegistered: false,
    isPhotographyRegistered: false,
    isMemeContestRegistered: false,
}

const nonTechEventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.NON_TECH_EVENTS_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isGamingRegistered: false,
                isDream11IPLRegistered: false,
                isTreasureHuntRegistered: false,
                isConnexionsRegistered: false,
                isPhotographyRegistered: false,
                isMemeContestRegistered: false,
            }
        case ActionTypes.REGISTER_GAMING_EVENT_SUCCESS:
            return {
                ...state,
                isGamingRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_GAMING_EVENT_FAIL:
            return {
                ...state,
                isGamingRegistered: false,
                isLoading: false,
                isError: true,
            }
        case ActionTypes.REGISTER_DREAM11IPL_EVENT_SUCCESS:
            return {
                ...state,
                isDream11IPLRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_DREAM11IPL_EVENT_FAIL:
            return {
                ...state,
                isDream11IPLRegistered: false,
                isError: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_TREASUREHUNT_EVENT_SUCCESS:
            return {
                ...state,
                isTreasureHuntRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_TREASUREHUNT_EVENT_FAIL:
            return {
                ...state,
                isTreasureHuntRegistered: false,
                isLoading: false,
                isError: true,
            }
        case ActionTypes.REGISTER_CONNEXIONS_EVENT_SUCCESS:
            return {
                ...state,
                isConnexionsRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_CONNEXIONS_EVENT_FAIL:
            return {
                ...state,
                isConnexionsRegistered: false,
                isError: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_PHOTOGRAPHY_EVENT_SUCCESS:
            return {
                ...state,
                isPhotographyRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_PHOTOGRAPHY_EVENT_FAIL:
            return {
                ...state,
                isPhotographyRegistered: false,
                isError: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_MEMECONTEST_EVENT_SUCCESS:
            return {
                ...state,
                isMemeContestRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_MEMECONTEST_EVENT_FAIL:
            return {
                ...state,
                isMemeContestRegistered: false,
                isError: true,
                isLoading: false,
            }
        default:
            return state
    }
}

export default nonTechEventsReducer
