import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import AboutPage from './components/AboutPage.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import PageBlocks from './components/PageBlocks.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import getData from './data/data.ts';

const rootLoader = async () => {
	const data = await getData();
	return { data };
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		children: [
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'code',
				element: <PageBlocks />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
