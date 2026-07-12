import { useEffect, useState } from 'react';
const getDeviceType = (width: number) => {
  if (width < 640) return 'mobile';
  if (width < 768) return 'tablet';
  if (width < 1024) return 'tablet';
  return 'desktop';
};
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getDeviceType(window.innerWidth));
useEffect(() => {
    const handleResize = () => setBreakpoint(getDeviceType(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
return breakpoint;
};