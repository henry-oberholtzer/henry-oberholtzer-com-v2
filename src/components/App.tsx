import './css/App.scss';
import Footer from './Footer';
import HeaderBlock from './HeaderBlock';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="main-box">
			<HeaderBlock />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
