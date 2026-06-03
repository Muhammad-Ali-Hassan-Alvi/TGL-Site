// Shim for 'next/font/google' module

type FontOptions = {
  subsets?: string[];
  weight?: string | string[] | number | number[];
  style?: 'normal' | 'italic' | ('normal' | 'italic')[];
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  variable?: string;
};

type FontReturn = {
  className: string;
  style: { fontFamily: string };
  variable: string;
};

function createFontShim(family: string, options?: FontOptions): FontReturn {
  const weights = Array.isArray(options?.weight) 
    ? options?.weight.join(';') 
    : options?.weight || '400';
  
  const subsets = options?.subsets?.join(',') || 'latin';
  
  // Create a CSS variable name from the family
  const cssVar = options?.variable || `--font-${family.toLowerCase().replace(/\s+/g, '-')}`;
  
  // Inject Google Fonts link if in browser
  if (typeof document !== 'undefined') {
    const linkId = `font-${family.toLowerCase().replace(/\s+/g, '-')}`;
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/\s+/g, '+')}:wght@${weights}&display=${options?.display || 'swap'}`;
      document.head.appendChild(link);
    }
  }

  return {
    className: `${cssVar} font-${family.toLowerCase().replace(/\s+/g, '-')}`,
    style: { fontFamily: `"${family}", sans-serif` },
    variable: cssVar,
  };
}

// Common Google Fonts
export function Barlow(options?: FontOptions) {
  return createFontShim('Barlow', options);
}

export function Inter(options?: FontOptions) {
  return createFontShim('Inter', options);
}

export function Roboto(options?: FontOptions) {
  return createFontShim('Roboto', options);
}

export function OpenSans(options?: FontOptions) {
  return createFontShim('Open Sans', options);
}

export function Lato(options?: FontOptions) {
  return createFontShim('Lato', options);
}

export function Montserrat(options?: FontOptions) {
  return createFontShim('Montserrat', options);
}

export function Poppins(options?: FontOptions) {
  return createFontShim('Poppins', options);
}

export function Nunito(options?: FontOptions) {
  return createFontShim('Nunito', options);
}
