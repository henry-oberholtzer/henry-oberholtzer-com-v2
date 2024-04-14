import styled from 'styled-components';
import Footer from './Footer';
import HeaderBlock from './HeaderBlock';
import { Outlet } from 'react-router-dom';

const MainBox = styled.div`
width: 100%;
height: 100%;
padding: 0 18px;
@media screen and (min-width: 768px) {
		padding: 18px 48px;
}
@media screen and (min-width: 1024px) {
		width: calc(1024px - 96px);
}
@media screen and (max-width: 1200px) {
}
`

function App() {
	return (
		<MainBox>
			<HeaderBlock />
			<Outlet />
			<Footer />
		</MainBox>
	);
}

export default App;
