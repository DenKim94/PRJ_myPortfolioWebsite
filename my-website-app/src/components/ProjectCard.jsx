import PropTypes from 'prop-types';
import './../styles/PortfolioSection.css'
import * as globalConstants from './../globalConstants.js'

const ProjectCard = ({projectName, projectDescription, projectURL, projectImage}) => {
    return ( 
        <div className='project-card'>            
            {/* TO-DO: Icon mit Verlinkung zum Live-Projekt*/}
            <a className='project-reference' href={projectURL} target="_blank" rel="noopener noreferrer">
                <img id={`card-image-${projectName}`} 
                        src={projectImage} 
                        alt={projectName} 
                        width={globalConstants.ICON_SIZE_PX}
                        height={globalConstants.ICON_SIZE_PX}
                        style={{ borderRadius: '15px', marginTop: '0px' }}
                        />
            </a>
            <div className='project-card-content'>
                <h3 className='project-card-title'>{projectName}</h3>
                <ul className='project-card-description'>
                    {projectDescription.map((item, index) => (
                    <li key={index} style={{ whiteSpace: 'pre-line' }}>
                       <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                    </li>
                    ))}
                </ul>
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