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
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  viewport?: ViewportOptions;
  transition?: Transition;
  [key: string]: any;
};

const MOTION_PROP_KEYS = new Set([
  "initial",
  "animate",
  "whileInView",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "viewport",
  "transition",
  "variants",
  "exit",
  "layout",
  "layoutId",
  "layoutDependency",
  "layoutScroll",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onViewportEnter",
  "onViewportLeave",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "tag",
]);

function getDomProps(props: Record<string, any>) {
  const domProps: Record<string, any> = {};
  for (const key of Object.keys(props)) {
    if (!MOTION_PROP_KEYS.has(key)) {
      domProps[key] = props[key];
    }
  }
  return domProps;
}

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
  const domProps = getDomProps(rest);

  return (
    <Component className={className} {...domProps}>
      {children}
    </Component>
  );
}

/* =========================================================
   MOTION COMPONENT
   ========================================================= */

const AnimatedMotion = lazy(async () => {
  const { motion } = await import("motion/react");

  const componentCache = new Map<any, any>();

  const getMotionComponent = (tag: ElementType) => {
    if (typeof tag === "string" && (motion as any)[tag]) {
      return (motion as any)[tag];
    }
    if (!componentCache.has(tag)) {
      componentCache.set(tag, motion.create(tag));
    }
    return componentCache.get(tag);
  };

  const Animated = ({
    children,
    className,
    tag = "div",
    initial,
    animate,
    whileInView,
    whileHover,
    whileTap,
    viewport,
    transition,
    ...rest
  }: LazyMotionProps) => {
    const MotionComponent = getMotionComponent(tag as ElementType);
    const domProps = getDomProps(rest);

    return (
      <MotionComponent
        className={className}
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        whileHover={whileHover}
        whileTap={whileTap}
        viewport={viewport}
        transition={transition}
        {...domProps}
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