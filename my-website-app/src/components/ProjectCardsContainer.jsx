import * as globalConstants from './../globalConstants.js'
import './../styles/PortfolioSection.css'
import ProjectCard from './ProjectCard.jsx'

const ProjectCardsContainer = () => {

    return ( 
        <div className="project-cards-container">
            {globalConstants.PROJECT_CARDS_DATA.map((project, index) => (
                <ProjectCard
                    key={index}
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectURL={project.projectURL}
                    projectImage={project.projectImage}
                />
            ))}
        </div>       
     );
}
 
export default ProjectCardsContainer;