import styles from './Cart.module.css'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'


import { CartContext } from '../../../context/Cart/CartContext'

import { Button } from '../../common/Button'
import { Text } from '../../common/Text'

export const Success = () => {

  const cartContext = useContext(CartContext);
  const { clearCart } = cartContext;

  useEffect(() =>  {
    clearCart()
  }, [])

  return (
    <div className={styles.successWrapper}>
      <div className={styles.success}>
        <div className={styles.successCheckout}>
          <BsBagCheckFill size={75} />
        </div>
        <h2>Gracias por tu compra!</h2>
        <Text>Comprueba tu email para ver el estado del pedido</Text>
        <Link href='/'>
          <Button className={styles.btn}>
            Seguir comprando
          </Button>
        </Link>
      </div>
    </div>
  )
}