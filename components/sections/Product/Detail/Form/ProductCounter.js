import styles from '../ProductDetail.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { Button } from "../../../../common/Button"

export const ProductCounter = ({ counter, setCounter }) => {

  const handleAddOne = () => setCounter(counter + 1)

  const handleRemoveOne = () => {
    if (counter === 1) setCounter(1)
    else setCounter(counter - 1)
  }

  return (
    <div className={styles.quantityDesc}>
      <Button className={styles.minus} type='button' onClick={handleRemoveOne}> 
        <AiOutlineMinus /> 
      </Button>
      <input className={styles.num} name='counter' value={counter} disabled />
      <Button className={styles.plus} type='button'  onClick={handleAddOne}>
        <AiOutlinePlus />
      </Button>
    </div>
  )
}