import './../styles/SectionsGeneric.css'
import './../styles/StartSection.css'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as globalConstants from './../globalConstants.js'

    /**
     * Component for the photo slider on the start page.
     * 
     * @param {array<string>} fullPhotoPath Array of paths to the images to be displayed.
     * The images are displayed in order, and the component will cycle through
     * the array when it reaches the end.
     * 
     * @returns A JSX element which is a div with the class 'image-container',
     * containing a div with the class 'slider' which contains a div with the class 'slide'
     * for each image in the array. The 'slide' divs are positioned side by side
     * and have their background image set to the corresponding image in the array.
     * The 'slider' div is translated to the left by the width of the current image
     * (which is determined by the 'currentIndex' state variable) to create the
     * animation effect.
     */
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