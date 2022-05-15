import styles from './Home.module.css'

import { HeaderBanner } from './Banners/Header/HeaderBanner'
import { FooterBanner } from './Banners/Footer/FooterBanner'
import { Product } from '../Product/Product'

export const Home = ({ bannerProducts, products }) => {
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
      <FooterBanner product={bannerProducts[1]} />
    </div>
  )
}