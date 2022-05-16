import styles from './index.module.css'
import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai'

import { Button } from '../Button'

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <p className={styles.logo}>
        <Link href='/'>NextZon</Link>
      </p>
      <Button className={styles.cartIcon} type='button' onClick=''>
        <AiOutlineShopping />
        <span className={styles.cartItems}>0</span>
      </Button>
    </div>
  )
}