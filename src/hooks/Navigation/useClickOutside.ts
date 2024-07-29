import { RefObject, useEffect, useRef, useState } from 'react';

interface UseClickOutsideProps {
  initialIsFocused?: boolean;
  onOutsideClick?: () => void;
}
function useClickOutside<T extends HTMLElement>({
  initialIsFocused = false,
  onOutsideClick,
}: UseClickOutsideProps) {
  const [isFocused, setIsFocused] = useState(initialIsFocused);
  const ref: RefObject<T> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsFocused(false);
        if (onOutsideClick) onOutsideClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return { ref, isFocused, setIsFocused };
}
export default useClickOutside;
