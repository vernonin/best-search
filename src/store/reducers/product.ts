import { SET_PRODUCTS } from "../constant"

interface ITrends {
	date: string
	sv: number
}

export interface IProduct {
	name: string
	trends: ITrends[]
}

export interface IProductState {
	product_trends: IProduct[]
}

export interface IAction {
	type: string
	payload: IProduct[]
}

const initState = {
	product_trends: []
}

/**
 * productReducer：Related product trends面积图的 reducer
 * @param state IProductState
 * @param action IAction
 * @returns 
 */
const productReducer = (state: IProductState = initState, action: IAction): IProductState => {
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				product_trends: action.payload
			}

		default:
			return state
	}
}

export default productReducer
