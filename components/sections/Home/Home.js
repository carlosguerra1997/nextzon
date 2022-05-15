import styles from './Home.module.css'

import { HeaderBanner } from './Banners/Header/HeaderBanner'

export const Home = ({ bannerProducts, products }) => {
  return (
    <div>
      <HeaderBanner product={bannerProducts[0]} />
      <div className={styles.productsHeading}>
        <h2>Productos más vendidos</h2>
        <p>Cascos</p>
      </div>
      <div className={styles.productsContainer}>
       { products?.map(product => (
         product.name
       ))}
      </div>
    </div>
  )
}