const ProjectBlock = (props: ProjectBlock) => {
	const { data } = props;
	const { title, externalLink, descHTML, primaryImage, list, dateStarted } =
		data;
	return (
		<div>
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
					{list.information.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default ProjectBlock;
