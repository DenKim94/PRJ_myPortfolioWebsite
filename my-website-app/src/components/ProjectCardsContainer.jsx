import * as globalConstants from './../globalConstants.js'
import './../styles/PortfolioSection.css'
import ProjectCard from './ProjectCard.jsx'
import CardInfos from './CardInfos.jsx'
import { useSharedContext } from './../context/sharedStates';

/**
 * A component that renders a container with project cards.
 * The component renders a CardInfos component if the shared state 'visibleCardInfo' is set to true.
 * Otherwise, it renders a container with ProjectCard components.
 * 
 * @returns {JSX.Element} The rendered component.
 */
const ProjectCardsContainer = () => {
    const { visibleCardInfo } = useSharedContext();

    return ( 
        <div>
            {visibleCardInfo.isVisible ? (
                <CardInfos />
            ) : (
                <div className="project-cards-container">
                    {globalConstants.PROJECT_CARDS_DATA.map((project, index) => (
                        <ProjectCard
                            key={index}
                            cardIndex = {index}
                            projectName={project.projectName}
                            projectDescription={project.projectDescription}
                            projectURL={project.projectURL}
                            projectImage={project.projectImage}
                        />
                    ))}
                </div>             
            )}        
        </div>      
     );
}
 
export default ProjectCardsContainer;