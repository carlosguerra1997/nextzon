import { SanityClient } from "../config/SanityClient"

export const getProductDetails = async (slug) => {
  const query = `*[_type=="product" && slug.current == '${slug}'][0]`
  const productDetails = await SanityClient.fetch(query)
  return productDetails
}