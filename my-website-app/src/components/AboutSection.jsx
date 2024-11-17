import './../styles/AboutSection.css'
import './TabsContainer.jsx'
import * as globalConstants from './../globalConstants.js'
import TabsContainer from './TabsContainer.jsx';


function AboutSection() {
    return ( 
        <section className='about-section'>
            <h1 id ='about-title'> Über mich </h1>
            <TabsContainer />
        </section>
        );
}

export default AboutSection;