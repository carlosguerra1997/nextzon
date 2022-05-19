import styles from './HeaderBanner.module.css'
import Link from 'next/link'

import { urlFor } from '../../../../../config/SanityClient'

import { Banner } from '../../../../common/Banner/Banner'
import { Button } from '../../../../common/Button'
import { Image } from '../../../../common/Image'
import { Text } from '../../../../common/Text'

export const HeaderBanner = ({ product }) => {
  const { name, description, image, saleTime, slug } = product
  return (
    <Banner className={styles.bannerContainer}>
      <Text className={styles.bannerProductName}>{name}</Text>
      <Text className={styles.bannerSaleTime}>{saleTime}</Text>
      <Image 
        className={styles.bannerImage} 
        src={urlFor(image)} 
        alt='Corsair headphones' 
      />
      <div>
        <Link href={`/product/${slug.current}`}>
          <a>
            <Button className={styles.bannerButton} type='button'>
              Comprar ahora
            </Button>
          </a>
        </Link>
        <div className={styles.desc}>
          <Text>{description}</Text>
        </div>
      </div>
    </Banner>
  )
}