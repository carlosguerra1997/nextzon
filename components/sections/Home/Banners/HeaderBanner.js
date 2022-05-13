import styles from './Banners.module.css'
import Link from 'next/link'

import { Banner } from '../../../common/Banner/Banner'
import { Button } from '../../../common/Button'

export const HeaderBanner = () => {
  return (
    <Banner>
      <p className={styles.bannerProductName}>
        Hola
      </p>
      <h3 className={styles.bannerProductSubname}>Hola</h3>
      <img className={styles.bannerImage} src={''} alt='Headphones' />
      <div>
        <Link href='/product/ID' passHref>
          <Button type='button'>Text</Button>
        </Link>
        <div className={styles.desc}>
          <h5>Description</h5>
          <p>Description</p>
        </div>
      </div>
    </Banner>
  )
}