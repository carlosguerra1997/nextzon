import styles from './Home.module.css'

import { HeaderBanner } from './Banners/HeaderBanner'

const products = ['Product 1', 'Product 2']

export const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <div className={styles.productsHeading}>
        <h2>Productos más vendidos</h2>
        <p>Cascos</p>
      </div>
      <div className={styles.productsContainer}>
       { products.map(product => (
         product
       ))}
      </div>
    </div>
  )
}