# Renaming Summary: Categories → Collections

## What Changed

### Collections Renamed
1. **Categories** → **Collections**
   - File: `src/collections/Collections.ts`
   - Slug: `collections`
   - Purpose: Main product taxonomy (Patterns, Material, etc.)

2. **ProductCollections** → **FeaturedCollections**
   - File: `src/collections/FeaturedCollections.ts`
   - Slug: `featuredCollections`
   - Purpose: Curated marketing collections (Everyday Comforts, etc.)

### Updated Files
- ✅ `src/collections/Collections.ts` (renamed from Categories.ts)
- ✅ `src/collections/FeaturedCollections.ts` (renamed from ProductCollections.ts)
- ✅ `src/collections/Products/index.ts` (updated relationships)
- ✅ `src/collections/Promotions.ts` (updated relationship)
- ✅ `src/payload.config.ts` (updated imports and collection list)
- ✅ `src/utilities/seedCollections.ts` (renamed from seedCategories.ts)
- ✅ `src/utilities/seedFeaturedCollections.ts` (new file)

### Product Relationships
Products now have two relationship fields:
1. **collections** - Links to main Collections (Patterns, Material, etc.)
2. **featuredCollections** - Links to Featured Collections (Everyday Comforts, etc.)

## Terminology

### Collections (Main)
- **What:** Product taxonomy/navigation structure
- **Examples:** Patterns > Women > Dresses, Material > Yarn > Organic Cotton
- **Where:** Navigation menus, filters, breadcrumbs
- **Structure:** Hierarchical (parent/child)

### Featured Collections
- **What:** Curated product groupings for marketing
- **Examples:** Everyday Comforts, Wearable Art, Home & Decor
- **Where:** Homepage featured section, landing pages
- **Structure:** Flat (no hierarchy)

## Admin Dashboard

### Sidebar Structure
```
Products (Group)
├── Products
├── Collections (main taxonomy)
└── Featured Collections (curated)

Commerce (Group)
├── Orders
├── Custom Orders
├── Promotions
└── Inventory

Customization (Group)
├── Product Types
├── Custom Colors
└── Yarn Types
```

## API Endpoints

### Collections (Main)
```
GET /api/collections
GET /api/collections/:id
POST /api/collections
PATCH /api/collections/:id
DELETE /api/collections/:id
```

### Featured Collections
```
GET /api/featuredCollections
GET /api/featuredCollections/:id
POST /api/featuredCollections
PATCH /api/featuredCollections/:id
DELETE /api/featuredCollections/:id
```

### Products with Collections
```
GET /api/products?where[collections][in][]=COLLECTION_ID
GET /api/products?where[featuredCollections][in][]=FEATURED_COLLECTION_ID
```

## Next Steps

1. ✅ Collections renamed and configured
2. ⏳ Start server: `npm run dev`
3. ⏳ Create main Collections (Patterns, Material)
4. ⏳ Create sub-collections (Women, Men, Yarn, etc.)
5. ⏳ Create Featured Collections (Everyday Comforts, etc.)
6. ⏳ Add products and link to collections
7. ⏳ Build frontend using new API endpoints

## Documentation

- **COLLECTIONS_STRUCTURE.md** - Complete collections documentation
- **ADMIN_DASHBOARD_SETUP.md** - Admin features overview
- **CUSTOM_ORDER_CONFIGURATOR.md** - Custom order system
- **QUICK_START.md** - Getting started guide

All references to "categories" have been updated to "collections" to match your business terminology!
