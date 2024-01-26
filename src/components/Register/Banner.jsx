import React from "react"
import styles from "./Banner.module.css"
import BackgroundImage from "../../assets/images/page1_bg.png"
const Banner = () => {
  return (
    <>
      <div className={styles.bottom}>
        <p>Discover new things on SuperApp</p>
      </div>
      <img src={BackgroundImage} alt="img" />
    </>
  )
}

export default Banner
