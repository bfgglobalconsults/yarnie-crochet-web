import type { CollectionConfig } from 'payload'

export const Promotions: CollectionConfig = {
  slug: 'promotions',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'code',
    group: 'Commerce',
    defaultColumns: ['code', 'discountPercent', 'validFrom', 'validUntil', 'status'],
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Promo code that customers will enter',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Internal description of this promotion',
      },
    },
    {
      name: 'discountType',
      type: 'select',
      required: true,
      defaultValue: 'percentage',
      options: [
        { label: 'Percentage', value: 'percentage' },
        { label: 'Fixed Amount', value: 'fixed' },
      ],
    },
    {
      name: 'discountPercent',
      type: 'number',
      required: true,
      min: 0,
      max: 100,
      admin: {
        condition: (data) => data.discountType === 'percentage',
        description: 'Discount percentage (0-100)',
      },
    },
    {
      name: 'discountAmount',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        condition: (data) => data.discountType === 'fixed',
        description: 'Fixed discount amount',
      },
    },
    {
      name: 'validFrom',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'validUntil',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'Disabled', value: 'disabled' },
      ],
      hooks: {
        beforeChange: [
          ({ value, data }) => {
            if (data?.validUntil && new Date(data.validUntil) < new Date()) {
              return 'expired'
            }
            return value
          },
        ],
      },
    },
    {
      name: 'usageLimit',
      type: 'number',
      admin: {
        description: 'Maximum number of times this code can be used (leave empty for unlimited)',
      },
    },
    {
      name: 'usageCount',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
        description: 'Number of times this code has been used',
      },
    },
    {
      name: 'minimumOrderValue',
      type: 'number',
      admin: {
        description: 'Minimum order value required to use this promo',
      },
    },
    {
      name: 'applicableCollections',
      type: 'relationship',
      relationTo: 'collections',
      hasMany: true,
      admin: {
        description: 'Leave empty to apply to all products',
      },
    },
    {
      name: 'applicableProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      admin: {
        description: 'Specific products this promo applies to',
      },
    },
  ],
  timestamps: true,
}
