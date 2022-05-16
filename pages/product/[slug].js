import { getProducts } from '../../queries/getProducts'
import { getProductDetails } from '../../queries/getProductDetails'
import { getProductsSlug } from '../../queries/getProductsSlug'

import { ProductDetail } from '../../components/sections/Product/Detail/ProductDetail'

const ProductDetails = ({ products, productDetail }) => {
  return (
    <ProductDetail products={products} productDetail={productDetail} />
  )
}

export const getStaticPaths = async () => {
  const products = await getProductsSlug()
  const paths = products.map(product => ({
    params: {
      slug: product.slug.current
    }
  }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const products = await getProducts()
  const productDetail = await getProductDetails(slug)
  
  return {
    props: {
      products, productDetail
    }
  }
}

export default ProductDetails