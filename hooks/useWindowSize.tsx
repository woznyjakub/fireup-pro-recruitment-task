import { useState, useEffect } from 'react';
import { WindowDimensions } from '@entities/window';

const debounce = (callback, timeoutMs): (() => void) => {
  let timeoutIndex;

  return () => {
    clearTimeout(timeoutIndex);

    timeoutIndex = setTimeout(() => {
      timeoutIndex = null;
      callback();
    }, timeoutMs);
  };
};

/**
 * function that returns WindowDimensions when CSR and an empty object when SSR
 * @param isCSR parameter that forces a render on site enter
 */
export const useWindowSize = (isCSR?: boolean): WindowDimensions => {
  const isWindowDefined = typeof window !== 'undefined';
  const [windowDimensions, setWindowDimentions] = useState<WindowDimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      if (isWindowDefined) {
        setWindowDimentions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }, 300);

    if (isWindowDefined) {
      window.addEventListener('resize', debouncedHandleResize);
    }

    if (isCSR) {
      debouncedHandleResize();
    }

    return () => {
      if (isWindowDefined) {
        window.removeEventListener('resize', debouncedHandleResize);
      }
    };
  }, []);

  return windowDimensions;
};
