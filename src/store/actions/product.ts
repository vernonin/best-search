import { SET_PRODUCTS } from "../constant"
import { IAction, IProduct } from "../reducers/product"


/**
 * 设置 product store 的 action
 */
export const setProducts = (data: IProduct[]): IAction => {
	return {
		type: SET_PRODUCTS,
		payload: data
	}
}