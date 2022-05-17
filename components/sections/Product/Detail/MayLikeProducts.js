import styles from './ProductDetail.module.css'

import { Product } from '../Product'

export const MayLikeProducts = ({ products, currentProduct }) => {
  return (
    <div className={styles.maylikeProductsWrapper}>
      <h2>Productos que también puedan interesarte</h2>
      <div className={styles.maylikeProductsContainer}>
        {
          products.map(product => {
            if (product.slug.current !== currentProduct) {
              return <Product key={product._id} {...product} />
            }
          })
        }
      </div>
    </div>
  )
}