import type { CollectionConfig } from 'payload'

export const Inventory: CollectionConfig = {
  slug: 'inventory',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'product',
    group: 'Commerce',
    defaultColumns: ['product', 'kubwaStock', 'gwarimpaStock', 'asokoroStock', 'totalStock', 'lowStockAlert'],
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
      unique: true,
      admin: {
        description: 'Product to track inventory for',
      },
    },
    {
      name: 'variant',
      type: 'text',
      admin: {
        description: 'Product variant (if applicable)',
      },
    },
    {
      name: 'sku',
      type: 'text',
      admin: {
        description: 'Stock Keeping Unit',
      },
    },
    {
      name: 'kubwaStock',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Stock level at Kubwa location',
      },
    },
    {
      name: 'gwarimpaStock',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Stock level at Gwarimpa location',
      },
    },
    {
      name: 'asokoroStock',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      admin: {
        description: 'Stock level at Asokoro location',
      },
    },
    {
      name: 'totalStock',
      type: 'number',
      admin: {
        readOnly: true,
        description: 'Total stock across all locations',
      },
      hooks: {
        beforeChange: [
          ({ data, siblingData }) => {
            const kubwa = siblingData?.kubwaStock || 0
            const gwarimpa = siblingData?.gwarimpaStock || 0
            const asokoro = siblingData?.asokoroStock || 0
            return kubwa + gwarimpa + asokoro
          },
        ],
      },
    },
    {
      name: 'lowStockThreshold',
      type: 'number',
      defaultValue: 10,
      admin: {
        description: 'Alert when total stock falls below this number',
      },
    },
    {
      name: 'lowStockAlert',
      type: 'checkbox',
      admin: {
        readOnly: true,
        description: 'Indicates if stock is below threshold',
      },
      hooks: {
        beforeChange: [
          ({ data, siblingData }) => {
            const total = siblingData?.totalStock || 0
            const threshold = siblingData?.lowStockThreshold || 10
            return total < threshold
          },
        ],
      },
    },
    {
      name: 'reorderPoint',
      type: 'number',
      admin: {
        description: 'Stock level at which to reorder',
      },
    },
    {
      name: 'reorderQuantity',
      type: 'number',
      admin: {
        description: 'Quantity to reorder when stock is low',
      },
    },
    {
      name: 'lastRestocked',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about inventory',
      },
    },
  ],
  timestamps: true,
}
