import './../styles/Sections.css'
import Typical from 'react-typical'
import * as globalConstants from './../globalConstants.js'

const InfoTextContainer = () => {
    return ( 
        <div className='info-text-container'>
            <h1 className="greeting-text">
                Hallo, ich bin{' '}
                <Typical
                    loop={1}
                    wrapper="span"
                    steps={[
                        'D', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'De', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'Den', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'Deni', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'Denis.', globalConstants.HOLD_ANIMATION_DURATION_1,   
                        'Deni', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'Den', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'De', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'D', globalConstants.TYPE_ANIMATION_DURATION_1,
                        '', globalConstants.TYPE_ANIMATION_DURATION_1, 
                        'W', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'We', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Web', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webe', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Weben', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webent', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentw', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwi', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwic', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwickl', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwickle', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwickler.', globalConstants.HOLD_ANIMATION_DURATION_2,   
                        'Webentwickle', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwickl', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwick', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwic', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentwi', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webentw', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webent', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Weben', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Webe', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'Web', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'We', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'W', globalConstants.TYPE_ANIMATION_DURATION_2,
                        '', globalConstants.TYPE_ANIMATION_DURATION_2,
                        'D', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'De', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'Den', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'Deni', globalConstants.TYPE_ANIMATION_DURATION_1,
                        'Denis.', globalConstants.HOLD_ANIMATION_DURATION_1,   
                    ]}
                />
            </h1>

            {/* Beschreibungstext mit Gleit-Animation */}
            <p className="description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>       
        </div>
    );
}
 
export default InfoTextContainer;