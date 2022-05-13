import styles from '../styles/index.module.css'

const products = ['Product 1', 'Product 2']

export default function Home() {
  return (
    <>
      <div className={styles.productsHeading}>
        <h2>Productos más vendidos</h2>
        <p>Cascos</p>
      </div>
      <div className={styles.productsContainer}>
       { products.map(product => (
         product
       ))}
      </div>
    </>
  )
}
