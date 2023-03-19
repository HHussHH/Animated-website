import styles from "../style/panel.module.scss";
import GraphIcon from "../img/Graph.svg";
import { motion, Variants } from "framer-motion";

type ICrads = {
  title: string;
  price: string;
  progress: number;
};

const cards: ICrads[] = [
  {
    title: "Users",
    price: "36K",
    progress: 5,
  },
  {
    title: "Revenue",
    price: "$21K",
    progress: 24,
  },
  {
    title: "Conversion",
    price: "0.1%",
    progress: 1,
  },
  {
    title: "Sessions",
    price: "36K",
    progress: -3,
  },
  {
    title: "Ad Clicks",
    price: "4K",
    progress: 4,
  },
];

const Panel = () => {
  const panelAnimate: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      viewport={{ amount: 0.5, once: true }}
      whileInView="visible"
      variants={panelAnimate}
      className={styles.panelAnimante}
    >
      <div className={styles.panelBlock}>
        <div className={styles.panel}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />

          <img src={GraphIcon} className={styles.graph} />

          <div className={styles.number}>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
          </div>
          <div className={styles.cards}>
            {cards.map(({ title, price, progress }, index) => (
              <div className={styles.card} key={index}>
                <h3 className={styles.card_title}>{title}</h3>
                <p className={styles.card_price}>{price}</p>
                <p
                  className={styles.card_progress}
                  style={{ color: progress < 1 ? "#ff0000" : "#3bedc3" }}
                >
                  {progress}K
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.categories}>
          <span className={styles.category} style={{ color: "#7855ff" }}>
            Dashboard
          </span>
          <span className={styles.category}>Graphs</span>
          <span className={styles.category}>Reports</span>
          <span className={styles.category}>Real-time</span>
          <span className={styles.category}>Collaboration</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Panel;
