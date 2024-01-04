import { useLoaderData } from 'react-router-dom';
import ProjectBlock from './ProjectBlock';

const PageBlocks = () => {
	const projectData: projectData = useLoaderData() as projectData;
	return (
		<>
			{Object.keys(projectData).map((key) => {
				return (
					<ProjectBlock
						data={projectData[key]}
						key={key}
					/>
				);
			})}
		</>
	);
};

export default PageBlocks;
