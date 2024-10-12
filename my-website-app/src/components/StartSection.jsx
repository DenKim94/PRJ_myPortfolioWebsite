import './../styles/Sections.css'
import './InfoTextContainer.jsx'
import InfoTextContainer from './InfoTextContainer.jsx';

function StartSection() {
    return ( 
        <section id='start'className='start-section'>
            <h1>Start</h1>
            <div className='start-content-container'>
                <InfoTextContainer />
                <div className='image-container'>
                    <p>Some photos here.</p>
                </div>
            </div>
        </section>
        );
}

export default StartSection;