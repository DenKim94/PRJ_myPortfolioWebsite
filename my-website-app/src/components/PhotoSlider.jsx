import './../styles/SectionsGeneric.css'
import './../styles/StartSection.css'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as globalConstants from './../globalConstants.js'

const PhotoSlider = ({ fullPhotoPath }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fullPhotoPath.length);
        }, globalConstants.DURATION_IMAGE_ANIMATION); // Zeitintervall für den Bildwechsel (3 Sekunden)

        // Cleanup beim Unmounten der Komponente
        return () => clearInterval(intervalId);
    }, [fullPhotoPath.length]);

    return ( 
        <div
        className="image-container"
        style={{
          '--border-color': globalConstants.PHOTO_BORDER_COLOR,
          '--border-width': globalConstants.PHOTO_BORDER_WIDTH,
        }}
      >
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {fullPhotoPath.map((imagePath, index) => (
            <div
                className="slide"
                key={index}
                style={{ backgroundImage: `url(${imagePath})` }}
          />
          ))}
        </div>
      </div>
     );
}

PhotoSlider.propTypes = {
    fullPhotoPath: PropTypes.arrayOf(PropTypes.string),
  };

export default PhotoSlider;