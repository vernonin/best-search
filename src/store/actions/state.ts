import { SET_STATE } from '../constant'
import { IAction } from '../reducers/state'

/**
 * 设置 state reducer inputValue 的 action
 * @param value string
 * @returns 
 */
export const setInputValue = (value: string): IAction => {
	return {
		type: SET_STATE,
		payload: { inputValue: value }
	}
}

/**
 * 设置 state reducer loading 的值 action
 * @param value boolean
 * @returns 
 */
export const setLoading = (value: boolean): IAction => {
	return {
		type: SET_STATE,
		payload: { loading: value }
	}
}
