import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div>About Page</div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </>
  );
};

export default About;
