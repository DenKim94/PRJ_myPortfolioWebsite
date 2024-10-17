import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './../styles/SectionsGeneric.css'
import './../styles/PortfolioSection.css'

function PortfolioSection() {
  const motionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: motionRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaledProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section id='portfolio' className='portfolio-section'>
      <h1>Meine Projekte</h1>
      <motion.p
        ref={motionRef}
        style={{
          scale: scaledProgress,
          opacity: scrollYProgress
        }}
      >
        Welcome to the Project section.
      </motion.p>
    </section>
  );
}

export default PortfolioSection;