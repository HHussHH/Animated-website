import styles from "../style/intro.module.scss";
import { RiMastercardFill } from "react-icons/ri";
import { IoLogoVenmo } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { TbGridDots } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";

import { motion } from "framer-motion";

interface IAnimate {
  y: number[];
  scale: number[];
}

interface Itransform {
  duration?: number;
}
const animate: IAnimate = {
  y: [200, 0],
  scale: [0, 1],
};
const transition: Itransform = {
  duration: 1,
};

const Intro = () => {
  return (
    <div className={styles.bg}>
      <motion.h1
        animate={animate}
        transition={transition}
        className={styles.title}
      >
        Analytics for <br />
        <span>developers</span>
      </motion.h1>
      <motion.h2
        animate={animate}
        transition={transition}
        className={styles.subtitle}
      >
        Easy to install. Unlimited power.
      </motion.h2>
      <div className={styles.btnGroup}>
        <motion.button
          className={styles.btn}
          animate={{
            y: [70, 0],
            x: [-70, 0],
            scale: [0, 1],
          }}
          transition={transition}
        >
          Get started
        </motion.button>
        <motion.button
          className={styles.btn}
          animate={{
            y: [70, 0],
            x: [70, 0],
            scale: [0, 1],
          }}
          transition={transition}
        >
          Book Demo
        </motion.button>
      </div>
      <div className={styles.partners}>
        <motion.p
          className={styles.partnersTitle}
          animate={{
            y: [100, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 1 }}
        >
          TRUSTED BY
        </motion.p>
        <motion.div
          className={styles.icons}
          animate={{
            y: [50, 0],
            x: [20, 0],
            scale: [0.1, 1],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          <FaTelegram size={60} />
          <TbGridDots color="white" size={60} />
          <ImGithub size={60} />
          <RiMastercardFill size={60} />
          <IoLogoVenmo size={60} />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
