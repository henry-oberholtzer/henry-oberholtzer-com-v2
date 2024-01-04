import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const HeaderBlock = () => {
	return (
		<div className="header">
			<Link
				className="logo"
				to={'/'}
				title="henryoberholtzer.com">
				<h1>Henry Oberholtzer</h1>
			</Link>
			<NavigationBar />
		</div>
	);
};

export default HeaderBlock;
