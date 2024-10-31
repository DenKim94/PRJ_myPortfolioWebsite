import PropTypes from 'prop-types';
import { useState } from 'react';
import './../styles/PortfolioSection.css'
import './../styles/ProjectCard.css'
import * as globalConstants from './../globalConstants.js'

const ProjectCard = ({projectName, projectDescription, projectURL, projectImage}) => {
    const [hoveredCard, setHoveredCard] = useState(null); 

    return ( 
        <div className='project-card'
            onMouseEnter={() => setHoveredCard(projectName)}
            onMouseLeave={() => setHoveredCard(null)} 
        >            
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
                <ul id={`card-description-${projectName}`} 
                    className='project-card-description'
                    style={{ display: hoveredCard === projectName ? 'block' : 'block' }} >
                        
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
    projectDescription: PropTypes.arrayOf(PropTypes.string),
    projectURL: PropTypes.string.isRequired,
    projectImage: PropTypes.string,
};

export default ProjectCard;