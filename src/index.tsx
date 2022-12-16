import reactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

import './assets/style/index.css'

const root = reactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
