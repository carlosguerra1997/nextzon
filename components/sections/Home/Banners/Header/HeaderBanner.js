import styles from './HeaderBanner.module.css'
import Link from 'next/link'

import { urlFor } from '../../../../../config/SanityClient'

import { Banner } from '../../../../common/Banner/Banner'
import { Button } from '../../../../common/Button'
import { Image } from '../../../../common/Image'
import { Text } from '../../../../common/Text'

export const HeaderBanner = ({ product }) => {
  const { name, description, image, saleTime } = product
  return (
    <Banner>
      <Text className={styles.bannerProductName}>{name}</Text>
      <Text className={styles.bannerSaleTime}>{saleTime}</Text>
      <Image 
        className={styles.bannerImage} 
        src={urlFor(image)} 
        alt='Corsair headphones' 
      />
      <div>
        <Link href={`/product/${name}`}>
          <Button className={styles.bannerButton} type='button'>
            Comprar ahora
          </Button>
        </Link>
        <div className={styles.desc}>
          <Text>{description}</Text>
        </div>
      </div>
    </Banner>
  )
}