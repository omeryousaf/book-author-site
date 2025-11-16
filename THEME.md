# Theme Configuration Guide

This site uses a centralized theme system for easy customization.

## Quick Start

To change the theme colors across the entire site, edit **`app/theme.ts`**. The values in this file define all theme colors used throughout the application.

## How It Works

1. **Theme Definition** (`app/theme.ts`): 
   - Contains all theme color definitions
   - Currently uses indigo/purple color scheme
   - Includes primary, secondary, neutral, background, gradient, and border colors

2. **CSS Variables** (`app/globals.css`):
   - Theme values are exposed as CSS custom properties (variables)
   - Components can reference these via `var(--color-primary-600)` etc.

3. **Tailwind Classes**:
   - Currently uses Tailwind's built-in `indigo-*` and `purple-*` classes
   - To fully use the theme system, you can:
     - Option A: Replace Tailwind classes with CSS variables where needed
     - Option B: Configure Tailwind to use your theme colors (requires tailwind.config.js)

## Changing Theme Colors

### Example: Change Primary Color from Indigo to Blue

1. Open `app/theme.ts`
2. Update the `primary` color values:
   ```typescript
   primary: {
     600: '#2563eb', // Changed from indigo-600 to blue-600
     700: '#1d4ed8', // Changed from indigo-700 to blue-700
     // ... etc
   }
   ```
3. Update `app/globals.css` CSS variables to match:
   ```css
   :root {
     --color-primary-600: #2563eb;
     --color-primary-700: #1d4ed8;
   }
   ```
4. Replace Tailwind classes in components from `indigo-*` to `blue-*`:
   - Find: `text-indigo-600`
   - Replace: `text-blue-600`

### Example: Change to a Custom Color Scheme

1. Update `app/theme.ts` with your custom colors
2. Update corresponding CSS variables in `app/globals.css`
3. Update Tailwind classes throughout the codebase, or configure Tailwind to use your theme

## Theme Colors Reference

### Primary Colors
- `primary.600` - Main brand color (links, buttons, headings)
- `primary.700` - Hover states
- `primary.400` - Lighter variant
- `primary.100` - Backgrounds

### Secondary Colors
- `secondary.500` - Accent color (gradients, highlights)

### Usage Locations

**Hardcoded colors found in:**
- `app/layout.tsx` - Navigation, headers, gradients
- `app/page.tsx` - Home page content
- `app/contact/page.tsx` - Contact form
- `app/books/*` - Book pages
- `app/globals.css` - Global styles and gradients

## Future Improvements

To make the theme system fully automatic:

1. **Create a Tailwind config** that uses CSS variables:
   ```js
   // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: {
             600: 'var(--color-primary-600)',
             // etc.
           }
         }
       }
     }
   }
   ```

2. **Use CSS variables directly** in components instead of Tailwind classes

3. **Sync script**: Create a build script that syncs `theme.ts` values to CSS variables automatically

## Current Theme: Indigo/Purple

The site currently uses:
- **Primary**: Indigo (`#4f46e5`, `#4338ca`)
- **Secondary**: Purple (`#a855f7`)
- **Neutrals**: Grayscale (`#171717` to `#ffffff`)


