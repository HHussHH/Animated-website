import styles from "../style/intro.module.scss";
import { RiMastercardFill } from "react-icons/ri";
import { IoLogoVenmo } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { TbGridDots } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";

import { motion, Variants } from "framer-motion";

const Intro = () => {
  const textAnimation: Variants = {
    hidden: {
      y: 300,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom,
        duration: 1,
      },
    }),
  };

  const buttomAnimate: Variants = {
    hidden: (custom: number) => ({
      y: 100,
      x: custom,
      opacity: 0,
    }),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  const iconsAnimate: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      viewport={{ amount: 0.4, once: true }}
      whileInView="visible"
      className={styles.bg}
    >
      <motion.h1 variants={textAnimation} custom={0} className={styles.title}>
        Analytics for <br />
        <span>developers</span>
      </motion.h1>
      <motion.h2
        variants={textAnimation}
        custom={0.5}
        className={styles.subtitle}
      >
        Easy to install. Unlimited power.
      </motion.h2>
      <div className={styles.btnGroup}>
        <motion.button
          variants={buttomAnimate}
          custom={-100}
          className={styles.btn}
        >
          Get started
        </motion.button>
        <motion.button
          variants={buttomAnimate}
          custom={100}
          className={styles.btn}
        >
          Book Demo
        </motion.button>
      </div>
      <div className={styles.partners}>
        <motion.p
          variants={textAnimation}
          custom={0.4}
          className={styles.partnersTitle}
        >
          TRUSTED BY
        </motion.p>
        <motion.div
          initial="hidden"
          viewport={{ amount: 0.4, once: true }}
          whileInView="visible"
          variants={iconsAnimate}
          custom={0}
          className={styles.icons}
        >
          <FaTelegram size={60} />
          <TbGridDots color="white" size={60} />
          <ImGithub size={60} />
          <RiMastercardFill size={60} />
          <IoLogoVenmo size={60} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
