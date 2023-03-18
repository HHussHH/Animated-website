import styles from "../style/header.module.scss";
import { IoLogoAppleAr } from "react-icons/io5";
const Header = () => {
  return (
    <div className={styles.bg}>
      <IoLogoAppleAr color="white" size={40} />
      <button className={styles.btn}>Sign up for free</button>
    </div>
  );
};

export default Header;
