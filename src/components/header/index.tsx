import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./header.module.css"

type Iprops = {
	children?: JSX.Element
}

const Header: React.FC<Iprops> = ({ children }) => {
	return (
		<div className={styles.headerContainer}>
			<Link to="/" className={styles.headerLogo}>
				<strong>Best</strong>Search
			</Link>
			<div className={styles.slot}>{children}</div>
		</div>
	)
}

export default Header
