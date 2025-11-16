/**
 * Centralized Theme Configuration
 * 
 * To change the theme colors throughout the site, modify the values below.
 * All components will automatically use these theme values.
 */

export const theme = {
  // Primary brand colors (Gold/Amber scale)
  primary: {
    50: '#fffbeb',   // Very light gold (almost white with warm yellow tint)
    100: '#fef3c7',  // Light gold (pale yellow-gold)
    200: '#fde68a',  // Lighter gold
    300: '#fcd34d',  // Light-medium gold
    400: '#fbbf24',  // Medium-light gold
    500: '#f59e0b',  // Medium gold (bright amber-gold)
    600: '#d97706',  // Gold (main brand color - used for links, buttons, headings)
    700: '#b45309',  // Dark gold (hover states)
    800: '#92400e',  // Darker gold
    900: '#78350f',  // Very dark gold
  },

  // Secondary accent colors (Warm Amber/Orange scale - for gradients, highlights)
  secondary: {
    50: '#fff7ed',   // Very light amber (almost white with warm orange tint)
    100: '#ffedd5',  // Light amber (pale peach)
    200: '#fed7aa',  // Lighter amber
    300: '#fdba74',  // Light-medium amber
    400: '#fb923c',  // Medium-light amber
    500: '#f97316',  // Amber (main secondary color - warm orange)
    600: '#ea580c',  // Dark amber
    700: '#c2410c',  // Darker amber
    800: '#9a3412',  // Very dark amber
    900: '#7c2d12',  // Deepest amber
  },

  // Neutral/grayscale colors
  neutral: {
    50: '#fafafa',   // Almost white (lightest gray)
    100: '#f5f5f5',  // Very light gray
    200: '#e5e5e5',  // Light gray
    300: '#d4d4d4',  // Medium-light gray
    400: '#a3a3a3',  // Medium gray
    500: '#737373',  // Medium-dark gray
    600: '#525252',  // Dark gray
    700: '#404040',  // Darker gray
    800: '#262626',  // Very dark gray (almost black)
    900: '#171717',  // Nearly black (main text color)
  },

  // Background colors
  background: {
    light: '#ffffff',                    // Pure white
    dark: '#0a0a0a',                     // Very dark (almost black)
    glass: 'rgba(255, 255, 255, 0.6)',   // White with 60% opacity (glass effect)
    glassLight: 'rgba(255, 255, 255, 0.4)', // White with 40% opacity (lighter glass)
    gradientStart: 'rgba(255, 255, 255, 0.9)', // White with 90% opacity
    gradientEnd: 'rgba(240, 240, 255, 0.95)',  // Very light blue-white with 95% opacity
  },

  // Gradient overlay colors (for background effects)
  gradients: {
    primary: {
      start: 'rgba(217, 119, 6, 0.35)', // Gold with 35% opacity (translucent warm gold)
      end: 'transparent',
    },
    secondary: {
      start: 'rgba(249, 115, 22, 0.35)', // Amber with 35% opacity (translucent warm amber)
      end: 'transparent',
    },
  },

  // Border colors
  border: {
    light: 'rgba(255, 255, 255, 0.3)',   // White with 30% opacity (subtle border)
    medium: 'rgba(255, 255, 255, 0.4)',  // White with 40% opacity (more visible border)
  },
} as const;

/**
 * CSS Custom Properties (CSS Variables) mapping
 * These will be injected into :root in globals.css
 */
export const themeCSSVars = {
  '--color-primary-50': theme.primary[50],
  '--color-primary-100': theme.primary[100],
  '--color-primary-200': theme.primary[200],
  '--color-primary-300': theme.primary[300],
  '--color-primary-400': theme.primary[400],
  '--color-primary-500': theme.primary[500],
  '--color-primary-600': theme.primary[600],
  '--color-primary-700': theme.primary[700],
  '--color-primary-800': theme.primary[800],
  '--color-primary-900': theme.primary[900],
  
  '--color-secondary-50': theme.secondary[50],
  '--color-secondary-100': theme.secondary[100],
  '--color-secondary-200': theme.secondary[200],
  '--color-secondary-300': theme.secondary[300],
  '--color-secondary-400': theme.secondary[400],
  '--color-secondary-500': theme.secondary[500],
  '--color-secondary-600': theme.secondary[600],
  '--color-secondary-700': theme.secondary[700],
  '--color-secondary-800': theme.secondary[800],
  '--color-secondary-900': theme.secondary[900],
  
  '--color-neutral-50': theme.neutral[50],
  '--color-neutral-100': theme.neutral[100],
  '--color-neutral-200': theme.neutral[200],
  '--color-neutral-300': theme.neutral[300],
  '--color-neutral-400': theme.neutral[400],
  '--color-neutral-500': theme.neutral[500],
  '--color-neutral-600': theme.neutral[600],
  '--color-neutral-700': theme.neutral[700],
  '--color-neutral-800': theme.neutral[800],
  '--color-neutral-900': theme.neutral[900],
  
  '--color-background-light': theme.background.light,
  '--color-background-dark': theme.background.dark,
  '--color-background-glass': theme.background.glass,
  '--color-background-glass-light': theme.background.glassLight,
  
  '--color-gradient-primary-start': theme.gradients.primary.start,
  '--color-gradient-secondary-start': theme.gradients.secondary.start,
  
  '--color-border-light': theme.border.light,
  '--color-border-medium': theme.border.medium,
} as const;

/**
 * Helper to get Tailwind color class names
 * Example: getPrimaryColor(600) returns 'text-amber-600'
 * 
 * Note: For now, you'll need to manually update Tailwind classes,
 * or we can configure Tailwind to use these CSS variables directly.
 */
export function getPrimaryColor(shade: keyof typeof theme.primary): string {
  // This maps to Tailwind's amber scale (golden theme)
  // You'd need to update Tailwind config to use CSS variables for full support
  return `amber-${shade}`;
}

export function getSecondaryColor(shade: keyof typeof theme.secondary): string {
  return `orange-${shade}`;
}

