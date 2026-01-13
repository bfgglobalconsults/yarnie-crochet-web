import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Collections: CollectionConfig = {
  slug: 'collections',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Products',
    defaultColumns: ['title', 'parent', 'type', 'status'],
    description: 'Product collections (Patterns, Material, etc.)',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Collection Name',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'patterns',
      options: [
        { label: 'Patterns', value: 'patterns' },
        { label: 'Material', value: 'material' },
      ],
      admin: {
        description: 'Main collection type',
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'collections',
      hasMany: false,
      admin: {
        description: 'Select parent collection for nested structure',
      },
      filterOptions: ({ id }) => {
        return {
          id: {
            not_equals: id,
          },
        }
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional description for the collection',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Collection thumbnail image',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
    slugField({
      position: undefined,
    }),
  ],
}
