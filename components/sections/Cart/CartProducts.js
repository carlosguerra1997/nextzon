import styles from './Cart.module.css'

import { CartProduct } from './CartProduct'

export const CartProducts = ({ cartProducts }) => {
  return (
    <div className={styles.productContainer}>
      {
        cartProducts.map(product => (
          <CartProduct key={product._id} product={product} />
        ))
      }
    </div>
  )
}