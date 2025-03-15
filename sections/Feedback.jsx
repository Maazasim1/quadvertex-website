'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tweeen', 0.2, 1)}
        className="flex-[0.6] lg:max-[370px] flex justify-end lg:justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Maaz</h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Co-Founder of QUADVERTEX</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[45px] leading-[39px] text-white">
          “At Quadvertex, we see technology as more than just code—it’s the foundation of future innovation. Inspired by the vastness of space, we believe that every challenge is an opportunity to explore, discover, and build something extraordinary.

          From AI-driven solutions to secure and scalable architectures, our goal is to push boundaries and help businesses navigate the ever-expanding digital universe. Whether you're a startup or an enterprise, we are here to turn your vision into reality with precision, creativity, and cutting-edge technology.

          The journey has just begun, and we’re excited to explore the future—together.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-[0.4] flex justify-center item-center"
      >
        <img src="/planet-09.png" alt="planet" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp" className="md:w-[170px] w-[115px]  md:h-[170px] h-[115px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
