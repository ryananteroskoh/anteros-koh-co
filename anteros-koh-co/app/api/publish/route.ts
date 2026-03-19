import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { title, excerpt, body, category } = await req.json()
  
  const doc = {
    _type: 'article',
    title,
    excerpt,
    body,
    category,
    publishedAt: new Date().toISOString(),
    slug: { _type: 'slug', current: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') }
  }

  const res = await fetch(`https://eompj9xy.api.sanity.io/v2024-01-01/data/mutate/production`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SANITY_API_TOKEN}`
    },
    body: JSON.stringify({ mutations: [{ create: doc }] })
  })

  if (res.ok) return NextResponse.json({ success: true })
  return NextResponse.json({ error: 'Failed' }, { status: 500 })
}
