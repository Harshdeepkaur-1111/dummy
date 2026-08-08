import type { ImgHTMLAttributes } from "react";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

export default function OptimizedImage({
  src,
  alt = "",
  width,
  height,
  priority = false,
  sizes,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
      {...props}
    />
  );
}