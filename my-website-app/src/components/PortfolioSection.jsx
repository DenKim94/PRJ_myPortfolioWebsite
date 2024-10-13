import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './../styles/SectionsGeneric.css'
import './../styles/PortfolioSection.css'

function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      initial={{ y: '100%' }}
      animate={isInView ? { y: 0 } : { y: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id='portfolio'
      className='portfolio-section'
    >
      <h1>Meine Projekte</h1>
      <p>Welcome to the Project section.</p>
    </motion.section>
  );
}

export default PortfolioSection;