// Shim for 'next' module - provides Metadata type

export interface Metadata {
  title?: string | { default?: string; template?: string };
  description?: string;
  keywords?: string | string[];
  authors?: { name: string; url?: string }[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: { url: string; width?: number; height?: number; alt?: string }[];
    locale?: string;
    type?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'player' | 'app';
    title?: string;
    description?: string;
    images?: string | { url: string; alt?: string }[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  alternates?: {
    canonical?: string;
  };
  icons?: {
    icon?: string | { url: string; sizes?: string; type?: string }[];
    shortcut?: string;
    apple?: string | { url: string; sizes?: string }[];
  };
  viewport?: string | { width?: string; height?: string; initialScale?: number; maximumScale?: number; userScalable?: boolean };
  metadataBase?: URL | null;
}
