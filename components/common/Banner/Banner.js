import styles from './Banner.module.css'

export const Banner = ({ children }) => {
  return (
    <div className={styles.bannerContainer}>
      <div>
        { children }
      </div>
    </div>
  )
}