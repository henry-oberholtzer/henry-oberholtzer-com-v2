import NavigationButton from './NavigationButton';
import styled from 'styled-components'

const Nav = styled.nav`
width: 100%;
margin: 0;
display: grid;
grid-auto-columns: 1fr;
gap: 8px;
}`

const NavigationBar = () => {
	return (
		<Nav>
			<NavigationButton
				to="/code"
				name="code"
			/>
			<NavigationButton
				to="/music"
				name="music"
			/>
		</Nav>
	);
};

export default NavigationBar;
