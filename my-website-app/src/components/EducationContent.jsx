import './../styles/TabContent.css';
import * as globalConstants from './../globalConstants.js';

const EducationContent = () => {
    return ( 
        <div className='job-content'>
            {globalConstants.EDUCATION_CONTENT.map((obj, obj_index) => (
                <div className='job-list' key={obj_index}>
                    <h5 id='job-time-period'>{obj.timePeriod}</h5>
                    <div className='job-items'>
                        <h4 id='job-title'>{obj.description}</h4>
                        <p id='job-location'>{obj.institution}</p>
                        <ul className='job-duties'>
                            {obj.duties.map((duty, duty_index) => (
                                <li key={duty_index}>{duty}</li>
                            ))}
                        </ul>
                    </div>                
                </div>
            ))}
        </div> 
     );
}
 
export default EducationContent;