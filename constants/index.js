export const methodRequests = {
  post: 'POST'
}

const stripeShippingOptions = [
  { shipping_rate: 'shr_1L0nYLGBaXfU92LMlcuhokoJ' },
  { shipping_rate: 'shr_1L0mVgGBaXfU92LMjAkWZNhe' }
]

export const stripeCheckoutParams = {
  submit_type: 'pay',
  mode: 'payment',
  payment_method_types: ['card'],
  billing_address_collection: 'auto',
  shipping_options: stripeShippingOptions
}

export const sanity = {
  url: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`,
}