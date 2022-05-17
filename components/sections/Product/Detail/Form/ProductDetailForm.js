import styles from '../ProductDetail.module.css'
import { useContext, useState } from 'react'

import { CartContext } from '../../../../../context/Cart/CartContext'

import { Button } from "../../../../common/Button"
import { ProductCounter } from './ProductCounter'

export const ProductDetailForm = ({ productDetail }) => {
  const [ productQuantity, setProductQuantity ] = useState(1)

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const handleBuy = e => {
    e.preventDefault()
    addToCart(productDetail, productQuantity)
    setProductQuantity(1)
  }

  return (
    <form>
      <div className={styles.quantity}>
          <h3>Cantidad:</h3>
          <ProductCounter productQuantity={productQuantity} setProductQuantity={setProductQuantity} />
        </div>
        <div className={styles.buttons}>
          <Button className={styles.addToCart} type='submit' onClick={handleBuy}>
            Añadir al carrito
          </Button>
          <Button className={styles.buyNow} type='submit' onClick={handleBuy}>
            Comprar ahora
          </Button>
        </div>
    </form>
  )
}