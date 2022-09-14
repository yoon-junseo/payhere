import { useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import { useInView } from 'react-intersection-observer';

interface UseInfiniteScrollProps {
  key: string | string[];
  isPaused?: () => boolean;
  api: (key: string, pageIndex: number) => Promise<any>;
}

const useInfiniteScroll = ({ key, isPaused, api }: UseInfiniteScrollProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: '50px',
  });

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return [`${key}&page=${pageIndex}`, pageIndex];
  };

  const { data, isValidating, error, setSize } = useSWRInfinite(getKey, api, {
    shouldRetryOnError: false,
    revalidateOnMount: true,
    revalidateIfStale: true,
    isPaused: isPaused ? () => isPaused() : () => false,
  });

  useEffect(() => {
    if (!inView) return;
    setSize((prev) => prev + 1);
  }, [inView]);

  return {
    data: data?.flat(),
    isValidating,
    error,
    ref,
  };
};

export default useInfiniteScroll;
