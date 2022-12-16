import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'

import { rootState } from '../../store'
import { setInputValue } from '../../store/actions/state'

import styles from './search-input.module.css'

type IProps = {
	style?: React.CSSProperties
	onSearch: (keyword: string) => void
}

const SearchInput: React.FC<IProps> = ({ style, onSearch }) => {

	const { inputValue } = useSelector((state: rootState) => state.state)
	const dispatch = useDispatch()

	
	const submit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { key } = e
		const value = inputValue.trim()
		
		if (key === 'Enter'&& value !== '') {
			onSearch(value)
		}
	}

	// 受控组件，状态保存在 state store中
	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue(e.currentTarget.value))
	}

	return (
		<div style={style} className={styles.searchInput}>
			<input
				type="text"
				className={styles.input}
				value={inputValue}
				onKeyUp={submit}
				onChange={inputChange}
				placeholder="Search for new products in 961K store"
			/>
			<div className={styles.button} onClick={() => (inputValue.trim() !== '' && onSearch(inputValue.trim()))}>
				<SearchIcon color="action" />
			</div>
		</div>
	)
}

export default SearchInput
