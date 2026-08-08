import {
  Suspense,
  lazy,
  useState,
  useEffect,
  type ReactNode,
  type CSSProperties,
  type ElementType,
} from "react";
import type { TargetAndTransition, Transition, ViewportOptions } from "motion/react";

type LazyMotionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  role?: string;
  title?: string;
  style?: CSSProperties;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  /** HTML tag to render, e.g. "section", "article". Defaults to "div". */
  tag?: ElementType;
  /** Animation start state, applied on mount. */
  initial?: TargetAndTransition | boolean;
  /** Animation end state, applied on mount (runs alongside `initial`). */
  animate?: TargetAndTransition;
  /** Animation end state, applied once the element scrolls into view. */
  whileInView?: TargetAndTransition;
  /** Viewport options used together with `whileInView`. */
  viewport?: ViewportOptions;
  /** Transition/easing config shared by `animate`/`whileInView`. */
  transition?: Transition;
};

// Plain, non-animated fallback so content is never blocked while the
// `motion` library chunk is downloading (and works if it fails to load).
function StaticFallback({
  children,
  className,
  tag: Tag = "div",
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  ...rest
}: LazyMotionProps) {
  void initial;
  void animate;
  void whileInView;
  void viewport;
  void transition;
  const Component = Tag as ElementType;
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}

// The real animated version, loaded lazily so `motion` is only pulled into
// the bundle once it's actually needed (keeps first paint fast).
const AnimatedMotion = lazy(async () => {
  const { motion } = await import("motion/react");
  return {
    default: function Animated({
      children,
      className,
      tag = "div",
      initial,
      animate,
      whileInView,
      viewport,
      transition,
      ...rest
    }: LazyMotionProps) {
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
    },
  };
});

export default function LazyMotion(props: LazyMotionProps) {
  // Respect prefers-reduced-motion: skip loading/using the animation
  // library entirely for users who've asked for less motion.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  if (reducedMotion) {
    return <StaticFallback {...props} />;
  }

  return (
    <Suspense fallback={<StaticFallback {...props} />}>
      <AnimatedMotion {...props} />
    </Suspense>
  );
}