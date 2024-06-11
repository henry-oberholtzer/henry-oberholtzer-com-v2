import emailAddress from './email';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HorizontalRule } from './HorizontalRule';

const StyledFooter = styled.footer`
padding-top: 32px;
font-size: 16px;
font-weight: normal;
color: ${props => props.theme.textLight};
> div {
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
a {
	color: ${props => props.theme.textLight};
	transition: color ease-in-out 200ms;
}
a:hover, a:focus, a:active {
	color: ${props => props.theme.linkHover};
}
@media (prefers-contrast: more) {
	.footer {
		color:  ${props => props.theme.text};
		div a {
			color:  ${props => props.theme.text};
		}
	}
}

@media screen and (min-width: 680px) {
		div {
			flex-direction: row;
		}
}`

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<StyledFooter>
			<HorizontalRule />
			<div>
				<span>
					<p>
						henry oberholtzer {year} |{' '}
						<Link to={'mailto:'.concat(emailAddress())}>get in touch!</Link>
					</p>
				</span>
				<span>
					<p>
						<Link to="https://github.com/henry-oberholtzer">github</Link> |{' '}
						<Link to="https://www.linkedin.com/in/henryoberholtzer/">
							linkedin
						</Link>{' '}
						| <Link to="https://hypersurfacesound.bandcamp.com">bandcamp</Link>
					</p>
				</span>
			</div>
		</StyledFooter>
	);
};

export default Footer;
