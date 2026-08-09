'use client';

import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  /** Each array item renders as one animated line */
  lines: React.ReactNode[];
  className?: string;
  /** Class applied to every inner line element */
  lineClassName?: string;
  /** ms between each line starting (default 120) */
  staggerMs?: number;
  /** ms delay before the first line fires (default 0) */
  baseDelayMs?: number;
  /** Wrapper element to render as — e.g. 'h1' for a page hero heading. Defaults to 'div'. */
  as?: React.ElementType;
}

/**
 * Webflow-style clip-slide-up reveal.
 * Each line starts hidden below an overflow:hidden clip and slides into view
 * when the component enters the viewport.
 *
 * The clip carries extra room at the bottom (pb plus a matching -mb, so the
 * flow is unchanged). These headings run tight leading — 0.92 to 1.0 — which
 * makes the line box shorter than the glyphs, so without that room the clip
 * shaves the tails off g/j/y for the whole life of the page. The padding is in
 * em, which is why call sites set their font-size on the wrapper rather than on
 * the individual lines.
 *
 * The hidden line then has to start below the enlarged clip too, hence 155%
 * rather than a bare 110% — otherwise the tops of the letters sit inside the
 * padding and show before the line is released.
 */
export const TextReveal = ({
  lines,
  className = '',
  lineClassName = '',
  staggerMs = 120,
  baseDelayMs = 0,
  as: Wrapper = 'div',
}: TextRevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    /* flex-col stops each line's negative margin collapsing out into the
       wrapper, so the wrapper's own height stays exactly what it was. */
    <Wrapper ref={ref} className={`flex flex-col ${className}`}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden pb-[0.25em] -mb-[0.25em]">
          <div
            className={`transition-[opacity,transform] duration-700 ${lineClassName} ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[155%]'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: visible ? `${baseDelayMs + i * staggerMs}ms` : '0ms',
            }}
          >
            {line}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
