# Hero Section

## Overview
Full-screen hero section with background image, overlay, and call-to-action buttons.

## Features

### 🎨 Design Elements
- **Background Image:** `/public/assets/yarnie-bg.jpg`
- **Overlay:** Black overlay at 40% opacity for text visibility
- **Gold Accent Color:** `#BE8D08`
- **Full Height:** Takes up entire viewport height
- **Responsive:** Adapts to all screen sizes

### 📝 Content

#### Heading
```
Handmade with Love Just for You
```
- "Just for You" is highlighted in gold color
- Large, bold typography (5xl to 7xl responsive)

#### Subheading
```
Unique crochet pieces that bring comfort, color, and creativity into your life
```

#### Call-to-Action Buttons
1. **Shop Collection** (Primary)
   - Gold background
   - Links to `/collections`
   - Hover effect with darker gold

2. **Custom Order** (Secondary)
   - White border, transparent background
   - Links to `/custom-orders`
   - Hover effect with white fill

#### Badge
- "Made by Hand" badge with hand icon
- Gold circular icon
- Semi-transparent white background with blur

#### Scroll Indicator
- Animated chevron down icon
- Smooth scroll to content below
- Bounce animation

## Color Palette

### Gold Colors (Added to Tailwind)
```javascript
gold: {
  DEFAULT: '#BE8D08',  // Primary gold
  light: '#D4A72C',    // Lighter shade
  dark: '#A67A07',     // Darker shade (hover)
}
```

### Usage
```tsx
// Background
className="bg-gold"

// Text
className="text-gold"

// Hover
className="hover:bg-gold-dark"
```

## Component Structure

```tsx
<Hero />
```

**Location:** `src/components/Hero/index.tsx`

### Layers (z-index)
1. Background image (z-0)
2. Dark overlay (z-0)
3. Content (z-10)

## Implementation

### Home Page
The Hero component is automatically rendered on the home page:

**File:** `src/app/(app)/page.tsx`

```tsx
<Hero />
```

### Customization

#### Change Background Image
```tsx
style={{
  backgroundImage: 'url(/assets/your-image.jpg)',
}}
```

#### Adjust Overlay Opacity
```tsx
<div className="absolute inset-0 bg-black/50" /> // 50% instead of 40%
```

#### Change Gold Color
Update in `tailwind.config.mjs`:
```javascript
gold: {
  DEFAULT: '#YOUR_COLOR',
}
```

#### Modify Button Links
```tsx
<Link href="/your-link">Button Text</Link>
```

## Responsive Behavior

### Mobile (< 640px)
- Buttons stack vertically
- Text size: 5xl
- Reduced padding

### Tablet (640px - 1024px)
- Buttons side by side
- Text size: 6xl
- Standard padding

### Desktop (> 1024px)
- Full layout
- Text size: 7xl
- Maximum width content

## Accessibility

- Semantic HTML (`<section>`, `<h1>`, `<p>`)
- Alt text for decorative elements
- Aria labels for icon buttons
- Keyboard navigation support
- Focus states on interactive elements

## Performance

- Background image loaded via CSS
- Optimized overlay with backdrop-blur
- Smooth scroll behavior
- Efficient animations (GPU-accelerated)

## Assets Required

1. **Background Image**
   - Path: `/public/assets/yarnie-bg.jpg`
   - Recommended size: 1920x1080px or larger
   - Format: JPG (optimized for web)

2. **Logo** (for header)
   - Path: `/public/assets/yarnie-logo.png`
   - Format: PNG with transparency

## Animation Details

### Scroll Down Button
- `animate-bounce` - Tailwind's built-in bounce animation
- Smooth scroll on click
- Fades on hover

### Button Hover Effects
- Transition duration: 200ms
- Shadow appears on primary button
- Background fill on secondary button

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Backdrop blur may not work in older browsers (graceful degradation)
- Fallback: solid background without blur
