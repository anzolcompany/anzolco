import { useRef } from "react";

/**
 * Tracks IME (Input Method Editor) composition state.
 * Prevents Enter key from triggering submit during CJK character composition.
 */
export function useComposition() {
  const isComposing = useRef(false);

  const onCompositionStart = () => {
    isComposing.current = true;
  };

  const onCompositionEnd = () => {
    isComposing.current = false;
  };

  return {
    isComposing,
    onCompositionStart,
    onCompositionEnd,
  };
}
