import { combineReducers } from 'redux'

import state from './state'
import product from './product'

// θΏζ₯ζζ Reducer
const rootReducer = combineReducers({ state, product })

export default rootReducer
