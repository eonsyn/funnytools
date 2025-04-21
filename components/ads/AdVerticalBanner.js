'use client';
import { useEffect } from 'react';

export default function AdVerticalBanner() {
  useEffect(() => {
    // Inject the inline configuration script
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : 'bdcd4e16546983c7afbcb3eaaffd1bc7',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;

    // Inject the external invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//compassionunsuccessful.com/bdcd4e16546983c7afbcb3eaaffd1bc7/invoke.js';
    invokeScript.async = true;
    invokeScript.setAttribute('data-cfasync', 'false');

    const container = document.getElementById('vertical-ad-slot');
    if (container) {
      container.appendChild(configScript);
      container.appendChild(invokeScript);
    }

    // Cleanup
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full md:w-auto flex justify-center my-6">
      <div
        id="vertical-ad-slot"
        className="w-[160px] h-[300px] bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
      >
        {/* Ad will be injected here */}
      </div>
    </div>
  );
}
