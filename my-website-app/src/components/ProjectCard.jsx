import PropTypes from 'prop-types';
import './../styles/PortfolioSection.css'
import './../styles/ProjectCard.css'
import Button from './Button.jsx'
import * as globalConstants from './../globalConstants.js'
import { useSharedContext } from './../context/sharedStates';

/**
 * A component that renders a project card.
 * 
 * The project card renders an icon of the project, the project name, and a button to show more information.
 * When the button is clicked, the component changes a shared state to display the project information by another component.
 * The height of the card is dynamically adjusted based on the number of cards available.
 * 
 * @param {number} cardIndex Index of specific card (optional).
 * @param {string} projectName The name of the project.
 * @param {string} projectURL The URL of the project.
 * @param {string} projectImage The URL of the preview image of the project.
 * @returns {JSX.Element} The rendered component.
 */
const ProjectCard = ({cardIndex = undefined, projectName, projectURL, projectImage}) => {
    const { setVisibleCardInfo } = useSharedContext();
    let moreCardsAvailable = false;

    if(globalConstants.PROJECT_CARDS_DATA.length > globalConstants.MAX_NUM_VISIBLE_CARDS){
        moreCardsAvailable = true;
    }

    // Dynamische Anpassung der Card-Höhe in Äbhängigkeit der Anzahl der verwendeten Cards
    const height = moreCardsAvailable ? 
                    `calc(92% / ${globalConstants.MAX_NUM_VISIBLE_CARDS})`
                    : `calc(82% / ${globalConstants.MAX_NUM_VISIBLE_CARDS})`;  

    return ( 
        <div className='project-card' style={{ height }}>
            <a className='project-reference' href={projectURL} target="_blank" rel="noopener noreferrer">
                <img
                    id={`card-image-${projectName}`}
                    src={projectImage}
                    alt={projectName}
                    width={globalConstants.ICON_SIZE_PX}
                    height={globalConstants.ICON_SIZE_PX}
                    style={{ borderRadius: '15px', marginTop: '0px' }}
                />
            </a>
            <div className='project-card-content'>
                <h3 className='project-card-title'>{projectName}</h3>
                <Button
                    buttonID={`info-button-${projectName}`}
                    buttonText={"Mehr Infos"}
                    callBackFcn={() => setVisibleCardInfo({cardIndex: cardIndex, isVisible: true})}
                />
            </div>
        </div>
     );
}

ProjectCard.propTypes = {
    cardIndex: PropTypes.number,
    projectName: PropTypes.string.isRequired,
    projectURL: PropTypes.string.isRequired,
    projectImage: PropTypes.string.isRequired,
};

export default ProjectCard;