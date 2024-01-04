import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError() as Error | Response;
	return (
		<div id="error-page">
			<h1>Something is wrong...</h1>
			<p>{typeof error === "Error" ? error.message : }</p>
		</div>
	);
};

export default ErrorPage;
