import React from 'react';
import type { HTMLMotionProps } from 'motion/react';

type MotionElementProps = HTMLMotionProps<'div'> & {
  tag?: React.ElementType;
};

const MotionLoader = React.lazy(() =>
  import('motion/react').then((m) => ({
    default: ({ tag = 'div', ...props }: MotionElementProps) => {
      const MotionTag = (m.motion as any)[tag as string] || m.motion.div;
      return React.createElement(MotionTag, props as any);
    },
  }))
);

export default function LazyMotion(props: MotionElementProps) {
  return <MotionLoader {...props} />;
}
