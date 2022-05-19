import styles from './Cart.module.css'
import { useContext, useRef } from 'react'
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'

import { CartContext } from '../../../context/Cart/CartContext'
import { checkoutProducts } from '../../../queries/checkoutProducts'

import { Button } from '../../common/Button'
import { CartProducts } from './CartProducts'

export const Cart = ({ setShowCart }) => {
  const cartRef = useRef()

  const cartContext = useContext(CartContext);
  const { cartProducts, totalPrice, totalQuantities } = cartContext;

  const handleShowCart = () =>  {
    setShowCart(prevState => !prevState)
  }

  const handleCheckout = async () => {
    await checkoutProducts(cartProducts)
  }

  return (
    <div className={styles.cartWrapper} ref={cartRef}>
      <div className={styles.cartContainer}>
        <Button className={styles.cartHeading} type='button' onClick={handleShowCart}>
          <AiOutlineLeft />
          <span className={styles.heading}>Carrito de compra</span>
          <p className={styles.cartTotalItems}>({totalQuantities} productos)</p>
        </Button>
        {
          !cartProducts.length ? (
            <div className={styles.emptyCart}>
              <AiOutlineShopping size={125} />
              <h3>Tu carrito de compra está vacío</h3>
            </div>
          ) : (
            <div>
              <CartProducts cartProducts={cartProducts} />
              <div className={styles.cartBottom}>
                <h3>Subtotal:</h3>
                <h3>{totalPrice}€</h3>
              </div>
              <div className={styles.btnContainer}>
                <Button className={styles.btn} onClick={handleCheckout}>Realizar Pedido</Button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}