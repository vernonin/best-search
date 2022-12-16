import React from 'react'
import { BrowserRouter as Routes } from 'react-router-dom'
import Router from './router'

const App: React.FC = () => {
	return (
		<Routes>
			<Router />
		</Routes>
	)
}

export default App
