import styles from './HeaderBanner.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../../../../../config/SanityClient'

import { Banner } from '../../../../common/Banner/Banner'
import { Button } from '../../../../common/Button'
import { Text } from '../../../../common/Text'

export const HeaderBanner = ({ product }) => {
  const { name, description, image, saleTime } = product
  return (
    <Banner>
      <Text className={styles.bannerProductName}>{name}</Text>
      <Text className={styles.bannerSaleTime}>{saleTime}</Text>
      <img 
        className={styles.bannerImage} 
        src={urlFor(image)} 
        alt='Corsair headphones' 
      />
      <div>
        <Link href={`/product/${name}`} passHref>
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