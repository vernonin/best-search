import { combineReducers } from 'redux'

import state from './state'
import product from './product'

// 连接所有 Reducer
const rootReducer = combineReducers({ state, product })

export default rootReducer
