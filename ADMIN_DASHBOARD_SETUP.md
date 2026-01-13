# Admin Dashboard Setup Guide

## Overview
Your Payload CMS admin dashboard is now configured with all the collections needed for your e-commerce platform.

## Collections Structure

### Products & E-commerce

### 1. Products (Group: Products)
- Managed by the ecommerce plugin
- Fields: Title, Description, Gallery, Variants, Pricing, Categories, Related Products
- Supports product variants and inventory tracking
- SEO fields included

### 2. Categories (Group: Products)
- **Hierarchical structure** with parent-child relationships
- Two main types: **Patterns** and **Material**
- Fields:
  - Category Name
  - Type (Patterns/Material)
  - Parent Category (for nested structure)
  - Description
  - Image
  - Status (Active/Inactive)
  - Display Order
  - Slug

### 3. Orders (Group: Commerce)
- Auto-generated order numbers (ORD-XXXXX)
- Customer information (name, email, phone, linked user)
- Order items with product relationships
- Status tracking: Pending → Processing → Shipped → Delivered → Cancelled
- Payment status: Pending, Paid, Failed, Refunded
- Payment methods: Card, Bank Transfer, COD, Mobile Money
- Shipping address
- Delivery locations: Kubwa, Gwarimpa, Asokoro
- Pricing: Subtotal, Discount, Shipping, Total
- Promo code support
- Tracking number

### 4. Promotions (Group: Commerce)
- Promo codes with unique identifiers
- Discount types: Percentage or Fixed Amount
- Validity period (from/until dates)
- Status: Active, Expired, Disabled (auto-expires based on date)
- Usage limits and tracking
- Minimum order value requirements
- Can be applied to specific categories or products

### 5. Inventory (Group: Commerce)
- Multi-location stock tracking:
  - Kubwa
  - Gwarimpa
  - Asokoro
- Auto-calculated total stock
- Low stock alerts with configurable thresholds
- Reorder points and quantities
- SKU tracking
- Last restocked date
- Internal notes

### Custom Order System

### 6. Product Types (Group: Customization)
- Define customizable product types (Blanket, Sweater, Hat, etc.)
- Set pricing ranges and timelines
- Icon selection for UI
- Control availability

### 7. Custom Colors (Group: Customization)
- Manage available colors with hex codes
- Upload actual material photos
- Organize by color family
- Track stock status

### 8. Yarn Types (Group: Customization)
- Define yarn/material options
- Set price modifiers
- List properties and care instructions
- Link to available colors

### 9. Custom Orders (Group: Commerce)
- Manage customer custom order requests
- Quote workflow (Request → Quote → Approved → In Progress → Completed)
- Progress photo sharing
- Pricing and timeline management
- Payment tracking

**See CUSTOM_ORDER_CONFIGURATOR.md for detailed documentation**

## Category Structure to Create

### Patterns Category
1. **New In** - with subcategories: Clothing, Dresses, Tops, Vests, Cardigans & Jumper, Beachwear, Sweater, Swinset, Lounge wear, Hats, Jackets, Kimono, Shirts, Skirts
2. **Women** - Dresses, Tops, Kimono, Jackets, Lounge wear, Twin set, Beach wear, Cardigans & Jumper, Trousers, Shirts, Skirts
3. **Men** - Vests, Sweater, Shirts, Tops, Cardigan & Jumper
4. **Kids** - Kids sweater, Kids Tops, Kids Vests, Hats
5. **Accessories** - Hats, Scarves, Scrunchies & Muffler, Headbands, Bags & Purses, Earings
6. **Home & Living** - Cushion, Curtains, Blankets, Rugs & Mats

### Material Category
1. **Yarn** - Colours New, New Yarn Lines, Our Favourites, Glow-in-the-dark yarns, Undyed Bare Yarn, View All
2. **Hooks** - New In, Single Crochet Hooks or Sizes, Crochet Hook Sets, Crochet Pins, View All
3. **Hook Type** - Ergonomic Handles, Tunisian Hooks, Inline Hooks, Tapered Hooks, Darning Needle
4. **Tools** - Row Counters & Stitch Marker, Gauge & Measuring Tools, Filling & Stuffing, Fibre Dyes & Washes, Blocking Tools, Emblishment & Finishing, Storage & Organization, Ball Winders & Yarn Swifts

## How to Create Categories

1. Log into your Payload admin dashboard
2. Navigate to **Products → Categories**
3. Click **Add New Category**
4. Create the main categories first (e.g., "Patterns" with type "patterns")
5. Then create subcategories and select the parent category
6. Set display order for proper sorting

Reference the seed data in `src/utilities/seedCategories.ts` for the complete structure.

## Admin Dashboard Features

### Sidebar Modules
- **Products Group:**
  - Products
  - Categories
- **Commerce Group:**
  - Orders
  - Custom Orders
  - Inventory
  - Promotions
- **Customization Group:**
  - Product Types
  - Custom Colors
  - Yarn Types
- **Content Group:**
  - Pages
  - Media
- Reports (to be implemented via custom dashboard)
- Users/Customers
- Settings

### Key Features by Screen

**Products Screen:**
- Columns: Image, Product Name, SKU, Category, Price, Stock, Status, Actions
- Add New Product button

**Categories Screen:**
- Columns: Category Name, Number of Products, Actions
- Add New Category button

**Orders Management:**
- Columns: Order ID, Customer, Date, Status, Payment, Delivery, Total, Actions
- Filters: By Status, By Date
- Actions: View, Edit, Refund

**Promotions:**
- Columns: Promo Code, Discount %, Validity Period, Status, Actions
- Create New Promotion button

**Inventory:**
- Stock levels per location (Kubwa, Gwarimpa, Asokoro)
- Low stock alerts
- Total stock calculations

## Next Steps

1. Start your development server: `npm run dev`
2. Access admin at: `http://localhost:3000/admin`
3. Create your category structure
4. Add products and assign to categories
5. Configure inventory for each product
6. Create promotional campaigns
7. Test order flow

## Custom Reports Dashboard
For the Reports screen (Sales graph, Top products, Low stock alerts), you'll need to create a custom admin view. This can be done by:
1. Creating a custom React component in `src/components/Reports`
2. Adding it to the admin config in `payload.config.ts`
3. Using Payload's REST API to fetch and display data

Let me know if you need help implementing the custom reports dashboard!
