import type { CollectionConfig } from 'payload'

export const CustomColors: CollectionConfig = {
  slug: 'customColors',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Customization',
    defaultColumns: ['name', 'hexCode', 'status', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Color name (e.g., Cream, Sage Green, Navy Blue)',
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
      name: 'hexCode',
      type: 'text',
      required: true,
      admin: {
        description: 'Hex color code (e.g., #F5E6D3)',
        placeholder: '#FFFFFF',
      },
      validate: (value: any) => {
        if (typeof value === 'string' && !/^#[0-9A-F]{6}$/i.test(value)) {
          return 'Please enter a valid hex color code (e.g., #FFFFFF)'
        }
        return true
      },
    },
    {
      name: 'colorFamily',
      type: 'select',
      options: [
        { label: 'Neutral', value: 'neutral' },
        { label: 'Warm', value: 'warm' },
        { label: 'Cool', value: 'cool' },
        { label: 'Pastel', value: 'pastel' },
        { label: 'Bold', value: 'bold' },
      ],
      admin: {
        description: 'Color family for filtering',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional: Photo of actual yarn/material in this color',
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
        { label: 'Out of Stock', value: 'out_of_stock' },
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
