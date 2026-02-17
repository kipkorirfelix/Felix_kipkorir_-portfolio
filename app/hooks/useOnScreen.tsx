"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns an element ref and whether that element is currently visible.
 */
export function useOnScreen<T extends Element>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );

    const target = ref.current;
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIntersecting] as const;
}
