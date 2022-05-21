import { useState } from 'react'
import styles from './ProductDetail.module.css'
import { urlFor } from '../../../../config/SanityClient'

import { Image } from '../../../common/Image'
import { MayLikeProducts } from './MayLikeProducts'
import { ProductDescription } from './ProductDescription'
import { RelatedProducts } from './RelatedProducts'

export const ProductDetail = ({ products, productDetail }) => {
  const { image, name, slug } = productDetail
  const [ index, setIndex ] = useState(0)

  return (
    <div>
      <div className={styles.productDetailContainer}>
        <div>
          <Image alt={name} className={styles.productDetailImage} src={urlFor(image[index])} />
          <div className={styles.smallImagesContainer}>
            {
              image.map((img, i) => (
                <Image 
                  alt='Product photo'
                  className={i === index && styles.smallImage}
                  height={75}
                  key={img._key}
                  onMouseEnter={() => setIndex(i)}
                  src={urlFor(img)}
                  width={75}
                />
              ))
            }
          </div>
        </div>
        <ProductDescription productDetail={productDetail} />
      </div>
      <MayLikeProducts products={products} currentProduct={productDetail} />
      <RelatedProducts products={products} currentProduct={productDetail} />
    </div>
  )
}