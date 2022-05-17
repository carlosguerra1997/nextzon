import styles from '../ProductDetail.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { Button } from "../../../../common/Button"

export const ProductCounter = ({ productQuantity, setProductQuantity }) => {

  const handleAddOne = () => setProductQuantity(prevValue => prevValue + 1)

  const handleRemoveOne = () => {
    if (productQuantity === 1) setProductQuantity(1)
    else setProductQuantity(prevValue => prevValue - 1)
  }

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