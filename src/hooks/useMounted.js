import { useEffect, useState } from 'react';

const useMounted = (callback) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      callback && callback();
    }
  }, [mounted, callback]);
};

export default useMounted;