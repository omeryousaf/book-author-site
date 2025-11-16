/**
 * Syncs theme.ts colors to globals.css CSS variables
 * Run with: node scripts/sync-theme.js
 */

const fs = require('fs');
const path = require('path');

// Read theme.ts
const themePath = path.join(__dirname, '../app/theme.ts');
const themeContent = fs.readFileSync(themePath, 'utf-8');

// Extract color values from theme.ts using regex
const extractColors = () => {
  const colors = {
    primary: {},
    secondary: {},
    neutral: {},
    gradients: {
      primary: { start: null },
      secondary: { start: null }
    },
    background: {},
    border: {}
  };

  // Extract primary colors
  const primaryMatch = themeContent.match(/primary:\s*\{([^}]+)\}/s);
  if (primaryMatch) {
    const primaryContent = primaryMatch[1];
    for (let i = 0; i <= 900; i += 50) {
      const regex = new RegExp(`${i}:\\s*['"]([^'"]+)['"]`);
      const match = primaryContent.match(regex);
      if (match) {
        colors.primary[i] = match[1];
      }
    }
  }

  // Extract secondary colors
  const secondaryMatch = themeContent.match(/secondary:\s*\{([^}]+)\}/s);
  if (secondaryMatch) {
    const secondaryContent = secondaryMatch[1];
    for (let i = 0; i <= 900; i += 50) {
      const regex = new RegExp(`${i}:\\s*['"]([^'"]+)['"]`);
      const match = secondaryContent.match(regex);
      if (match) {
        colors.secondary[i] = match[1];
      }
    }
  }

  // Extract neutral colors
  const neutralMatch = themeContent.match(/neutral:\s*\{([^}]+)\}/s);
  if (neutralMatch) {
    const neutralContent = neutralMatch[1];
    for (let i = 0; i <= 900; i += 50) {
      const regex = new RegExp(`${i}:\\s*['"]([^'"]+)['"]`);
      const match = neutralContent.match(regex);
      if (match) {
        colors.neutral[i] = match[1];
      }
    }
  }

  // Extract gradients
  const gradientPrimaryMatch = themeContent.match(/primary:\s*\{\s*start:\s*['"]([^'"]+)['"]/);
  if (gradientPrimaryMatch) {
    colors.gradients.primary.start = gradientPrimaryMatch[1];
  }
  const gradientSecondaryMatch = themeContent.match(/secondary:\s*\{\s*start:\s*['"]([^'"]+)['"]/);
  if (gradientSecondaryMatch) {
    colors.gradients.secondary.start = gradientSecondaryMatch[1];
  }

  // Extract background colors
  const backgroundMatch = themeContent.match(/background:\s*\{([^}]+)\}/s);
  if (backgroundMatch) {
    const backgroundContent = backgroundMatch[1];
    const lightMatch = backgroundContent.match(/light:\s*['"]([^'"]+)['"]/);
    if (lightMatch) colors.background.light = lightMatch[1];
    const darkMatch = backgroundContent.match(/dark:\s*['"]([^'"]+)['"]/);
    if (darkMatch) colors.background.dark = darkMatch[1];
    const glassMatch = backgroundContent.match(/glass:\s*['"]([^'"]+)['"]/);
    if (glassMatch) colors.background.glass = glassMatch[1];
    const glassLightMatch = backgroundContent.match(/glassLight:\s*['"]([^'"]+)['"]/);
    if (glassLightMatch) colors.background.glassLight = glassLightMatch[1];
  }

  // Extract border colors
  const borderMatch = themeContent.match(/border:\s*\{([^}]+)\}/s);
  if (borderMatch) {
    const borderContent = borderMatch[1];
    const lightMatch = borderContent.match(/light:\s*['"]([^'"]+)['"]/);
    if (lightMatch) colors.border.light = lightMatch[1];
    const mediumMatch = borderContent.match(/medium:\s*['"]([^'"]+)['"]/);
    if (mediumMatch) colors.border.medium = mediumMatch[1];
  }

  return colors;
};

// Update globals.css with theme colors
const updateGlobalsCSS = (colors) => {
  const globalsPath = path.join(__dirname, '../app/globals.css');
  let globalsContent = fs.readFileSync(globalsPath, 'utf-8');

  // Update primary colors in :root
  Object.keys(colors.primary).forEach(shade => {
    const regex = new RegExp(`(--color-primary-${shade}:\\s*)([^;]+)(;.*?)`, 'g');
    globalsContent = globalsContent.replace(regex, `$1${colors.primary[shade]}$3`);
  });

  // Update secondary colors in :root
  Object.keys(colors.secondary).forEach(shade => {
    const regex = new RegExp(`(--color-secondary-${shade}:\\s*)([^;]+)(;.*?)`, 'g');
    globalsContent = globalsContent.replace(regex, `$1${colors.secondary[shade]}$3`);
  });

  // Update neutral colors in :root
  Object.keys(colors.neutral).forEach(shade => {
    const regex = new RegExp(`(--color-neutral-${shade}:\\s*)([^;]+)(;.*?)`, 'g');
    globalsContent = globalsContent.replace(regex, `$1${colors.neutral[shade]}$3`);
  });

  // Update gradients
  if (colors.gradients.primary.start) {
    globalsContent = globalsContent.replace(
      /(--color-gradient-primary:\s*)([^;]+)(;)/,
      `$1${colors.gradients.primary.start}$3`
    );
  }
  if (colors.gradients.secondary.start) {
    globalsContent = globalsContent.replace(
      /(--color-gradient-secondary:\s*)([^;]+)(;)/,
      `$1${colors.gradients.secondary.start}$3`
    );
  }

  // Update background colors
  if (colors.background.light) {
    globalsContent = globalsContent.replace(
      /(--color-background-light:\s*)([^;]+)(;)/,
      `$1${colors.background.light}$3`
    );
  }
  if (colors.background.dark) {
    globalsContent = globalsContent.replace(
      /(--color-background-dark:\s*)([^;]+)(;)/,
      `$1${colors.background.dark}$3`
    );
  }
  if (colors.background.glass) {
    globalsContent = globalsContent.replace(
      /(--color-background-glass:\s*)([^;]+)(;)/,
      `$1${colors.background.glass}$3`
    );
  }
  if (colors.background.glassLight) {
    globalsContent = globalsContent.replace(
      /(--color-background-glass-light:\s*)([^;]+)(;)/,
      `$1${colors.background.glassLight}$3`
    );
  }

  // Update border colors
  if (colors.border.light) {
    globalsContent = globalsContent.replace(
      /(--color-border-light:\s*)([^;]+)(;)/,
      `$1${colors.border.light}$3`
    );
  }
  if (colors.border.medium) {
    globalsContent = globalsContent.replace(
      /(--color-border-medium:\s*)([^;]+)(;)/,
      `$1${colors.border.medium}$3`
    );
  }

  // Update glass colors
  if (colors.background.glass) {
    globalsContent = globalsContent.replace(
      /(--color-glass-bg:\s*)([^;]+)(;)/,
      `$1${colors.background.glass}$3`
    );
  }
  if (colors.background.glassLight) {
    globalsContent = globalsContent.replace(
      /(--color-glass-bg-light:\s*)([^;]+)(;)/,
      `$1${colors.background.glassLight}$3`
    );
  }
  if (colors.border.light) {
    globalsContent = globalsContent.replace(
      /(--color-glass-border:\s*)([^;]+)(;)/,
      `$1${colors.border.light}$3`
    );
  }
  if (colors.border.medium) {
    globalsContent = globalsContent.replace(
      /(--color-glass-border-medium:\s*)([^;]+)(;)/,
      `$1${colors.border.medium}$3`
    );
  }

  fs.writeFileSync(globalsPath, globalsContent, 'utf-8');
  console.log('✅ Theme colors synced to globals.css');
};

// Run the sync
try {
  const colors = extractColors();
  updateGlobalsCSS(colors);
  console.log('✨ Theme sync complete!');
} catch (error) {
  console.error('❌ Error syncing theme:', error.message);
  process.exit(1);
}

