import styles from './Cart.module.css'
import { useContext, useState } from 'react'

import { TiDeleteOutline } from 'react-icons/ti'

import toast from 'react-hot-toast'
import { urlFor } from '../../../config/SanityClient'

import { CartContext } from '../../../context/Cart/CartContext'

import { Button } from '../../common/Button'
import { Image } from '../../common/Image'
import { ProductQuantities } from '../../common/Product/ProductQuantities'

export const CartProduct = ({ product }) => {
  const { image, name, price, quantity } = product
  const [ productQuantity, setProductQuantity ] = useState(quantity)

  const cartContext = useContext(CartContext);
  const { addToCart, deleteFromCart } = cartContext;

  const handleDeleteCartItem = () => {
    deleteFromCart(product)
    toast.success(`${name} eliminado del carrito con éxito`)
  }

  const handleAddOne = () => {
    setProductQuantity(prevValue => prevValue + 1)
    addToCart(product, 1)
  }

  const handleRemoveOne = () => {
    if (productQuantity === 1) setProductQuantity(1)
    else {
      setProductQuantity(prevValue => prevValue - 1)
      addToCart(product, -1)
    }
  }

  return (
    <div className={styles.product}>
      <Image alt={name} className={styles.cartProductImage} src={urlFor(image[0])} />
      <div>
        <div className={styles.productDescription}>
          <h5>{name}</h5>
          <h4>{price}€</h4>
        </div>
        <div className={styles.productActions}>
          <ProductQuantities 
            productQuantity={productQuantity} 
            handleAddOne={handleAddOne}
            handleRemoveOne={handleRemoveOne}
          />
          <Button className={styles.removeItem} onClick={handleDeleteCartItem} type='button'>
            <TiDeleteOutline />
          </Button>
        </div>
      </div>
    </div>
  )
}