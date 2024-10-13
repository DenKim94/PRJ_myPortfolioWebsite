import './../styles/SectionsGeneric.css'
import './../styles/StartSection.css'
import InfoTextContainer from './InfoTextContainer.jsx';
import PhotoSlider from './PhotoSlider.jsx';
import * as globalConstants from './../globalConstants.js'

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