import * as globalConstants from './../globalConstants.js'
import './../styles/PortfolioSection.css'
import ProjectCard from './ProjectCard.jsx'

const ProjectCardsContainer = () => {
    return ( 
        <div className='project-cards-container'>
            <ProjectCard 
                projectName={globalConstants.PROJECT_NAME_STRATEGO}
                projectDescription={globalConstants.PROJECT_DESCRIPTION_STRATEGO}
                projectURL={globalConstants.PROJECT_URLS.stratego}
                projectImage={globalConstants.PATH_TO_PROJECT_IMAGES.stratego}
            />
            <ProjectCard 
                projectName={globalConstants.PROJECT_NAME_ECA}
                projectDescription={globalConstants.PROJECT_DESCRIPTION_ECA}
                projectURL={globalConstants.PROJECT_URLS.eca}
                projectImage={globalConstants.PATH_TO_PROJECT_IMAGES.eca}
            />
            <ProjectCard 
                projectName={globalConstants.PROJECT_NAME_WEBSITE}
                projectDescription={globalConstants.PROJECT_DESCRIPTION_WEBSITE}
                projectURL={globalConstants.PROJECT_URLS.website}
                projectImage={globalConstants.PATH_TO_PROJECT_IMAGES.website}
            />
        </div>
     );
}
 
export default ProjectCardsContainer;