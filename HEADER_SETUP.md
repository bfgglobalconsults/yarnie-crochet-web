# Header Configuration

## Overview
The header is now configured with your Yarnie logo, white background, and fixed positioning.

## Features

### ✨ Design
- **Fixed positioning** - Stays at top during scroll
- **White background** - Clean, professional appearance
- **Logo** - Yarnie Beauty and Crochet logo from `/public/assets/yarnie-logo.png`
- **Responsive** - Mobile menu for small screens, full nav for desktop

### 🎯 Layout

#### Desktop View
```
[Logo] [Collections] [Custom Orders] [About] [Contact] [Support]     [Search] [Cart] [Account]
```

#### Mobile View
```
[Menu] [Logo]                                                         [Cart] [Account]
```

### 📍 Navigation Items
Based on your wireframe:
- Collections
- Custom Orders
- About
- Contact
- Support

### 🔍 Right Side Icons
- **Search** - Search icon button
- **Cart** - Shopping cart with item count
- **Account** - User account icon

## Implementation Details

### Fixed Header
- `position: fixed` with `top-0`
- `z-index: 50` to stay above content
- Main content has `pt-20` (80px padding-top) to prevent overlap

### Styling
- White background (`bg-white`)
- Bottom border (`border-b border-gray-200`)
- Logo height: 40px (`h-10`)
- Responsive padding and spacing

### Navigation Links
- Hover effect with underline animation
- Active state with bold text and underline
- Smooth transitions

## Files Modified

1. **src/components/Header/index.client.tsx**
   - Updated layout structure
   - Added logo image
   - Added search and account icons
   - Fixed positioning

2. **src/components/Header/index.css**
   - Updated navigation link styles
   - Improved hover and active states

3. **src/app/(app)/layout.tsx**
   - Added `pt-20` to main content for fixed header spacing

## Logo

**Location:** `/public/assets/yarnie-logo.png`

The logo is displayed at 40px height with automatic width to maintain aspect ratio.

## Customization

### Change Logo Size
```tsx
<img
  src="/assets/yarnie-logo.png"
  alt="Yarnie Beauty and Crochet"
  className="h-12 w-auto" // Change h-10 to h-12 for larger
/>
```

### Adjust Header Height
Update both:
1. Header padding in `index.client.tsx`
2. Main content padding in `layout.tsx`

### Change Background Color
```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b">
```

### Add Shadow on Scroll
Add this to the header component:
```tsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 0)
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

// Then in className:
className={cn(
  "fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow",
  scrolled && "shadow-md"
)}
```

## Navigation Setup

To configure navigation items, edit the Header global in Payload CMS:
1. Go to Admin Dashboard
2. Navigate to Globals → Header
3. Add/edit navigation items
4. Each item can link to pages, collections, or custom URLs

## Responsive Behavior

- **Desktop (md and up):** Full navigation menu visible
- **Mobile:** Hamburger menu with slide-out drawer
- Logo always centered on mobile
- Icons always visible on both views

## Accessibility

- All icons have `aria-label` attributes
- Semantic HTML with `<header>` and `<nav>` elements
- Keyboard navigation supported
- Focus states on interactive elements
