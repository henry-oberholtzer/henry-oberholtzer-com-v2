import styled from 'styled-components';
import Footer from './Footer';
import { Header } from './Header';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';
import { GlobalStylesheet } from './GlobalStylesheet';

const MainBox = styled.div`
width: 100%;
height: 100%;
padding: 0px 18px;
@media screen and (min-width: 768px) {
		padding: 18px 48px;
}
@media screen and (min-width: 1024px) {
		width: calc(1024px - 96px);
}
@media screen and (max-width: 1200px) {
}
`

const properties = [
		{
			link: "https://github.com/henry-oberholtzer",
			title: "code",
			target: "blank"
		},
		{
			link: "https://soundcloud.com/hypersurface",
			title: "music",
			target: "blank"
		},
		{
			link: "/design",
			title: "design",
		}
	]

function App() {
	return (
		<MainBox>
			<GlobalStylesheet />
			<Header>
				<NavigationBar links={properties} />
			</Header>
			<Outlet />
			<Footer />
		</MainBox>
	);
}

export default App;
