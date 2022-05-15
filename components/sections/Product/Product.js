import styles from './Product.module.css'
import Link from 'next/link'

import { Image } from '../../common/Image'
import { urlFor } from '../../../config/SanityClient'

export const Product = ({ image, name, slug, price }) => {
  console.log('Image... ', image)
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={styles.productCard}>
          <Image 
            alt={name} 
            className={styles.productImage}
            height={250}
            src={urlFor(image[0])}
            width={250}
          />
          <p className={styles.productName}>{name}</p>
          <p className={styles.productPrice}>{price}€</p>
        </div>
      </Link>
    </div>
  )
}