import emailAddress from './email';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
padding-top: 32px;
font-size: 16px;
font-weight: normal;
color: #aaaaaa;
> div {
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
a {
	color: #aaaaaa;
	transition: color ease-in-out 200ms;
}
a:hover, a:focus, a:active {
	color: #1a2415;
}
hr {
	border-top-color: #aaaaaa;
}
@media (prefers-contrast: more) {
	.footer {
		color:  #1a2415;
		div a {
			color:  #1a2415;
		}
		hr {
			border-top-color:  #1a2415;
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
			<hr className="navigation-underline" />
			<div>
				<span>
					<p>
						(c) henry oberholtzer {year} |{' '}
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
