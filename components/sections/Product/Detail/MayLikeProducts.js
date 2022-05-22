import styles from './ProductDetail.module.css'
import { useEffect, useState } from 'react'

import { Product } from '../Product'
import { getRandomProducts } from '../../../../helpers/index'


export const MayLikeProducts = ({ products, currentProduct }) => {
  const [ mayLikeProducts, setMayLikeProducts ] = useState([])

  useEffect(() => {
    setMayLikeProducts(getRandomProducts(products, currentProduct))
  }, [ currentProduct ])
  
  return (
    <div className={styles.maylikeProductsWrapper}>
      <h2>Productos que también puedan interesarte</h2>
      <div className={styles.maylikeProductsContainer}>
        {
          mayLikeProducts.map(product => {
            return <Product key={product._id} {...product} />
          })
        }
      </div>
    </div>
  )
}