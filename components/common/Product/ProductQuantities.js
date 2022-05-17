import styles from './Product.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { Button } from '../Button'

export const ProductQuantities = ({ productQuantity, handleAddOne, handleRemoveOne }) => {
  return (
    <div className={styles.quantityDesc}>
      <Button className={styles.minus} type='button' onClick={handleRemoveOne}> 
        <AiOutlineMinus /> 
      </Button>
      <input className={styles.num} name='counter' value={productQuantity} disabled />
      <Button className={styles.plus} type='button'  onClick={handleAddOne}>
        <AiOutlinePlus />
      </Button>
    </div>
  )
}