import { Link } from 'react-router-dom';
const NavigationButton = (props: NavigationButon) => {
	const { to, name } = props;
	return <Link to={to}>{name}</Link>;
};

export default NavigationButton;
