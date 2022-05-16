import styles from './ProductDetail.module.css'

import { ProductDetailForm } from './Form/ProductDetailForm'
import { Text } from '../../../common/Text'

export const ProductDescription = ({ productDetail }) => {
  const { details, name, price } = productDetail 

  return (
    <div className={styles.productDetailsDesc}>
      <h1>{name}</h1>
      <h4>Detalles del producto:</h4>
      <Text>{details}</Text>
      <Text className={styles.price}>{price}€</Text>
      <ProductDetailForm />
    </div>
  )
}