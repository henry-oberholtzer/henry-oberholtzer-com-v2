import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { HorizontalRule } from '../HorizontalRule';

const H1 = styled.h1`
text-transform: lowercase;
font-size: 36px;
text-align: left;
white-space: nowrap;
font-weight: normal;
transition: font-size ease-in 200ms;
transition: opacity ease-in-out 200ms;
&:hover ${HorizontalRule} {
	border-top: 1px solid ${props => props.theme.primary};
	border-bottom: 1px solid ${props => props.theme.primary};
}
@media screen and (min-width: 480px) {
	font-size: 48px;
}
@media screen and (min-width: 768px) {
	font-size: 72px;
}`

const HeaderContainer = styled.header`
padding-top: 12px;
padding-bottom: 24px;
`

const Header = (props: PropsWithChildren) => {
	return (
		<HeaderContainer>
			<Link
				to={'/'}
				title="henryoberholtzer.com">
				<H1>Henry Oberholtzer
				<HorizontalRule />
				</H1>
			</Link>
			{props.children}
		</HeaderContainer>
	);
};

export { Header }
