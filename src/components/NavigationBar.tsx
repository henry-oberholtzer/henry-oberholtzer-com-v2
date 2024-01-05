import NavigationButton from './NavigationButton';
const NavigationBar = () => {
	return (
		<nav className="navigation-bar">
			<NavigationButton
				to="/portfolio/music"
				name="music"
			/>
			<NavigationButton
				to="/portfolio/design"
				name="design"
			/>
			<NavigationButton
				to="/portfolio/code"
				name="& code"
			/>
		</nav>
	);
};

export default NavigationBar;
