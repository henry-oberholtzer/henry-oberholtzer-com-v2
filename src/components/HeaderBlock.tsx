import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const HeaderBlock = () => {
	return (
		<div className="header-block">
			<Link
				to={'/'}
				title="henryoberholtzer.com">
				<h1 className="logo">Henry Oberholtzer</h1>
			</Link>
			<NavigationBar />
		</div>
	);
};

export default HeaderBlock;
