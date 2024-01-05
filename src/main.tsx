import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import AboutPage from './components/AboutPage.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import PageBlocks from './components/PageBlocks.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rootLoader = async (request?: string) => {
	return fetch(`/data/${request}.json`)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
};

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
				path: '/portfolio/:portfolioCategory',
				element: <PageBlocks />,
				loader: ({ params }) => rootLoader(params.portfolioCategory),
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
