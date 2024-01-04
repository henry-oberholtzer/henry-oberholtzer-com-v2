import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import AboutPage from './components/AboutPage.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import PageBlocks from './components/PageBlocks.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rootLoader = async (param?: string) => {
	const data = await fetch(`./data/${param}.json`);
	if (data.status === 404) {
		throw new Response('Not Found', { status: 404 });
	}
	return data.json();
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: '/p/:pageCategory',
				element: <PageBlocks />,
				loader: ({ params }) => {
					return rootLoader(params.pageCategory);
				},
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
