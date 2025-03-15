'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Launch Your Project with Us!" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Ready to explore new digital horizons? Let’s build the future—together!
          </>
        )}
        textStyles="text-center"
      />

    </motion.div>
  </section>
);

export default World;
