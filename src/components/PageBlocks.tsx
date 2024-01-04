const PageBlocks = () => {
	return (
		<>
			<div className="title">
				<h3>
					<a
						href="https://github.com/henry-oberholtzer/digital_oberholtzer"
						title="View this project on GitHub">
						henryoberholtzer.com
					</a>
				</h3>
				<em>October 2023</em>
			</div>
			<div className="blocks">
				<img
					src="./img/portfolio.png"
					alt="A Screenshot of the project"
				/>
				<p>
					A portfolio website created to showcase my work across mediums,
					including code, music, and eventually design.
				</p>
				<ul>
					<li>Written In</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
		</>
	);
};

export default PageBlocks;
