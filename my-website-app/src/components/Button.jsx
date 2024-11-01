import './../styles/ProjectCard.css'
import './../styles/Button.css'
import PropTypes from 'prop-types';
// import * as globalConstants from './../globalConstants.js'

const Button = ({buttonID = 'default-button', buttonText = 'Click Me', callBackFcn = undefined}) => {
    return ( 
        <button className='generic-button' id={buttonID} onClick={callBackFcn}>
            {buttonText}
        </button>
     );
}

Button.propTypes = {
    buttonID: PropTypes.string,
    buttonText: PropTypes.string,
    callBackFcn: PropTypes.func,
  };

export default Button;