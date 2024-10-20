import PropTypes from 'prop-types';
import './../styles/PortfolioSection.css'

const ProjectCard = ({projectName, projectDescription, projectURL, projectImage}) => {
    return ( 
        <div className='project-card'>
            <h3 className='project-card-title'>{projectName}</h3>
            <div className='project-card-content'>
                {/* TO-DO: Icon mit Verlinkung zum Live-Projekt*/}
                <a className='project-reference' href={projectURL} target="_blank" rel="noopener noreferrer">
                    <img id={`card-image-${projectName}`} 
                         src={projectImage} 
                         alt={projectName} 
                         width={200}
                         height={200}
                         style={{ borderRadius: '30px' }}
                         />
                </a>
                {/* TO-DO: Tableiste mit Projektbeschreibung (mit Verweis auf Github) und Demo als Video */}
                <p className='project-card-description'>{projectDescription}</p>
            </div>
        </div>
     );
}

ProjectCard.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string,
    projectURL: PropTypes.string.isRequired,
    projectImage: PropTypes.string,
};

export default ProjectCard;