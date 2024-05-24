import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { HorizontalRule } from '../HorizontalRule';

const NavigationUnderline = styled(HorizontalRule)`
	margin-top: 0;`

const Button = styled.button`
	font-family: inherit;
	border: none;
	padding: 0;
	margin: 0;
	width: 100%;
	text-align: left;
	cursor: pointer;
	display: inherit;
	color: ${props => props.theme.text};
	background-color: transparent;
	font-weight: normal;
	font-size: 18px;
	&:first-of-type {
		margin-left: 0;
	}
	&:last-of-type {
		margin-right: 0;
	}
	&:active ${NavigationUnderline}, &:focus ${NavigationUnderline}, &:hover ${NavigationUnderline} {
		border-bottom: 1px solid ${props => props.theme.text}
	}`



const NavigationButton = (props: NavigationButton) => {
	const location = useLocation();
	const { to, name } = props;
	return (
		<Link
			to={to}>
			<Button>
				{name}
				<NavigationUnderline $active={location.pathname === to} />
			</Button>
		</Link>
	);
};

export { NavigationButton };
