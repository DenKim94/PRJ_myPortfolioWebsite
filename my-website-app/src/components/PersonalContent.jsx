import './../styles/TabContent.css';
import PhotoSlider from './PhotoSlider.jsx';
import * as globalConstants from './../globalConstants.js';

const PersonalContent = () => {
    return ( 
        <div className="personal-content">
            <div className="personal-photo-slider">
                <PhotoSlider fullPhotoPath={globalConstants.fullPhotoPath} />
            </div>
            <p id="personal-description" style={{ whiteSpace: 'pre-line' }}>
                {globalConstants.INFO_TEXT_PERSONAL}
            </p> 
        </div>
     );
}
 
export default PersonalContent;