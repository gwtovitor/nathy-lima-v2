import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll({ threshold = 0.2, root = null, rootMargin = "0px", once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(element); 
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, once]);

  return [isVisible, ref];
}
