import styles from './index.module.css'
import Head from "next/head"

import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>NextZon</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.mainContainer}>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}