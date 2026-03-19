import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'eompj9xy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export const articleQuery = `*[_type == "article"] | order(publishedAt desc) {
  _id, title, slug, category, publishedAt, excerpt
}`

export const videoQuery = `*[_type == "video"] | order(_createdAt desc) {
  _id, title, youtubeUrl, category, description
}`

export const streamQuery = `*[_type == "stream"] | order(publishedAt desc) {
  _id, thought, publishedAt
}`
