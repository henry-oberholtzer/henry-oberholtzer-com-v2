import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import AboutPage from './components/AboutPage.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import PageBlocks from './components/PageBlocks.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <AboutPage />,
			},
			{
				path: '/code',
				element: <PageBlocks />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/music',
				element: <PageBlocks />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/design',
				element: <PageBlocks />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
