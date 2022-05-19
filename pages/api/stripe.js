import { stripe } from '../../config/Stripe'

import { methodRequests } from "../../constants"
import { sanity } from '../../constants'
import { stripeCheckoutParams } from '../../constants'

export default async function handler (req, res) {
  const { method } = req
  const params = getStripeParams(req)
  try {
    if (method === methodRequests.post) {
      const session = await stripe.checkout.sessions.create(params)
      res.status(200).json(session)
    }
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

const getStripeParams = (req) => {
  const { headers, body } = req

  const lineItems = body.map(product => {
    const img = product.image[0].asset._ref
    const newImage = img.replace('image-', sanity.url).replace('-webp', '.webp')

    return {
      price_data: {
        currency: 'eur',
        product_data: {
          name: product.name,
          images: [newImage]
        },
        unit_amount: product.price * 100
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1
      },
      quantity: product.quantity
    }
  })

  return {
    submit_type: stripeCheckoutParams.submit_type,
    mode: stripeCheckoutParams.mode,
    payment_method_types: stripeCheckoutParams.payment_method_types,
    billing_address_collection: stripeCheckoutParams.billing_address_collection,
    shipping_options: stripeCheckoutParams.shipping_options,
    line_items: lineItems,
    success_url: `${headers.origin}/success`,
    cancel_url: `${headers.origin}/canceled`
  }
}

