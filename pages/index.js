import { getBannerProduct } from '../queries/getBannerProduct'
import { getProducts } from '../queries/getProducts'

import { Home } from "../components/sections/Home/Home"

export default function Page({ bannerProducts, products }) {
  return <Home
    bannerProducts={bannerProducts}
    products={products}
  /> 
}

export const getServerSideProps = async () => {
  const products = await getProducts()
  const bannerProducts = await getBannerProduct()

  return {
    props: { bannerProducts, products }
  }
}