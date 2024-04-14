import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import styled from 'styled-components'

const HR = styled.hr`
margin-top: 12px;
position: relative;
width: 100%;
color: #1a2415;
border: 0;
border-top: 1px solid #1a2415;
border-bottom: 1px solid transparent;
height: 1px;
transition: border ease-in-out 200ms;`


const H1 = styled.h1`
text-transform: lowercase;
font-size: 36px;
text-align: left;
white-space: nowrap;
font-weight: normal;
transition: font-size ease-in 200ms;
transition: opacity ease-in-out 200ms;
&:hover ${HR} {
	border-top: 1px solid #1a2415;
	border-bottom: 1px solid #1a2415;
}
@media screen and (min-width: 480px) {
	font-size: 48px;
}
@media screen and (min-width: 768px) {
	font-size: 72px;
}`

const Header = styled.header`
padding-top: 12px;
padding-bottom: 24px;
`

const HeaderBlock = () => {
	return (
		<Header>
			<Link
				to={'/'}
				title="henryoberholtzer.com">
				<H1>Henry Oberholtzer
				<HR/>
				</H1>
				
			</Link>
			<NavigationBar />
		</Header>
	);
};

export default HeaderBlock;
