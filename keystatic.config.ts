import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    tech: collection({
      label: 'Tech',
      slugField: 'title',
      path: 'content/tech/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description' }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/tech',
              publicPath: '/images/tech',
            },
          },
        }),
      },
    }),
    law: collection({
      label: 'Law',
      slugField: 'title',
      path: 'content/law/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description' }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/law',
              publicPath: '/images/law',
            },
          },
        }),
      },
    }),
    faith: collection({
      label: 'Faith',
      slugField: 'title',
      path: 'content/faith/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description' }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/faith',
              publicPath: '/images/faith',
            },
          },
        }),
      },
    }),
    education: collection({
      label: 'Education',
      slugField: 'title',
      path: 'content/education/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description' }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/education',
              publicPath: '/images/education',
            },
          },
        }),
      },
    }),
  },
});
