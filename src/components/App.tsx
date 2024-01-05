import './css/App.scss';
import HeaderBlock from './HeaderBlock';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="main-box">
			<HeaderBlock />
			<Outlet />
		</div>
	);
}

export default App;
