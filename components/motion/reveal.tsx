"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Position in a stagger group; each step adds 40ms. */
  index?: number;
  as?: "div" | "li";
}

/**
 * Fade-up 16px, once, as soon as it enters the view.
 *
 * The hidden state lives in CSS behind html[data-js="on"] (set by an inline
 * script before first paint) rather than in an inline style, so the content is
 * fully visible when JS is off or still loading — a Framer `initial` would ship
 * opacity:0 in the server HTML and blank the page until hydration.
 */
export function Reveal({ children, className, index = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => element.setAttribute("data-revealed", "");

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Component = as;

  return (
    <Component
      ref={ref}
      data-reveal=""
      style={{ transitionDelay: `${index * 40}ms` }}
      className={className}
    >
      {children}
    </Component>
  );
}
