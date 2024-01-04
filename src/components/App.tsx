import './css/App.css';
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
