import type { CollectionConfig } from 'payload'

export const YarnTypes: CollectionConfig = {
  slug: 'yarnTypes',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Customization',
    defaultColumns: ['name', 'priceModifier', 'status', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Yarn type name (e.g., Organic Cotton, Merino Wool)',
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
        description: 'Yarn characteristics (e.g., Soft, breathable, machine washable)',
      },
    },
    {
      name: 'properties',
      type: 'array',
      fields: [
        {
          name: 'property',
          type: 'text',
          required: true,
          admin: {
            description: 'Property name (e.g., Breathable, Hypoallergenic)',
          },
        },
      ],
      admin: {
        description: 'Key properties/features of this yarn',
      },
    },
    {
      name: 'priceModifier',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Price adjustment (positive or negative amount)',
      },
    },
    {
      name: 'priceModifierType',
      type: 'select',
      required: true,
      defaultValue: 'fixed',
      options: [
        { label: 'Fixed Amount', value: 'fixed' },
        { label: 'Percentage', value: 'percentage' },
      ],
    },
    {
      name: 'weight',
      type: 'select',
      options: [
        { label: 'Lace', value: 'lace' },
        { label: 'Fingering', value: 'fingering' },
        { label: 'Sport', value: 'sport' },
        { label: 'DK', value: 'dk' },
        { label: 'Worsted', value: 'worsted' },
        { label: 'Bulky', value: 'bulky' },
        { label: 'Super Bulky', value: 'super_bulky' },
      ],
      admin: {
        description: 'Yarn weight category',
      },
    },
    {
      name: 'composition',
      type: 'text',
      admin: {
        description: 'Material composition (e.g., 100% Cotton, 80% Wool 20% Nylon)',
      },
    },
    {
      name: 'careInstructions',
      type: 'textarea',
      admin: {
        description: 'How to care for items made with this yarn',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Photo of the yarn',
      },
    },
    {
      name: 'availableColors',
      type: 'relationship',
      relationTo: 'customColors',
      hasMany: true,
      admin: {
        description: 'Colors available for this yarn type',
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
