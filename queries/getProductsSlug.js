import { SanityClient } from "../config/SanityClient"

export const getProductsSlug = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`
  const products = await SanityClient.fetch(query)
  return products
}