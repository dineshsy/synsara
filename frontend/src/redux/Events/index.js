import { combineReducers } from 'redux'
import techEvents from './TechEvents/Reducer'
import nonTechEvents from './NonTechEvents/Reducer'
import toast from './Toast/Reducer'

const rootReducer = combineReducers({
    techEvents,
    nonTechEvents,
    toast,
})

export default rootReducer
