import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/header'
import SearchInput from '../../components/search-input'

import styles from './home.module.css'

const Home: React.FC = () => {
	const navigate = useNavigate()

	// 回车/搜索，跳转到 search 页面
	const handleSearch = (keyword: string) => {
		navigate('/search/' + keyword.replace(/ /g, '+'))
	}

	return (
		<>
			<Header />
			<div className={styles.mainText}>Search Trends</div>
			<SearchInput style={{width: '60vw', margin: '0 auto'}} onSearch={handleSearch} />
		</>
	)
}

export default Home
