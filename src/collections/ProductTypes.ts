import type { CollectionConfig } from 'payload'

export const ProductTypes: CollectionConfig = {
  slug: 'productTypes',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Customization',
    defaultColumns: ['name', 'icon', 'status', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Product type name (e.g., Blanket, Sweater, Hat)',
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
      name: 'icon',
      type: 'select',
      required: true,
      options: [
        { label: 'Home (Blanket)', value: 'home' },
        { label: 'Shirt (Sweater)', value: 'shirt' },
        { label: 'Bag', value: 'bag' },
        { label: 'User (Scarf)', value: 'user' },
        { label: 'Hat', value: 'hat' },
        { label: 'Heart (Baby Set)', value: 'heart' },
      ],
      admin: {
        description: 'Icon to display in the product selector',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of this product type',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Product type image/thumbnail',
      },
    },
    {
      name: 'basePrice',
      type: 'number',
      required: true,
      admin: {
        description: 'Starting price for this product type',
      },
    },
    {
      name: 'priceRange',
      type: 'group',
      fields: [
        {
          name: 'min',
          type: 'number',
          required: true,
        },
        {
          name: 'max',
          type: 'number',
          required: true,
        },
      ],
      admin: {
        description: 'Price range for estimates (e.g., $85 - $150)',
      },
    },
    {
      name: 'estimatedTimeline',
      type: 'text',
      defaultValue: '2-3 weeks',
      admin: {
        description: 'Estimated completion time',
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
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
}
