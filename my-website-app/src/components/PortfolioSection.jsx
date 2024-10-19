import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './../styles/SectionsGeneric.css'
import './../styles/PortfolioSection.css'

/**
 * The PortfolioSection component renders a section containing a heading
 * and cards with project descriptions. The div-section is animated by using framer motion 
 * to scale up and become more opaque as the user scrolls into view.
 *
 * @returns {JSX.Element} The rendered component.
 */
function PortfolioSection() {
  const motionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: motionRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaledProgress = useTransform(scrollYProgress, [0, 1], [0.33, 1]);

  return (
    <section id='portfolio' className='portfolio-section'>
      <h1 id='portfolio-title'>Meine Projekte</h1>
      <motion.div
        ref={motionRef}
        style={{
          scale: scaledProgress,
          opacity: scaledProgress
        }}
        id='portfolio-motion-div'
        className='portfolio-content-container'
      >
        Welcome to the Project section.
      </motion.div>
    </section>
  );
}

export default PortfolioSection;