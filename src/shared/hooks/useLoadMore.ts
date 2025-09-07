import { Ref, RefObject, useEffect } from "react";


export const useLoadMore = (
  ref: RefObject<HTMLDivElement | null>,
  isFetching?: boolean,
  isError?: boolean,
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