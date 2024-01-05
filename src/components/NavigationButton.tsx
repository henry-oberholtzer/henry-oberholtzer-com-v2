import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const NavigationButton = (props: NavigationButon) => {
	const location = useLocation();
	const { to, name } = props;
	return (
		<Link
			className={
				location.pathname === to
					? 'navigation-button pageActive'
					: 'navigation-button'
			}
			to={to}>
			{name}
			<hr className="navigation-underline" />
		</Link>
	);
};

export default NavigationButton;
