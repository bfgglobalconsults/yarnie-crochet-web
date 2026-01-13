# Font Setup: Roboto

## Overview
The project now uses **Roboto** as the primary font family throughout the application.

## Configuration

### Font Weights Included
- **300** - Light
- **400** - Regular
- **500** - Medium
- **700** - Bold

### Implementation

#### 1. Next.js Font Configuration
**File:** `src/app/(app)/layout.tsx`

```typescript
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
```

The font is loaded from Google Fonts with optimized loading strategy (`display: 'swap'`).

#### 2. CSS Variables
**File:** `src/app/(app)/globals.css`

```css
@theme {
  --font-sans: var(--font-roboto), 'Roboto', sans-serif;
  --font-mono: ui-monospace, 'Courier New', monospace;
}
```

#### 3. Tailwind Configuration
**File:** `tailwind.config.mjs`

```javascript
fontFamily: {
  sans: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
  mono: ['ui-monospace', 'Courier New', 'monospace'],
}
```

## Usage

### In Components
Roboto is automatically applied to all text through the `font-sans` utility:

```tsx
// Default - uses Roboto
<p className="text-base">This text uses Roboto</p>

// Explicit font family
<h1 className="font-sans">Heading in Roboto</h1>

// Different weights
<p className="font-light">Light (300)</p>
<p className="font-normal">Regular (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-bold">Bold (700)</p>
```

### Font Weight Classes
- `font-light` - 300
- `font-normal` - 400 (default)
- `font-medium` - 500
- `font-bold` - 700

## Benefits

✅ **Optimized Loading** - Next.js automatically optimizes Google Fonts
✅ **Self-hosted** - Fonts are self-hosted for better performance and privacy
✅ **No Flash** - `display: 'swap'` prevents invisible text during loading
✅ **Variable Font** - Uses CSS variables for easy theming
✅ **Fallback** - Graceful fallback to system sans-serif fonts

## Typography Examples

### Headings
```tsx
<h1 className="text-4xl font-bold">Main Heading</h1>
<h2 className="text-3xl font-medium">Subheading</h2>
<h3 className="text-2xl font-medium">Section Title</h3>
```

### Body Text
```tsx
<p className="text-base font-normal">Regular paragraph text</p>
<p className="text-sm font-light">Light body text</p>
```

### UI Elements
```tsx
<button className="font-medium">Button Text</button>
<span className="text-xs font-bold uppercase">Label</span>
```

## Admin Dashboard
The Payload admin dashboard uses its own font configuration. To update the admin font, modify:
**File:** `src/app/(payload)/custom.scss`

```scss
:root {
  --font-body: 'Roboto', sans-serif;
  --font-mono: 'Courier New', monospace;
}
```

## Performance
- Fonts are preloaded automatically by Next.js
- Subset to Latin characters only for smaller file size
- Uses font-display: swap for optimal loading
- Self-hosted for GDPR compliance and better performance

## Customization

### Adding More Weights
Edit `src/app/(app)/layout.tsx`:

```typescript
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Add more weights
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
```

### Adding Italic Styles
```typescript
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'], // Add italic
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
```

### Using Different Subsets
```typescript
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'latin-ext', 'cyrillic'], // Add more character sets
  display: 'swap',
  variable: '--font-roboto',
})
```

## Browser Support
Roboto is supported in all modern browsers with automatic fallback to system fonts in older browsers.

## Resources
- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Tailwind CSS Typography](https://tailwindcss.com/docs/font-family)
