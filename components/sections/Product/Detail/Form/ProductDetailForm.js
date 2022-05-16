import styles from '../ProductDetail.module.css'
import { useContext, useState } from 'react'

import { CartContext } from '../../../../../context/Cart/CartContext'

import { Button } from "../../../../common/Button"
import { ProductCounter } from './ProductCounter'

export const ProductDetailForm = ({ productDetail }) => {
  const [ counter, setCounter ] = useState(1)

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const handleBuy = e => {
    e.preventDefault()
    addToCart(productDetail, counter)
  }

  return (
    <form>
      <div className={styles.quantity}>
          <h3>Cantidad:</h3>
          <ProductCounter counter={counter} setCounter={setCounter} />
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