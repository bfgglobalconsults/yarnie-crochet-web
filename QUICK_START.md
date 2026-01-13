# Quick Start Guide

## What's Been Set Up

Your Payload CMS admin dashboard now has a complete e-commerce system with custom order capabilities.

## Collections Overview

### 📦 Products & Categories
- **Products** - Your product catalog with variants, pricing, inventory
- **Categories** - Hierarchical category structure (Patterns & Material types)

### 🛒 Commerce
- **Orders** - Standard e-commerce orders
- **Custom Orders** - Custom "Design Your Own Piece" orders
- **Promotions** - Promo codes and discounts
- **Inventory** - Multi-location stock tracking (Kubwa, Gwarimpa, Asokoro)

### 🎨 Customization (NEW!)
- **Product Types** - Define what customers can customize (Blanket, Sweater, etc.)
- **Custom Colors** - Manage available colors with hex codes
- **Yarn Types** - Define materials with pricing and properties

## Getting Started

### 1. Start Your Server
```bash
npm run dev
```

### 2. Access Admin Dashboard
Navigate to: `http://localhost:3000/admin`

### 3. Set Up Customization Options

#### Add Product Types
1. Go to **Customization → Product Types**
2. Click **Add New**
3. Fill in:
   - Name: "Blanket"
   - Icon: "home"
   - Base Price: 85
   - Price Range: Min 85, Max 150
   - Timeline: "2-3 weeks"
   - Status: Active

Repeat for: Sweater, Bag, Scarf, Hat, Baby Set

#### Add Colors
1. Go to **Customization → Custom Colors**
2. Click **Add New**
3. Fill in:
   - Name: "Cream"
   - Hex Code: #F5E6D3
   - Color Family: Neutral
   - Status: Active

Repeat for: Sage Green, Dusty Rose, Navy Blue, Terracotta, Charcoal

#### Add Yarn Types
1. Go to **Customization → Yarn Types**
2. Click **Add New**
3. Fill in:
   - Name: "Organic Cotton"
   - Description: "Soft, breathable, machine washable"
   - Properties: Add "Soft", "Breathable", "Machine washable"
   - Price Modifier: 0
   - Status: Active

Repeat for: Merino Wool (+$20), Bamboo Blend (+$15), Alpaca Wool (+$35)

### 4. Create Categories

#### Patterns Category Structure
1. Go to **Products → Categories**
2. Create main category:
   - Title: "Patterns"
   - Type: Patterns
   - Status: Active

3. Create subcategories (set Parent to "Patterns"):
   - New In
   - Women
   - Men
   - Kids
   - Accessories
   - Home & Living

4. Create sub-subcategories (e.g., under "Women"):
   - Dresses
   - Tops
   - Kimono
   - etc.

See `ADMIN_DASHBOARD_SETUP.md` for complete category structure.

### 5. Test Custom Order Flow

1. Go to **Commerce → Custom Orders**
2. Click **Add New**
3. Fill in customer info
4. Select Product Type, Color, and Yarn Type
5. Add customizations
6. Save

The system will:
- Auto-generate order number (CUSTOM-XXXXX)
- Calculate estimated price
- Set status to "Quote Requested"

## Key Features

### For Admins
✅ Full control over customization options
✅ Dynamic pricing based on selections
✅ Order tracking from quote to completion
✅ Progress photo sharing with customers
✅ Multi-location inventory management
✅ Promo code system
✅ Hierarchical categories

### For Customers (Frontend to be built)
✅ Visual product selector
✅ Color swatches with hex codes
✅ Yarn type selection with properties
✅ Real-time price estimation
✅ Image upload for reference
✅ Order tracking

## Documentation

- **ADMIN_DASHBOARD_SETUP.md** - Complete admin features and category structure
- **CUSTOM_ORDER_CONFIGURATOR.md** - Detailed custom order system documentation
- **src/utilities/seedCustomization.ts** - Seed data for customization options
- **src/utilities/customOrderAPI.example.ts** - Frontend API integration examples

## Next Steps

1. ✅ Set up customization options (Product Types, Colors, Yarn Types)
2. ✅ Create category structure
3. ⏳ Add products to your catalog
4. ⏳ Configure inventory for each location
5. ⏳ Create promotional campaigns
6. ⏳ Build frontend custom order configurator
7. ⏳ Implement email notifications
8. ⏳ Create custom reports dashboard

## API Endpoints

### Fetch Customization Options
```
GET /api/productTypes?where[status][equals]=active&sort=order
GET /api/customColors?where[status][equals]=active&sort=order
GET /api/yarnTypes?where[status][equals]=active&sort=order
```

### Submit Custom Order
```
POST /api/customOrders
{
  "customer": { "name": "...", "email": "..." },
  "productType": "productTypeId",
  "color": "colorId",
  "yarnType": "yarnTypeId",
  "status": "quote_requested"
}
```

See `src/utilities/customOrderAPI.example.ts` for complete API examples.

## Support

All collections are configured with:
- Proper relationships
- Auto-calculated fields
- Validation
- Admin-friendly interfaces
- Timestamps

You're ready to start managing your e-commerce platform! 🚀
