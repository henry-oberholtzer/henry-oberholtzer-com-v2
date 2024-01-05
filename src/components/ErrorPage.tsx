import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError() as Error;
	return (
		<div id="error-page">
			<h1>Something is wrong...</h1>
			<p>{error.message}</p>
		</div>
	);
};

export default ErrorPage;
