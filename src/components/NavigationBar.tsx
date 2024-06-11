import { NavigationButton } from './NavigationButton';
import styled from 'styled-components'

const Nav = styled.nav`
width: 100%;
margin: 0;
display: grid;
grid-auto-columns: 1fr;
gap: 8px;
& * {
	grid-row: 1;
	grid-column: auto;
}`

const NavigationBar = (props: NavigationBarProps) => {
	return (
		<Nav>
			{props.links.map((link, i) => {
				return (
					<NavigationButton
						key={i}
						to={link.link}
						target={link.target}
						name={link.title}
					/>
				)
			})}
		</Nav>
	);
};

export default NavigationBar;

