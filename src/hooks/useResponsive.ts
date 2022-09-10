import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [size, setSize] = useState<number>(window.innerWidth);
  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
  }, []);

  return size;
};
export default useResponsive;
