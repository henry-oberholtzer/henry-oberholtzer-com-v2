import emailAddress from './email';
import './css/footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
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
		</footer>
	);
};

export default Footer;
