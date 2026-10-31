export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'fill';
}

/**
 * Generates an optimized, modern WebP image URL via Netlify Edge Image CDN in production.
 * In local development, falls back gracefully to local static assets for fast offline DX.
 */
export function getOptimizedImageUrl(
  src: string | undefined | null,
  options: ImageOptimizationOptions = {}
): string {
  if (!src) return '/images/recipes/default-skillet.jpg';

  // Only transform internal site assets (starting with /)
  if (!src.startsWith('/') || src.startsWith('//')) {
    return src;
  }

  // In local development, serve direct local file
  if (!import.meta.env.PROD) {
    return src;
  }

  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    fit = 'cover',
  } = options;

  const params = new URLSearchParams();
  params.set('url', src);
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (fit && height) params.set('fit', fit);
  params.set('q', quality.toString());
  params.set('fm', format);

  return `/.netlify/images?${params.toString()}`;
}

/**
 * Generates a responsive srcset string for picture or img tags using Netlify Image CDN.
 * Returns undefined in dev so browsers fall back cleanly to raw src.
 */
export function getResponsiveImageSrcSet(
  src: string | undefined | null,
  widths: number[] = [400, 640, 960],
  options: Omit<ImageOptimizationOptions, 'width'> = {}
): string | undefined {
  if (!src || !src.trim() || !import.meta.env.PROD || !widths.length) return undefined;
  if (!src.startsWith('/') || src.startsWith('//')) return undefined;

  return widths
    .map((w) => `${getOptimizedImageUrl(src, { ...options, width: w })} ${w}w`)
    .join(', ');
}
