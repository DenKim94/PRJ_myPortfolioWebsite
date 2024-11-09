import './../styles/ProjectCard.css'
import './../styles/Button.css'
import PropTypes from 'prop-types';

const Button = ({buttonID = 'default-button', buttonText = 'Click Me', callBackFcn}) => {
    return ( 
        <button className='generic-button' id={buttonID} onClick={callBackFcn}>
            {buttonText}
        </button>
     );
}

Button.propTypes = {
    buttonID: PropTypes.string,
    buttonText: PropTypes.string,
    callBackFcn: PropTypes.func.isRequired,
  };

export default Button;