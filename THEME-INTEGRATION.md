# Theme Integration Guide

The theme system is now fully integrated with Tailwind CSS! Update colors in one place (`app/theme.ts`) and they'll work throughout the entire site.

## How It Works

1. **Single Source of Truth**: `app/theme.ts` - Update colors here
2. **Auto-Sync**: Run `npm run sync-theme` to sync theme.ts values to CSS variables
3. **Tailwind Integration**: All colors are available as Tailwind utilities

## Quick Start

### 1. Update Theme Colors

Edit `app/theme.ts`:

```typescript
export const theme = {
  primary: {
    600: '#2563eb', // Changed from indigo to blue
    700: '#1d4ed8',
    // ... etc
  },
  // ...
}
```

### 2. Sync to CSS

```bash
npm run sync-theme
```

This updates all CSS variables in `app/globals.css` automatically.

### 3. Use in Components

Now you can use theme colors with Tailwind classes:

```tsx
// Old way (hardcoded indigo):
<div className="text-indigo-600 bg-indigo-100 border-indigo-400">

// New way (uses theme):
<div className="text-primary-600 bg-primary-100 border-primary-400">
```

## Available Theme Classes

### Primary Colors
- `bg-primary-50` through `bg-primary-900`
- `text-primary-50` through `text-primary-900`
- `border-primary-50` through `border-primary-900`
- All other Tailwind utilities: `hover:bg-primary-600`, `ring-primary-500`, etc.

### Secondary Colors
- `bg-secondary-50` through `bg-secondary-900`
- `text-secondary-50` through `text-secondary-900`
- `border-secondary-50` through `border-secondary-900`

### Neutral Colors
- `bg-neutral-50` through `bg-neutral-900`
- `text-neutral-50` through `text-neutral-900`
- `border-neutral-50` through `border-neutral-900`

## Migration Guide

### Replace Hardcoded Colors

Find and replace in your codebase:

| Old (Hardcoded) | New (Theme) |
|----------------|-------------|
| `indigo-600` | `primary-600` |
| `indigo-700` | `primary-700` |
| `indigo-400` | `primary-400` |
| `indigo-100` | `primary-100` |
| `purple-500` | `secondary-500` |
| `gray-700` | `neutral-700` |
| `gray-600` | `neutral-600` |

### Example Migrations

**Before:**
```tsx
<span className="text-indigo-600">Author Name</span>
<button className="bg-indigo-600 hover:bg-indigo-700">Click Me</button>
<div className="bg-indigo-100 text-indigo-700">Card</div>
```

**After:**
```tsx
<span className="text-primary-600">Author Name</span>
<button className="bg-primary-600 hover:bg-primary-700">Click Me</button>
<div className="bg-primary-100 text-primary-700">Card</div>
```

## Files to Update

These files currently use hardcoded colors and should be migrated:

- ✅ `app/layout.tsx` - Navigation, headers
- ✅ `app/page.tsx` - Home page content
- ✅ `app/contact/page.tsx` - Contact form
- ✅ `app/books/*` - Book pages
- ✅ `app/globals.css` - Already using CSS variables

## CSS Variables (for custom CSS)

You can also use CSS variables directly:

```css
.custom-element {
  background-color: var(--color-primary-600);
  color: var(--color-primary-700);
}
```

## Workflow

1. **Edit `app/theme.ts`** - Change your colors
2. **Run `npm run sync-theme`** - Syncs to CSS variables
3. **Use Tailwind classes** - `bg-primary-600`, `text-primary-600`, etc.
4. **Build/Dev** - Changes work immediately!

## Benefits

✅ **Single source of truth** - All colors in one file  
✅ **Type-safe** - TypeScript ensures correct usage  
✅ **Auto-sync** - Script syncs theme to CSS automatically  
✅ **Tailwind integration** - Use familiar Tailwind utilities  
✅ **Easy migration** - Simple find/replace from old classes  

## Need Help?

See `THEME.md` for more details about the theme system structure.

