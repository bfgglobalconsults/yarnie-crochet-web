import type { CollectionConfig } from 'payload'

export const CustomOrders: CollectionConfig = {
  slug: 'customOrders',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'orderNumber',
    group: 'Commerce',
    defaultColumns: ['orderNumber', 'customer', 'productType', 'status', 'estimatedPrice', 'createdAt'],
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ value, operation }) => {
            if (operation === 'create' && !value) {
              return `CUSTOM-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
            }
            return value
          },
        ],
      },
    },
    {
      name: 'customer',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'userId',
          type: 'relationship',
          relationTo: 'users',
          admin: {
            description: 'Link to registered user (if applicable)',
          },
        },
      ],
    },
    {
      name: 'productType',
      type: 'relationship',
      relationTo: 'productTypes',
      required: true,
      admin: {
        description: 'Selected product type (Blanket, Sweater, etc.)',
      },
    },
    {
      name: 'color',
      type: 'relationship',
      relationTo: 'customColors',
      required: true,
      admin: {
        description: 'Selected color',
      },
    },
    {
      name: 'yarnType',
      type: 'relationship',
      relationTo: 'yarnTypes',
      required: true,
      admin: {
        description: 'Selected yarn type',
      },
    },
    {
      name: 'customizations',
      type: 'group',
      fields: [
        {
          name: 'size',
          type: 'text',
          admin: {
            description: 'Custom size requirements',
          },
        },
        {
          name: 'specialInstructions',
          type: 'textarea',
          admin: {
            description: 'Customer special requests or notes',
          },
        },
        {
          name: 'referenceImages',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
          admin: {
            description: 'Customer uploaded reference images',
          },
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'quote_requested',
      options: [
        { label: 'Quote Requested', value: 'quote_requested' },
        { label: 'Quote Sent', value: 'quote_sent' },
        { label: 'Approved', value: 'approved' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'pricing',
      type: 'group',
      fields: [
        {
          name: 'estimatedPrice',
          type: 'number',
          admin: {
            description: 'Initial estimated price',
          },
        },
        {
          name: 'quotedPrice',
          type: 'number',
          admin: {
            description: 'Final quoted price after review',
          },
        },
        {
          name: 'finalPrice',
          type: 'number',
          admin: {
            description: 'Actual final price charged',
          },
        },
      ],
    },
    {
      name: 'timeline',
      type: 'group',
      fields: [
        {
          name: 'estimatedCompletion',
          type: 'text',
          defaultValue: '2-3 weeks',
          admin: {
            description: 'Estimated completion time',
          },
        },
        {
          name: 'startDate',
          type: 'date',
          admin: {
            description: 'When work started',
          },
        },
        {
          name: 'completionDate',
          type: 'date',
          admin: {
            description: 'When work was completed',
          },
        },
      ],
    },
    {
      name: 'progressPhotos',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
        {
          name: 'date',
          type: 'date',
          defaultValue: () => new Date().toISOString(),
        },
      ],
      admin: {
        description: 'Progress photos to share with customer',
      },
    },
    {
      name: 'paymentStatus',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Deposit Paid', value: 'deposit_paid' },
        { label: 'Paid in Full', value: 'paid_full' },
        { label: 'Refunded', value: 'refunded' },
      ],
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      admin: {
        description: 'Internal notes for staff only',
      },
    },
  ],
  timestamps: true,
}
