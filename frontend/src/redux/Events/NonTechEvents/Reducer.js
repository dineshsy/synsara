import ActionTypes from './ActionTypes'

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    isGamingRegistered: false,
    isDream11IPLRegistered: false,
    isTreasureHuntRegistered: false,
    isConnexionsRegistered: false,
    isDubsmashRegistered: false,
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
                isDubsmashRegistered: false,
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
        case ActionTypes.REGISTER_DUBSMASH_EVENT_SUCCESS:
            return {
                ...state,
                isDubsmashRegistered: true,
                isLoading: false,
            }
        case ActionTypes.REGISTER_DUBSMASH_EVENT_FAIL:
            return {
                ...state,
                isDubsmashRegistered: false,
                isError: true,
                isLoading: false,
            }
        default:
            return state
    }
}

export default nonTechEventsReducer
