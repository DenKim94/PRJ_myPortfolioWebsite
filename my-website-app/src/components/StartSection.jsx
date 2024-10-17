import './../styles/SectionsGeneric.css'
import './../styles/StartSection.css'
import InfoTextContainer from './InfoTextContainer.jsx';
import PhotoSlider from './PhotoSlider.jsx';
import * as globalConstants from './../globalConstants.js'

/**
 * The StartSection component is a React functional component that serves
 * as the start page section of the application. It renders a section
 * containing an 'InfoTextContainer' and a 'PhotoSlider', utilizing the
 * 'fullPhotoPath' constant from globalConstants to display images.
 * 
 * @returns {JSX.Element} A JSX element representing the start section.
 */
function StartSection() {
    return ( 
        <section id='start'className='start-section'>
            <div className='start-content-container'>
                <InfoTextContainer />
                <PhotoSlider fullPhotoPath = {globalConstants.fullPhotoPath} />
            </div>
        </section>
    );
}

export default StartSection;