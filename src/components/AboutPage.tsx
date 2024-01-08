import { Link } from 'react-router-dom';
import emailAddress from './email';

const AboutPage = () => {
	return (
		<div className="about-page">
			<p>Programmer, musician and designer based in the Pacific Northwest.</p>
			<br />
			<p>
				Experienced in JavaScript, TypeScript, React, and C#, interested in
				learning C++ and Python.
			</p>
			<br />
			<p>
				<Link to="/portfolio/code">
					Some of my favorite projects I've been involved in
				</Link>
				, with many more on{' '}
				<Link to="https://github.com/henry-oberholtzer">github</Link>.
			</p>
			<br />
			<p>
				<Link to="https://github.com/henry-oberholtzer/waveform-transmissions/blob/c75d6d415022685364b2a0a7561adfaed8f00ef3/thesis.pdf">
					Waveform Transmission
				</Link>
				, my undergraduate thesis, explores minimalism as used in techno.
			</p>
			<br />
			<p>
				Passionate about music, djing, media archiving, vinyl, and music
				production.
			</p>
			<br />
			<p>
				Studying web development full time at Epicodus, and am continuing to
				take in new languages and skills every day.
			</p>
			<br />
			<p>
				Interested in working together? You can contact me at {emailAddress()}
			</p>
		</div>
	);
};

export default AboutPage;
