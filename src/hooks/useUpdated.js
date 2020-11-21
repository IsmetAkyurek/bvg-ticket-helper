import { useRef, useEffect, useState } from 'react';

const useUpdated = (callback, props) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      if (JSON.stringify(props) !== JSON.stringify(ref.current)) {
        const current = props;
        const prev = ref.current;
        callback && callback(current, prev);
        ref.current = props;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, callback]);
};

export default useUpdated;