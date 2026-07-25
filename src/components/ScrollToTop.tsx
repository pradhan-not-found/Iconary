import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutid: ReturnType<typeof setTimeout> | undefined;
    // If there is a hash, we scroll to that element.
    if (hash) {
      timeoutid = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // Otherwise, scroll to top on route change.
      window.scrollTo(0, 0);
    }
    return () => {
      clearTimeout(timeoutid);
    };
  }, [pathname, hash]);

  return null;
}
