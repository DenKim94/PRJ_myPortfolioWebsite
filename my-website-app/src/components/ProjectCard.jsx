import PropTypes from 'prop-types';
import './../styles/PortfolioSection.css'
import './../styles/ProjectCard.css'
import Button from './Button.jsx'
import * as globalConstants from './../globalConstants.js'

const ProjectCard = ({projectName, projectDescription, projectURL, projectImage}) => {
    let moreCardsAvailable = false;

    if(globalConstants.PROJECT_CARDS_DATA.length > globalConstants.MAX_NUM_VISIBLE_CARDS){
        moreCardsAvailable = true;
    }

    // Dynamische Anpassung der Card-Höhe in Äbhängigkeit der Anzahl der verwendeten Cards
    const height = moreCardsAvailable ? 
                    `calc(92% / ${globalConstants.MAX_NUM_VISIBLE_CARDS})`
                    : `calc(82% / ${globalConstants.MAX_NUM_VISIBLE_CARDS})`;  

    return ( 
        <div className='project-card'
        style={{ height }}>            
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
                {/* <ul id={`card-description-${projectName}`} 
                    className='project-card-description' >
                        
                    {projectDescription.map((item, index) => (
                    <li key={index} style={{ whiteSpace: 'pre-line' }}>
                       <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                    </li>
                    ))}
                </ul> */}
                <Button buttonID = {`button-${projectName}`} 
                        buttonText = {"Mehr Infos"} 
                        callBackFcn = {() => console.log("Clicked button: ", projectName) }/>
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