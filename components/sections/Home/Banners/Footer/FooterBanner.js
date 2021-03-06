import styles from './FooterBanner.module.css'
import Link from 'next/link'

import { Banner } from '../../../../common/Banner/Banner'
import { Button } from '../../../../common/Button'
import { Image } from '../../../../common/Image'
import { urlFor } from '../../../../../config/SanityClient'

export const FooterBanner = ({ product }) => {
  const { description, image, name, slug } = product

  return (
    <Banner className={styles.bannerContainer}>
      <div className={styles.bannerDescription}>
        <div className={styles.left}>
          <h3>{name}</h3>
          <p>{description}</p>
          <Link href={`/product/${slug.current}`}>
            <a>
              <Button className={styles.bannerButton} type='submit'>
                Comprar ahora
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <Image 
        alt={name} 
        className={styles.bannerImage}
        height={500}
        src={urlFor(image)} 
        width={500}
      />
    </Banner>
  )
}