import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { HorizontalRule } from '../HorizontalRule';

const NavigationUnderline = styled(HorizontalRule)`
	margin-top: 0;`

const Button = styled.button<{ $small?: boolean, $color?: string }>`
	font-family: inherit;
	border: none;
	padding: 0;
	margin: ${props => props.$small ? '0px 8px' : '0'};
	width: ${props => props.$small ? 'min-content' : '100%'};
	text-align: left;
	cursor: pointer;
	display: inherit;
	text-wrap: nowrap;
	color: ${props => props.$color ? props.$color : props.theme.text};
	background-color: transparent;
	font-weight: normal;
	font-size: ${props => props.$small ? 16 : 18}px;
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
	const { to, name, small, color } = props;
	return (
		<Link
			to={to}
			target={props.target}>
			<Button $small={small ? small : false} $color={color}>
				{name}
				<NavigationUnderline $active={location.pathname === to} $color={color} />
			</Button>
		</Link>
	);
};

export { NavigationButton };
