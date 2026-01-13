# Featured Collections Section

## Overview
Displays curated featured collections in a responsive grid layout with images, item counts, and descriptions.

## Features

### 🎨 Design Elements
- **Light gray background** (`bg-gray-50`)
- **4-column grid** on desktop (responsive to 1 column on mobile)
- **Rounded cards** with shadow and hover effects
- **Image zoom effect** on hover
- **Item count badges** in top-right corner
- **Gold accent** on title hover

### 📋 Content Structure

#### Section Header
- **Title:** "Featured Collections"
- **Subtitle:** "Discover our carefully curated collections..."

#### Collection Cards
Each card displays:
1. **Image** - 3:4 aspect ratio
2. **Item Count Badge** - White badge with count
3. **Title** - Collection name
4. **Description** - Short description

#### CTA Button
- "View All Collections" button
- Gold background with hover effect
- Links to `/collections` page

## Default Collections

Based on your wireframe:

1. **Everyday Comforts**
   - Blankets, pillows & cozy essentials
   - 12 items

2. **Wearable Art**
   - Sweaters, scarves & stylish bags
   - 18 items

3. **Home & Decor**
   - Baskets, plant hangers & coasters
   - 15 items

4. **Custom Gifts**
   - Baby sets, wedding gifts & keepsakes
   - 25 items

## Implementation

### Server Component
**File:** `src/components/FeaturedCollections/index.tsx`

Fetches featured collections from Payload CMS:
```tsx
<FeaturedCollections />
```

### Client Component
**File:** `src/components/FeaturedCollections/FeaturedCollectionsClient.tsx`

Renders the UI with collections data.

### Data Source
Fetches from `featuredCollections` collection in Payload CMS with filters:
- `featured: true`
- `status: 'active'`
- Sorted by `featuredOrder`
- Limited to 4 collections

## Payload CMS Setup

### Creating Featured Collections

1. Go to **Products → Featured Collections**
2. Click **Add New**
3. Fill in:
   - **Title:** Collection name
   - **Slug:** URL-friendly identifier
   - **Description:** Short description
   - **Image:** Upload collection image
   - **Products:** Select products to include
   - **Featured:** Check this box
   - **Featured Order:** Set display order (1-4)
   - **Status:** Active

4. Save

### Image Requirements
- **Aspect Ratio:** 3:4 (portrait)
- **Recommended Size:** 600x800px or larger
- **Format:** JPG or PNG
- **Optimization:** Compress for web

## Responsive Behavior

### Mobile (< 640px)
- 1 column grid
- Full width cards
- Stacked layout

### Tablet (640px - 1024px)
- 2 column grid
- Medium spacing

### Desktop (> 1024px)
- 4 column grid
- Optimal spacing
- Hover effects enabled

## Styling Details

### Card Hover Effects
```css
- Shadow increases (shadow-md → shadow-xl)
- Image scales up (scale-110)
- Title changes to gold color
- Smooth transitions (500ms)
```

### Colors
- **Background:** Gray-50
- **Cards:** White
- **Text:** Gray-900 (titles), Gray-600 (descriptions)
- **Accent:** Gold (#BE8D08)
- **Badge:** White with gray text

## Customization

### Change Grid Columns
```tsx
// In FeaturedCollectionsClient.tsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  // Change lg:grid-cols-4 to lg:grid-cols-3 for 3 columns
```

### Adjust Card Aspect Ratio
```tsx
<div className="relative aspect-[4/5] overflow-hidden">
  // Change aspect-[3/4] to aspect-[4/5] or aspect-square
```

### Modify Item Count Display
```tsx
{collection.itemCount && (
  <div className="absolute right-3 top-3 ...">
    {collection.itemCount} items
  </div>
)}
```

### Change Background Color
```tsx
<section className="bg-white py-16 md:py-24">
  // Change bg-gray-50 to bg-white or any color
```

## API Integration

### Fetching Collections
```typescript
const { docs: collections } = await payload.find({
  collection: 'featuredCollections',
  where: {
    featured: { equals: true },
    status: { equals: 'active' },
  },
  sort: 'featuredOrder',
  limit: 4,
  depth: 1, // Include related data
})
```

### Collection Data Structure
```typescript
interface FeaturedCollection {
  id: string
  title: string
  slug: string
  description: string
  image: Media
  products: Product[]
  itemCount: number
  featured: boolean
  featuredOrder: number
  status: 'active' | 'inactive'
}
```

## Placeholder Images

If collections don't have images, create placeholder images at:
```
/public/assets/collections/everyday-comforts.jpg
/public/assets/collections/wearable-art.jpg
/public/assets/collections/home-decor.jpg
/public/assets/collections/custom-gifts.jpg
```

Or use a default placeholder:
```
/public/assets/placeholder-collection.jpg
```

## Performance

- Server-side rendering for SEO
- Images loaded via CSS background (consider Next.js Image for optimization)
- Lazy loading for images below fold
- Efficient hover animations (GPU-accelerated)

## Accessibility

- Semantic HTML structure
- Alt text for images (via aria-label on links)
- Keyboard navigation support
- Focus states on interactive elements
- Sufficient color contrast

## SEO Benefits

- Server-rendered content
- Semantic HTML
- Descriptive link text
- Structured data ready
- Fast loading times
