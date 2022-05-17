import styles from './index.module.css'
import { useContext, useState } from 'react'
import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai'
import { CartContext } from '../../../context/Cart/CartContext'

import { Button } from '../Button'
import { Cart } from '../../sections/Cart/Cart'

export const Navbar = () => {
  const [ showCart, setShowCart ] = useState(false)

  const cartContext = useContext(CartContext);
  const { totalQuantities } = cartContext;

  return (
    <div className={styles.navbarContainer}>
      <p className={styles.logo}>
        <Link href='/'>NextZon</Link>
      </p>
      <Button 
        className={styles.cartIcon} 
        type='button' 
        onClick={() => setShowCart(prevState => !prevState)}
      >
        <AiOutlineShopping size={35} />
        <span className={styles.cartItems}>{totalQuantities}</span>
      </Button>
      { showCart && <Cart setShowCart={setShowCart} /> }
    </div>
  )
}