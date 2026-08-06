import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

export function OptimizedImage({ src, alt, width, height, priority, sizes, className, ...rest }: Props) {
  const avif = src.replace(/\.(jpe?g|png|webp)$/i, '.avif');
  const webp = src.replace(/\.(jpe?g|png|avif)$/i, '.webp');

  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={webp}
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
