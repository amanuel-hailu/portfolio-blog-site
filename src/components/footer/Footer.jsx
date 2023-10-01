import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Amanuel. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="facebook"
        />
        <Image
          src="/youtube.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="youtube"
        />
        <Image
          src="/instagram.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="instagram"
        />
        <Image
          src="/twitter.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="twitter"
        />
      </div>
    </div>
  );
};

export default Footer;
