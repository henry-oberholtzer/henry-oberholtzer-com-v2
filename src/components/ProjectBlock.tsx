const ProjectBlock = (props: ProjectBlock) => {
	const { key, data } = props;
	const { title, externalLink, descHTML, primaryImage, list, dateStarted } =
		data;
	return (
		<div key={key}>
			<div className="title">
				<h3>
					<a
						href={externalLink.externalURL}
						title={externalLink.linkText}>
						{title}
					</a>
				</h3>
				<em>{dateStarted}</em>
			</div>
			<div className="blocks">
				<img
					src={primaryImage.imgURL}
					alt={primaryImage.alt}
					title={primaryImage.title}
				/>
				<p>{descHTML}</p>
				<ul>
					<li>{list.title}</li>
					{list.information.map((item) => {
						return <li>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default ProjectBlock;
