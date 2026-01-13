# Collections Structure

## Overview
Your product organization uses two types of "collections":

1. **Collections** - Main product taxonomy/navigation (Patterns, Material, etc.)
2. **Featured Collections** - Curated product groupings for marketing (Everyday Comforts, Wearable Art, etc.)

## 1. Collections (Main Navigation)

**Purpose:** Organize products by type and material for browsing/filtering

**Structure:**
```
Collections (slug: collections)
├── Patterns
│   ├── New In
│   │   ├── Clothing
│   │   ├── Dresses
│   │   ├── Tops
│   │   └── ...
│   ├── Women
│   │   ├── Dresses
│   │   ├── Tops
│   │   └── ...
│   ├── Men
│   ├── Kids
│   ├── Accessories
│   └── Home & Living
└── Material
    ├── Yarn
    │   ├── Colours New
    │   ├── New Yarn Lines
    │   └── ...
    ├── Hooks
    ├── Hook Type
    └── Tools
```

**Fields:**
- Collection Name
- Type (Patterns/Material)
- Parent Collection (for hierarchy)
- Description
- Image
- Status (Active/Inactive)
- Display Order
- Slug

**Admin Location:** Products → Collections

**API Endpoint:** `/api/collections`

---

## 2. Featured Collections (Marketing)

**Purpose:** Curated product groupings for homepage and marketing

**Examples:**
- **Everyday Comforts** - Blankets, pillows & cozy essentials (12 items)
- **Wearable Art** - Sweaters, scarves & stylish bags (18 items)
- **Home & Decor** - Baskets, plant hangers & coasters (15 items)
- **Custom Gifts** - Baby sets, wedding gifts & keepsakes (25 items)

**Fields:**
- Title
- Slug
- Description
- Featured Image
- Products (relationship to products)
- Item Count (auto-calculated)
- Featured (checkbox - show on homepage)
- Featured Order (display order)
- Status (Active/Inactive)
- SEO fields

**Admin Location:** Products → Featured Collections

**API Endpoint:** `/api/featuredCollections`

---

## Product Relationships

Each product can be linked to:
1. **Multiple Collections** - For navigation/filtering (e.g., "Women > Dresses", "Patterns > New In")
2. **Multiple Featured Collections** - For marketing (e.g., "Everyday Comforts", "Custom Gifts")

### In Admin:
When editing a product, you'll see two relationship fields in the sidebar:
- **Collections** - Select taxonomy collections (Patterns, Material, etc.)
- **Featured Collections** - Select curated collections (Everyday Comforts, etc.)

---

## Setting Up Collections

### Step 1: Create Main Collections

1. Go to **Products → Collections**
2. Create main collections:
   - **Patterns** (type: patterns)
   - **Material** (type: material)

3. Create sub-collections with parent relationships:
   - Under Patterns: New In, Women, Men, Kids, Accessories, Home & Living
   - Under Material: Yarn, Hooks, Hook Type, Tools

4. Create sub-sub-collections:
   - Under Women: Dresses, Tops, Kimono, etc.
   - Under Yarn: Colours New, New Yarn Lines, etc.

See `src/utilities/seedCollections.ts` for complete structure.

### Step 2: Create Featured Collections

1. Go to **Products → Featured Collections**
2. Click **Add New**
3. Create each featured collection:
   - Title: "Everyday Comforts"
   - Description: "Blankets, pillows & cozy essentials"
   - Upload featured image
   - Check "Featured" checkbox
   - Set Featured Order: 1
   - Status: Active

4. After adding products, assign them to featured collections

See `src/utilities/seedFeaturedCollections.ts` for examples.

### Step 3: Link Products

1. Edit a product
2. In the sidebar, select relevant **Collections** (e.g., Women, Dresses)
3. Select relevant **Featured Collections** (e.g., Wearable Art)
4. Save

---

## Frontend Usage

### Fetch Collections for Navigation
```javascript
// Get all collections with hierarchy
const response = await fetch('/api/collections?where[status][equals]=active&sort=order&depth=2')
const collections = await response.json()

// Get specific type
const patterns = await fetch('/api/collections?where[type][equals]=patterns&where[status][equals]=active')
```

### Fetch Featured Collections for Homepage
```javascript
// Get featured collections only
const response = await fetch('/api/featuredCollections?where[featured][equals]=true&where[status][equals]=active&sort=featuredOrder&depth=1')
const featured = await response.json()

// Each collection includes:
// - title, description, image
// - itemCount (number of products)
// - products (array of product relationships)
```

### Get Products by Collection
```javascript
// Products in a specific collection
const response = await fetch('/api/products?where[collections][in][]=COLLECTION_ID')

// Products in a featured collection
const response = await fetch('/api/products?where[featuredCollections][in][]=FEATURED_COLLECTION_ID')
```

---

## Key Differences

| Feature | Collections | Featured Collections |
|---------|------------|---------------------|
| **Purpose** | Navigation/taxonomy | Marketing/curation |
| **Structure** | Hierarchical (parent/child) | Flat |
| **Type** | Patterns or Material | N/A |
| **Display** | Navigation menus, filters | Homepage cards, landing pages |
| **Count** | Many (100+) | Few (4-8) |
| **Products** | Linked via product field | Linked via featured collection field |

---

## Admin Workflow

### Adding a New Product

1. Create/edit product
2. **Collections Tab:**
   - Select main collections (e.g., "Women", "Dresses", "New In")
   - These determine where product appears in navigation
3. **Featured Collections Tab:**
   - Select featured collections (e.g., "Wearable Art")
   - These determine where product appears in marketing sections
4. Save

### Creating a Featured Collection

1. Go to Featured Collections
2. Add new collection
3. Give it a marketing-friendly name and description
4. Upload an attractive featured image
5. Add products to the collection
6. Check "Featured" to show on homepage
7. Set display order

---

## Benefits

✅ **Clear Separation** - Navigation vs. Marketing
✅ **Flexible** - Products can be in multiple collections
✅ **Hierarchical** - Collections support parent/child relationships
✅ **Auto-counting** - Featured collections show item counts
✅ **SEO-friendly** - Both have slug and SEO fields
✅ **Admin Control** - Easy to manage and reorder

---

## API Examples

See `src/utilities/customOrderAPI.example.ts` for complete API integration examples.

### Get Collection Hierarchy
```javascript
GET /api/collections?where[parent][exists]=false&depth=3
// Returns top-level collections with nested children
```

### Get Products in Collection
```javascript
GET /api/products?where[collections][in][]=COLLECTION_ID&limit=20
```

### Get Featured Collection with Products
```javascript
GET /api/featuredCollections/COLLECTION_ID?depth=2
// Returns collection with full product details
```
