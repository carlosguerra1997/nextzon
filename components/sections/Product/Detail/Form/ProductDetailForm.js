import styles from '../ProductDetail.module.css'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'

import { CartContext } from '../../../../../context/Cart/CartContext'

import { Button } from "../../../../common/Button"
import { ProductQuantities } from '../../../../common/Product/ProductQuantities'

export const ProductDetailForm = ({ productDetail }) => {
  const [ productQuantity, setProductQuantity ] = useState(1)

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const handleBuy = e => {
    e.preventDefault()
    addToCart(productDetail, productQuantity)
    setProductQuantity(1)
    toast.success(`Producto añadido al carrito`)
  }

  const handleAddOne = () => setProductQuantity(prevValue => prevValue + 1)

  const handleRemoveOne = () => {
    if (productQuantity === 1) setProductQuantity(1)
    else setProductQuantity(prevValue => prevValue - 1)
  }

  return (
    <form>
      <div className={styles.quantity}>
          <h3>Cantidad:</h3>
          <ProductQuantities 
            productQuantity={productQuantity}
            handleAddOne={handleAddOne} 
            handleRemoveOne={handleRemoveOne}
          />
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