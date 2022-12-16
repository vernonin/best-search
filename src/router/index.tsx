import { RouteObject, useRoutes } from 'react-router-dom'

import Home from '../pages/home'
import Search from '../pages/search'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/search/:keyword',
		element: <Search/>
	}
]

const Router: React.FC = () => useRoutes(routes)

export default Router