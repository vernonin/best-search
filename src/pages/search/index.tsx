import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { rootState } from '../../store'
import Header from '../../components/header'
import SearchInput from '../../components/search-input'
import { setProducts } from '../../store/actions/product'
import { setInputValue, setLoading } from '../../store/actions/state'
import ProductItem, { SkeletonItem } from '../../components/product-item'

import styles from './search.module.css'
import { IProduct } from '../../store/reducers/product'


const Search: React.FC = () => {
	const { keyword } = useParams()
	const { loading, inputValue } = useSelector((state: rootState) => state.state)
	const { product_trends } = useSelector((state: rootState) => state.product)

	const dispatch = useDispatch()

	const handleSearch = (keyword: string) => {
		console.log(keyword)
	}

	const fetchData = async () => {
		const requestUrl = 'http://3.141.23.218:5000/interview/keyword_search'

		const requestData = {
			login_token: 'INTERVIEW_SIMPLY2021',
			search_phrase: inputValue
		}

		const requestObj = {
			method: 'POST',
			body: JSON.stringify(requestData)
		}

		// 发送网络请求前，改变加载状态为 true
		dispatch(setLoading(true))

		try {
			const result = await fetch(requestUrl, requestObj)
			const request = await result.json()

			const product_trends = request.data.product_trends

			const product: IProduct[] = product_trends.map((p: any) => {
				return {
					name: p.name,
					trends: p.search_msv
				}
			})

			dispatch(setProducts(product))

		}
		catch {

		}

		// 发送网络请求后，改变加载状态为 false
		dispatch(setLoading(false))

	}

	useEffect(() => {
		const value = keyword?.replace(/\+/g, ' ')
		dispatch(setInputValue(value as string))

		fetchData()

		// 回到首页时，设置 inputValue 为空
		return () => {
			dispatch(setInputValue(''))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			<Header>
				<SearchInput style={{width: '70vw'}} onSearch={handleSearch} />
			</Header>

			<div className={styles.searchContent}>
				<p className={styles.searchContentTitle}>Related product trends</p>
				<div className={styles.productContent}>
					{
						loading ? (
							<>
								<SkeletonItem />
								<SkeletonItem />
								<SkeletonItem />
								<SkeletonItem />
							</>
						) : (
							<>
								{
									product_trends.map(p => (
										<ProductItem key={p.name} title={p.name} />
									))
								}
							</>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Search
