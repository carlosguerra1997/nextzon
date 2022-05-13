import { SanityClient } from "../config/SanityClient"

export const getProducts = async () => {
  const query = '*[_type=="product"]'
  const products = await SanityClient.fetch(query)
  return products
}