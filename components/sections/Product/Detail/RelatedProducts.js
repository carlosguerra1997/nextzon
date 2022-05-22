import styles from './ProductDetail.module.css'
import { useEffect, useState } from 'react'

import { Product } from '../Product'
import { getProductsByCategory } from '../../../../helpers/index'


export const RelatedProducts = ({ products, currentProduct }) => {
  const [ relatedProducts, setRelatedProducts ] = useState([])

  useEffect(() => {
    setRelatedProducts(getProductsByCategory(products, currentProduct))
  }, [ currentProduct ])
  
  return (
    <div className={styles.relatedProductsWrapper}>
      <h2>Productos relacionados</h2>
      <div className={styles.maylikeProductsContainer}>
        {
          relatedProducts.map(product => {
            return <Product key={product._id} {...product} />
          })
        }
      </div>
    </div>
  )
}