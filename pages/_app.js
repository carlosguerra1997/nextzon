import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

import { Layout } from '../components/common/Layout/Layout'
import { CartState } from '../context/Cart/CartState'

function MyApp({ Component, pageProps }) {
  return (
    <CartState>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </CartState>
  )
}

export default MyApp
