import type { CollectionConfig } from 'payload'

export const FeaturedCollections: CollectionConfig = {
  slug: 'featuredCollections',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Products',
    defaultColumns: ['title', 'itemCount', 'featured', 'status'],
    description: 'Featured curated collections (e.g., Everyday Comforts, Wearable Art)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Collection name (e.g., Everyday Comforts, Wearable Art)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description of the collection',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Featured image for the collection card',
      },
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
      admin: {
        description: 'Products included in this collection',
      },
    },
    {
      name: 'itemCount',
      type: 'number',
      admin: {
        readOnly: true,
        description: 'Number of items in this collection',
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            if (Array.isArray(siblingData?.products)) {
              return siblingData.products.length
            }
            return 0
          },
        ],
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show in Featured Collections section on homepage',
      },
    },
    {
      name: 'featuredOrder',
      type: 'number',
      admin: {
        description: 'Display order for featured collections (lower numbers first)',
        condition: (data) => data.featured === true,
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title for collection page',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO meta description',
          },
        },
      ],
    },
  ],
  timestamps: true,
}
