import { getStripe } from '../config/Stripe'

export const checkoutProducts = async (cartProducts) => {
  const stripe = await getStripe()
  await fetch('/api/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cartProducts)
  }).then(async res => {
    const data = await res.json()
    stripe.redirectToCheckout({ sessionId: data.id })
  }).catch(error => {
    throw new Error(error)
  })
}