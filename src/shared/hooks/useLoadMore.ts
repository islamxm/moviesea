import { Ref, RefObject, useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

export const useLoadMore = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  isFetching?: boolean,
  onLoadMore?: (...args: any[]) => void,
) => {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching) {
        onLoadMore?.()
      }
    }, {
      root: null,
      rootMargin: '200px',
      threshold: 1.0,
    });
    
    if(ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };

  }, [isFetching, ref]);
}