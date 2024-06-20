import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import AboutPage from './components/AboutPage.tsx';
import ErrorPage from './components/ErrorPage.tsx';
// import PageBlocks from './components/PageBlocks.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CustomThemeProvider, DesignPage } from './components/index.ts';


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
			// {
			// 	path: '/code',
			// 	element: <PageBlocks />,
			// 	errorElement: <ErrorPage />,
			// },
			// {
			// 	path: '/music',
			// 	element: <PageBlocks />,
			// 	errorElement: <ErrorPage />,
			// },
			{
				path: '/design',
				element: <DesignPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomThemeProvider>
			<RouterProvider router={router} />
		</CustomThemeProvider>
	</React.StrictMode>
);
