import { combineReducers } from 'redux'
import techEvents from './TechEvents/Reducer'
import nonTechEvents from './NonTechEvents/Reducer'

const rootReducer = combineReducers({
    techEvents,
    nonTechEvents,
})

export default rootReducer
