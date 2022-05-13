import { SanityClient } from "../config/SanityClient"

export const getBannerProduct = async () => {
  const query = '*[_type=="banner"]'
  const bannerProducts = await SanityClient.fetch(query)
  return bannerProducts
}