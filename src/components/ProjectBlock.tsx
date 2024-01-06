import './css/projectblock.scss';

const ProjectBlock = (props: ProjectBlock) => {
	const { data } = props;
	const { title, externalLink, descHTML, primaryImage, list, dateStarted } =
		data;

	const listItemGenerator = (itemArray: string[]) => {
		return itemArray.map((item, index) => {
			return <li key={index}>{item}</li>;
		});
	};

	const listBlockGenerator = (list: informationList) => {
		switch (list.type) {
			case 'ol':
				return <ol>{listItemGenerator(list.information)}</ol>;
			default:
				return <ul>{listItemGenerator(list.information)}</ul>;
		}
	};

	return (
		<div className="project-block">
			<div className="title-section">
				<a
					href={externalLink.externalURL}
					title={externalLink.linkText}
					target="_blank">
					<h3 className="title-text">
						{title}
						<span className="date-started">{dateStarted}</span>
					</h3>
					<hr className="navigation-underline" />
				</a>
			</div>
			<div className="blocks">
				<div className="imageGroup">
					<img
						src={primaryImage.imgURL}
						alt={primaryImage.alt}
						title={primaryImage.title}
					/>
					{primaryImage.title != null ? (
						<>
							<p className="image-caption">{primaryImage.title}</p>
						</>
					) : (
						''
					)}
				</div>
				<p className="description">{descHTML}</p>
				<hr className="navigation-underline desktop-hidden" />
				<div className="list-block">
					<p className="list-title">{list.title}</p>
					{listBlockGenerator(list)}
				</div>
			</div>
		</div>
	);
};

export default ProjectBlock;
