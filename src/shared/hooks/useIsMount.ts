import { useRef, useEffect } from "react";

/**
 * @returns {boolean} is component initial
 */
export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
