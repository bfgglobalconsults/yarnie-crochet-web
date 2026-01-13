# Custom Order Configurator Setup

## Overview
Your admin dashboard now includes a complete custom order configurator system that allows admins to manage all customization options that customers can select when designing their own pieces.

## New Collections

### 1. Product Types (Group: Customization)
**Purpose:** Define the types of products customers can customize (Blanket, Sweater, Hat, etc.)

**Fields:**
- Name (e.g., "Blanket", "Sweater")
- Slug (URL-friendly identifier)
- Icon (visual representation: home, shirt, bag, user, hat, heart)
- Description
- Image/Thumbnail
- Base Price
- Price Range (min/max for estimates)
- Estimated Timeline (e.g., "2-3 weeks")
- Status (Active/Inactive)
- Display Order

**Admin can:**
- Add new product types
- Set pricing ranges
- Upload product images
- Control which products are available for customization
- Reorder how products appear in the selector

---

### 2. Custom Colors (Group: Customization)
**Purpose:** Define available colors for custom orders

**Fields:**
- Name (e.g., "Cream", "Sage Green", "Dusty Rose")
- Slug
- Hex Code (e.g., #F5E6D3) - validated format
- Color Family (Neutral, Warm, Cool, Pastel, Bold)
- Image (optional photo of actual yarn/material)
- Status (Active/Inactive/Out of Stock)
- Display Order

**Admin can:**
- Add unlimited colors
- Set exact hex codes for accurate color display
- Upload photos of actual materials
- Mark colors as out of stock
- Organize colors by family
- Control display order

---

### 3. Yarn Types (Group: Customization)
**Purpose:** Define yarn/material options with properties and pricing

**Fields:**
- Name (e.g., "Organic Cotton", "Merino Wool")
- Slug
- Description (e.g., "Soft, breathable, machine washable")
- Properties Array (key features like "Breathable", "Hypoallergenic")
- Price Modifier (additional cost or discount)
- Price Modifier Type (Fixed Amount or Percentage)
- Weight (Lace, Fingering, Sport, DK, Worsted, Bulky, Super Bulky)
- Composition (e.g., "100% Cotton", "80% Wool 20% Nylon")
- Care Instructions
- Image
- Available Colors (relationship to Custom Colors)
- Status (Active/Inactive/Out of Stock)
- Display Order

**Admin can:**
- Add new yarn types
- Set price adjustments per yarn type
- Define yarn properties and characteristics
- Link specific colors to yarn types
- Provide care instructions
- Control availability

---

### 4. Custom Orders (Group: Commerce)
**Purpose:** Manage customer custom order requests

**Fields:**
- Auto-generated Order Number (CUSTOM-XXXXX)
- Customer Information (name, email, phone, linked user)
- Product Type (relationship)
- Color (relationship)
- Yarn Type (relationship)
- Customizations:
  - Size
  - Special Instructions
  - Reference Images (customer uploads)
- Status:
  - Quote Requested
  - Quote Sent
  - Approved
  - In Progress
  - Completed
  - Cancelled
- Pricing:
  - Estimated Price (auto-calculated)
  - Quoted Price (admin sets after review)
  - Final Price
- Timeline:
  - Estimated Completion
  - Start Date
  - Completion Date
- Progress Photos (array of images with captions and dates)
- Payment Status (Pending, Deposit Paid, Paid in Full, Refunded)
- Internal Notes

**Admin can:**
- View all custom order requests
- Review customer selections and requirements
- Upload progress photos to share with customers
- Update pricing and timelines
- Track order status from quote to completion
- Manage payments
- Add internal notes

---

## Customer Flow (Frontend Implementation)

Based on your wireframe, the customer experience would be:

1. **Choose Your Product** - Select from available product types (Blanket, Sweater, Bag, etc.)
2. **Select Color** - Choose from available colors with visual swatches
3. **Choose Yarn Type** - Select material with descriptions and properties
4. **View Summary** - See estimated price and timeline
5. **Submit Request** - Either "Start Your Custom Piece" or "Get Quote First"

The right panel shows:
- Selected Product
- Selected Color
- Selected Yarn
- Estimated Price Range
- Timeline
- Action buttons

---

## Seed Data

Reference `src/utilities/seedCustomization.ts` for initial data:

### Product Types (6 items):
1. Blanket ($85-$150, 2-3 weeks)
2. Sweater ($120-$200, 3-4 weeks)
3. Bag ($45-$90, 1-2 weeks)
4. Scarf ($35-$65, 1-2 weeks)
5. Hat ($25-$50, 1 week)
6. Baby Set ($60-$110, 2-3 weeks)

### Colors (6 items):
1. Cream (#F5E6D3)
2. Sage Green (#9CAF88)
3. Dusty Rose (#D4A5A5)
4. Navy Blue (#2C3E50)
5. Terracotta (#C97064)
6. Charcoal (#4A4A4A)

### Yarn Types (4 items):
1. Organic Cotton (base price)
2. Merino Wool (+$20)
3. Bamboo Blend (+$15)
4. Alpaca Wool (+$35)

---

## Admin Workflow

### Setting Up Customization Options:

1. **Add Product Types**
   - Go to Customization → Product Types
   - Add each product type with pricing and timeline
   - Upload product images
   - Set display order

2. **Add Colors**
   - Go to Customization → Custom Colors
   - Add colors with hex codes
   - Optionally upload yarn photos
   - Organize by color family

3. **Add Yarn Types**
   - Go to Customization → Yarn Types
   - Define each yarn with properties
   - Set price modifiers
   - Link available colors to each yarn type
   - Add care instructions

### Managing Custom Orders:

1. **New Order Arrives**
   - Customer submits custom order request
   - Order appears in Commerce → Custom Orders
   - Status: "Quote Requested"

2. **Review & Quote**
   - Admin reviews customer selections and requirements
   - Checks reference images if provided
   - Sets quoted price based on complexity
   - Updates status to "Quote Sent"
   - Customer receives quote notification

3. **Production**
   - Customer approves quote
   - Status: "Approved"
   - Admin sets start date
   - Status: "In Progress"
   - Upload progress photos to keep customer updated

4. **Completion**
   - Set completion date
   - Status: "Completed"
   - Update payment status
   - Customer receives notification

---

## Frontend API Integration

To build the customer-facing configurator, you'll need to:

1. **Fetch Product Types:**
   ```
   GET /api/productTypes?where[status][equals]=active&sort=order
   ```

2. **Fetch Colors:**
   ```
   GET /api/customColors?where[status][equals]=active&sort=order
   ```

3. **Fetch Yarn Types:**
   ```
   GET /api/yarnTypes?where[status][equals]=active&sort=order
   ```

4. **Calculate Estimated Price:**
   - Base price from selected product type
   - Add yarn type price modifier
   - Display as range (product type min/max + yarn modifier)

5. **Submit Custom Order:**
   ```
   POST /api/customOrders
   {
     customer: { name, email, phone },
     productType: productTypeId,
     color: colorId,
     yarnType: yarnTypeId,
     customizations: { size, specialInstructions, referenceImages },
     status: "quote_requested"
   }
   ```

---

## Benefits

✅ **Full Admin Control** - Admins can add/edit/remove any customization option
✅ **Dynamic Pricing** - Automatic price calculations based on selections
✅ **Order Tracking** - Complete workflow from quote to completion
✅ **Customer Updates** - Progress photos keep customers engaged
✅ **Flexible** - Easy to add new product types, colors, or yarn types
✅ **Scalable** - Supports unlimited customization options

---

## Next Steps

1. Start your dev server: `npm run dev`
2. Access admin: `http://localhost:3000/admin`
3. Create your customization options:
   - Add Product Types
   - Add Colors
   - Add Yarn Types
4. Test the workflow by creating a sample custom order
5. Build the frontend configurator using the API endpoints
6. Implement email notifications for order status updates

The admin can now fully customize what options customers see when designing their own pieces!
