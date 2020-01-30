import React from 'react';
const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-detials">
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">Project Title - {id}</span>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					<p>Posted By Iqbal Ahmed</p>
					<p className="grey-text">3rd January 3am</p>
				</div>
			</div>
		</div>
	)
}
export default ProjectDetails;