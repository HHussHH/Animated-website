import styles from "../style/aboutData.module.scss";
import { motion, Variants } from "framer-motion";

const AboutData = () => {
  const textAnimate: Variants = {
    hidden: {
      opacity: 0,
      y: 200,
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
  return (
    <>
      <motion.div
        initial="hidden"
        viewport={{ amount: 0.5, once: true }}
        whileInView="visible"
        className={styles.about}
        style={{ overflow: "hidden" }}
      >
        <motion.h2 variants={textAnimate} custom={0} className={styles.title}>
          Empower your team <br />
          with good data
        </motion.h2>

        <motion.p
          variants={textAnimate}
          custom={0.5}
          className={styles.subtitle}
        >
          We collect events from your web & mobile apps and provide a complete
          data toolkit for every team in your company.
        </motion.p>
      </motion.div>

      <div className={styles.statistic}>
        <div className={styles.statistic_block}>
          <div className={styles.block_element}></div>
          <div className={styles.block_element}></div>
          <div className={styles.block_element}></div>
          <div className={styles.block_element}></div>
          <div className={styles.block_element}></div>
        </div>
        <div className={styles.second}></div>
      </div>
    </>
  );
};

export default AboutData;
