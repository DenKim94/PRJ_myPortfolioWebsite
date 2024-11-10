import * as globalConstants from './../globalConstants.js'
import './../styles/CardInfos.css'
import { useSharedContext } from './../context/sharedStates';
import Button from './Button.jsx'
import { motion } from 'framer-motion';


const slideAnimation = {
    hidden: { y: '-100%', opacity: 0 },  // Start außerhalb des Bildschirms auf der linken Seite
    visible: { y: 0, opacity: 1 },       // In die Sicht schieben
    exit: { y: '-100%', opacity: 0 }     // Beim Schließen nach links herausgleiten
  };

const CardInfos = () => {
    const { visibleCardInfo, setVisibleCardInfo } = useSharedContext();
    const projInfo = globalConstants.PROJECT_CARDS_DATA[visibleCardInfo?.cardIndex];

    return ( 
        <motion.div className='card-infos-container'
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideAnimation}
            transition={{ duration: 0.5 }}  // Dauer der Animation (kann angepasst werden)
        >
            <h2 id='info-project-name'>{projInfo?.projectName}</h2>
            <div className='info-project-content'>
                <ul id='info-project-description'>
                    {projInfo?.projectDescription.map((item, index) => (
                    <li key={index} style={{ whiteSpace: 'pre-line' }}>
                       <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                    </li>
                    ))}
                </ul> 
                
            {projInfo?.projectDemo ? (   
                <video className = 'info-project-demo' width="90%" height="auto" controls controlsList="nodownload">
                    <source src={projInfo.projectDemo} type="video/mp4"/>
                    Ihr Browser unterstützt das Video-Tag nicht.
                </video>
            ): null}

            </div>
            <Button
                buttonID={`close-button-${projInfo?.projectName}`}
                buttonText={"Schließen"}
                callBackFcn={() => setVisibleCardInfo({isVisible: false})}
            />
        </motion.div>
     );
}


export default CardInfos;