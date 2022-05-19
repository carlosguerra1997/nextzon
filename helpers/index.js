export const getRandomProducts = (products, currentProduct) => {
  const { slug } = currentProduct
  const mayLikeProducts = products.filter(product => {
    return product.slug.current !== slug.current
  }).sort(() => 0.5 - Math.random()).slice(0, 5)
  return mayLikeProducts
}

export const getProductsByCategory = (products, currentProduct) => {
  const { slug } = currentProduct
  const relatedProducts = products.filter(product => {
    return product.slug.current !== slug.current &&
      product.category === currentProduct.category
  }).sort(() => 0.5 - Math.random()).slice(0, 5)
  return relatedProducts
}