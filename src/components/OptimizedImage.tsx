import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

export function OptimizedImage({ src, alt, width, height, priority, sizes, className, ...rest }: Props) {
  const match = src.match(/^\/images\/.+\.(jpe?g|png|webp|avif)$/i);
  const isLocalImage = Boolean(match);

  // compute possible variants
  const avif = isLocalImage
    ? src.replace(/\.(jpe?g|png|webp|avif)$/i, '.avif')
    : undefined;
  const webp = isLocalImage
    ? src.replace(/\.(jpe?g|png|webp|avif)$/i, '.webp')
    : undefined;

  const fallbackSrc = src;

  return (
    <picture>
      {isLocalImage && avif && <source srcSet={avif} type="image/avif" />}
      {isLocalImage && webp && <source srcSet={webp} type="image/webp" />}
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={className}
        sizes={sizes}
        {...rest}
      />
    </picture>
  );
}

export default OptimizedImage;
