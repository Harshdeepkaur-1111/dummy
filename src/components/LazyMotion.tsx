import React from 'react';

type MotionElementProps = React.ComponentPropsWithoutRef<'div'> & {
  tag?: keyof JSX.IntrinsicElements;
};

const MotionLoader = React.lazy(() =>
  import('motion/react').then((m) => ({
    default: ({ tag = 'div', ...props }: MotionElementProps) => {
      const MotionTag = (m.motion as any)[tag] || m.motion.div;
      return React.createElement(MotionTag, props as any);
    },
  }))
);

export default function LazyMotion(props: MotionElementProps) {
  return <MotionLoader {...props} />;
}
