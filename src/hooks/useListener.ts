import React, {useEffect} from 'react';

const useListener = (
  eventName: string,
  ref: React.MutableRefObject<HTMLElement>,
  listener: (event: Event) => void
) => {
  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener(eventName, listener);
    return () => {
      ref.current.removeEventListener(eventName, listener);
    };
  }, [ref]);
};

export {
  useListener
};
