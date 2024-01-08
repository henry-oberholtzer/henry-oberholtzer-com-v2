import { Link } from 'react-router-dom';
import './css/headerblock.scss';
import NavigationBar from './NavigationBar';

const HeaderBlock = () => {
	return (
		<header className="header-block">
			<Link
				to={'/'}
				title="henryoberholtzer.com">
				<h1 className="logo">Henry Oberholtzer</h1>
				<hr className="header-underline" />
			</Link>
			<NavigationBar />
		</header>
	);
};

export default HeaderBlock;
