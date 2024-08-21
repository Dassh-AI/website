import { useEffect, useState } from "react";

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    setWidth(currentWidth);
    setHeight(currentHeight);

    // Assuming mobile devices are considered to have a width less than or equal to 768px
    const mobileBreakpoint = 768;
    setIsMobile(currentWidth <= mobileBreakpoint);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    width,
    height,
    isMobile,
  };
};

export default useDeviceSize;
