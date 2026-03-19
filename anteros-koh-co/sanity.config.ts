import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'anteros-koh-co',
  title: 'Anteros Koh Co.',
  projectId: 'eompj9xy',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'article',
        title: 'Article',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
          { name: 'category', title: 'Category', type: 'string',
            options: { list: [
              { title: 'Inner Work', value: 'inner-work' },
              { title: 'Body & Practice', value: 'body-practice' },
              { title: 'The World', value: 'the-world' },
              { title: 'The Stream', value: 'stream' },
            ]}
          },
          { name: 'publishedAt', title: 'Published At', type: 'datetime' },
          { name: 'body', title: 'Body', type: 'text' },
          { name: 'excerpt', title: 'Excerpt', type: 'text' },
        ]
      },
      {
        name: 'video',
        title: 'Video',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'youtubeUrl', title: 'YouTube URL', type: 'url' },
          { name: 'category', title: 'Category', type: 'string',
            options: { list: [
              { title: 'Inner Work', value: 'inner-work' },
              { title: 'Body & Practice', value: 'body-practice' },
              { title: 'The World', value: 'the-world' },
            ]}
          },
          { name: 'description', title: 'Description', type: 'text' },
        ]
      },
      {
        name: 'stream',
        title: 'Stream Entry',
        type: 'document',
        fields: [
          { name: 'thought', title: 'Thought', type: 'text' },
          { name: 'publishedAt', title: 'Date', type: 'datetime' },
        ]
      }
    ]
  }
})
