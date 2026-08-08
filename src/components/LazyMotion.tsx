import type { ReactNode, CSSProperties } from "react";

type LazyMotionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  role?: string;
  title?: string;
  style?: CSSProperties;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

export default function LazyMotion({
  children,
  className,
  ...props
}: LazyMotionProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}