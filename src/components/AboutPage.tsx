import { Link } from 'react-router-dom';
import emailAddress from './email';

const AboutPage = () => {
	return (
		<div className="content">
			<p>
				Hello! I'm a programmer, musician and designer based in the pacific
				northwest.
			</p>
			<br />
			<p>
				I have experience in JavaScript, TypeScript, React, C# and am working on
				growing my skills to include C++ and Python.
			</p>
			<br />
			<p>
				<Link to="/portfolio/code">My code page</Link> features my favorite
				projects, but you can get into the details on my{' '}
				<Link to="https://github.com/henry-oberholtzer">github</Link>.
			</p>
			<br />
			<p>I attend Reed College where I studied music composition</p>
			<p>
				<Link to="https://github.com/henry-oberholtzer/waveform-transmissions/blob/c75d6d415022685364b2a0a7561adfaed8f00ef3/thesis.pdf">
					Waveform Transmission
				</Link>
				, my senior thesis, focused on the use of minimalism in techno.
			</p>
			<br />
			<p>
				I'm passionate about music, djing, media archiving, vinyl, and music
				production - I'll be posting more about all this in the future!
			</p>
			<br />
			<p>
				i am currently studying web development full time at Epicodus, and am
				continuing to take in new languages and skills every day.
			</p>
			<br />
			<p>
				interested in working together? you can contact me at {emailAddress()}
			</p>
		</div>
	);
};

export default AboutPage;
