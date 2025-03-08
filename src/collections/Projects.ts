import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Web (Violet)',
          value: 'Web',
        },
        {
          label: 'Mobile (Green)',
          value: 'Mobile',
        },
        {
          label: 'Web Mobile (Sky)',
          value: 'Web Mobile',
        },
        {
          label: 'Slicing UI (Amber)',
          value: 'Slicing UI',
        },
      ],
      hasMany: false,
    },
    {
      name: 'tag_color',
      label: 'Tag Color',
      type: 'select',
      options: [
        {
          label: 'Violet',
          value: 'violet',
        },
        {
          label: 'Sky',
          value: 'sky',
        },
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'Amber',
          value: 'amber',
        },
      ],
    },
    {
      name: 'tech',
      type: 'text',
    },
    {
      name: 'purpose',
      type: 'text',
    },
    {
      name: 'feature',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
