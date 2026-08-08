import {
  Suspense,
  lazy,
  useEffect,
  useState,
  type ReactNode,
  type CSSProperties,
  type ElementType,
} from "react";

import type {
  TargetAndTransition,
  Transition,
  ViewportOptions,
} from "motion/react";

type LazyMotionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  role?: string;
  title?: string;
  style?: CSSProperties;

  "aria-label"?: string;
  "aria-labelledby"?: string;

  tag?: ElementType;

  initial?: TargetAndTransition | boolean;
  animate?: TargetAndTransition;
  whileInView?: TargetAndTransition;
  viewport?: ViewportOptions;
  transition?: Transition;
};

/* =========================================================
   STATIC FALLBACK
   ========================================================= */

function StaticFallback({
  children,
  className,
  tag: Tag = "div",
  ...rest
}: LazyMotionProps) {
  const Component = Tag as ElementType;

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}

/* =========================================================
   MOTION COMPONENT
   ========================================================= */

const AnimatedMotion = lazy(async () => {
  const { motion } = await import("motion/react");

  const Animated = ({
    children,
    className,
    tag = "div",
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    ...rest
  }: LazyMotionProps) => {
    const MotionComponent = motion.create(tag as ElementType);

    return (
      <MotionComponent
        className={className}
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        {...rest}
      >
        {children}
      </MotionComponent>
    );
  };

  return {
    default: Animated,
  };
});

/* =========================================================
   LAZY MOTION
   ========================================================= */

export default function LazyMotion(props: LazyMotionProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  /*
   * Reduced motion:
   * Don't load motion library.
   */
  if (reducedMotion) {
    return <StaticFallback {...props} />;
  }

  return (
    <Suspense fallback={<StaticFallback {...props} />}>
      <AnimatedMotion {...props} />
    </Suspense>
  );
}