import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const SanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-05-13',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(SanityClient)

export const urlFor = src => builder.image(src)