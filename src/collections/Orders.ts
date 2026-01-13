import type { CollectionOverride } from '@payloadcms/plugin-ecommerce/types'

export const Orders: CollectionOverride = ({ defaultCollection }) => ({
  ...defaultCollection,
  slug: 'orders',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'orderNumber',
    group: 'Commerce',
    defaultColumns: ['orderNumber', 'customer', 'status', 'paymentStatus', 'total', 'createdAt'],
  },
  fields: [
    ...defaultCollection.fields,
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
              return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
            }
            return value
          },
        ],
      },
    },
    {
      name: 'customerInfo',
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
      ],
    },
    {
      name: 'deliveryLocation',
      type: 'select',
      options: [
        { label: 'Kubwa', value: 'kubwa' },
        { label: 'Gwarimpa', value: 'gwarimpa' },
        { label: 'Asokoro', value: 'asokoro' },
      ],
      admin: {
        description: 'Delivery/pickup location',
      },
    },
    {
      name: 'promoCode',
      type: 'relationship',
      relationTo: 'promotions',
      admin: {
        description: 'Applied promotion code',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes or customer comments',
      },
    },
    {
      name: 'trackingNumber',
      type: 'text',
      admin: {
        description: 'Shipping tracking number',
      },
    },
  ],
})
