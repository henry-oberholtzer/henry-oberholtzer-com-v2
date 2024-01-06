import NavigationButton from './NavigationButton';
const NavigationBar = () => {
	return (
		<nav className="navigation-bar">
			<NavigationButton
				to="/portfolio/code"
				name="code"
			/>
			<NavigationButton
				to="/portfolio/music"
				name="music"
			/>
			<NavigationButton
				to="/portfolio/design"
				name="& design"
			/>
		</nav>
	);
};

export default NavigationBar;
