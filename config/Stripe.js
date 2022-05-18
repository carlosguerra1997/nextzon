import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export const getStripe = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  return stripePromise
}