import styles from './Home.module.css'

import { HeaderBanner } from './Banners/Header/HeaderBanner'
import { Product } from '../Product/Product'

export const Home = ({ bannerProducts, products }) => {
  console.log('Products... ', products)
  return (
    <div>
      <HeaderBanner product={bannerProducts[0]} />
      <div className={styles.productsHeading}>
        <h2>Productos más vendidos</h2>
      </div>
      <div className={styles.productsContainer}>
        { products?.map(product => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  )
}