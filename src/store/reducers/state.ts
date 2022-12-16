import { SET_STATE } from '../constant'

export interface IState {
  loading: boolean
  inputValue: string
}

// 定义Action类型
export interface IAction {
  type: string
  payload: {
    loading?: boolean
    inputValue?: string
  }
}

// 初始状态
const initialState: IState = {
  loading: false,
  inputValue: ''
}
/**
 * stateReducer：整个App state的 reducer
 * @param state IState
 * @param action IAction
 * @returns IState
 */
const stateReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state;
  }
}

export default stateReducer
