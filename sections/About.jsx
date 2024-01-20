'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Founder" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hi, I'm Sameed Irfan,</span> —a versatile professional in{' '} <span className="font-extrabold text-white"> Data Science, Django Backend Development, and Flask.</span> With expertise in data analysis and visualization, I transform complex data into meaningful insights. My skills extend to frontend development using {' '}<span className="font-extrabold text-white">
        React.js, HTML, and CSS.</span>{' '}<span className="font-extrabold text-white">Proficient in C++, Java, and C,</span>{' '} I leverage my strong foundation in Object-Oriented Programming to create robust solutions. I've undergone practical training in Computer Networking with <span className="font-extrabold text-white">Cisco</span> and successfully completed the {' '}<span className="font-extrabold text-white">HCL Project Sunshine in DevOps.</span>Passionate about continuous learning, I stay updated with the latest technologies to deliver innovative and impactful solutions. Let's connect and bring your ideas to life!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;