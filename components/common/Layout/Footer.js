import styles from './index.module.css'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>2022 NextZon All rights reserved</p>
      <p className={styles.icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}