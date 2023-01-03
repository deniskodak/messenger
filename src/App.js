import React from 'react'
import './App.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './Pages/Login'
import Main from './Pages/Main'

function App() {
	const router = createHashRouter(
		[
			{
				path: '/',
				element: (
					<ProtectedRoute isPrivate>
						<Main />
					</ProtectedRoute>
				),
				errorElement: <h1>not found</h1>,
			},
			{
				path: '/login',
				element: (
					<ProtectedRoute redirectPath="/">
						<Login />
					</ProtectedRoute>
				),
			},
		],
	)

	return (
		<React.StrictMode>

			<RouterProvider
				router={router}
				fallbackElement={<h1>loading....</h1>}
				/>
		</React.StrictMode>
	)
}

export default App
