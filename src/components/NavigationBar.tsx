import NavigationButton from './NavigationButton';

const NavigationBar = () => {
	return (
		<div className="navigation">
			<nav>
				<NavigationButton
					to="music"
					name="music"
				/>
				<NavigationButton
					to="design"
					name="design"
				/>
				<NavigationButton
					to="code"
					name="& code"
				/>
			</nav>
		</div>
	);
};

export default NavigationBar;
