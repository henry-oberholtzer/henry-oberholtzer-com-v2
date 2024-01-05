import NavigationButton from './NavigationButton';

const NavigationBar = () => {
	return (
		<div className="navigation">
			<nav>
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
		</div>
	);
};

export default NavigationBar;
