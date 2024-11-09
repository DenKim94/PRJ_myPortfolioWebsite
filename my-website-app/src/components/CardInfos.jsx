import * as globalConstants from './../globalConstants.js'
import './../styles/CardInfos.css'
import { useSharedContext } from './../context/sharedStates';
import Button from './Button.jsx'


const CardInfos = () => {
    const { visibleCardInfo, setVisibleCardInfo } = useSharedContext();
    const projInfo = globalConstants.PROJECT_CARDS_DATA[visibleCardInfo?.cardIndex];

    return ( 
        <div className='card-infos-container'>
            <h2 id='info-project-name'>{projInfo?.projectName}</h2>
            <div className='info-project-description'>
                <ul>
                    {projInfo?.projectDescription.map((item, index) => (
                    <li key={index} style={{ whiteSpace: 'pre-line' }}>
                       <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                    </li>
                    ))}
                </ul> 
            </div>
            <Button
                buttonID={`close-button-${projInfo?.projectName}`}
                buttonText={"Schließen"}
                callBackFcn={() => setVisibleCardInfo({isVisible: false})}
            />
        </div>
     );
}


export default CardInfos;