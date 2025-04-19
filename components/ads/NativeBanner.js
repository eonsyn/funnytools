'use client';
import { useEffect } from 'react';

export default function NativeBanner() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//compassionunsuccessful.com/077c1c7a577775e4f7a356ff8b0bd378/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);

    return () => {
      // Clean up if necessary (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="container-077c1c7a577775e4f7a356ff8b0bd378" className="w-full  " />
  );
}
