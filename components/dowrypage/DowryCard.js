'use client';

import React, { useRef, useState, useEffect } from 'react';
import { toPng } from 'html-to-image';


import { QRCodeCanvas } from 'qrcode.react';

const formatText = (text) => {
  if (!text) return null;
  text = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
  text = text.replace(/(^|\s)'([^']+?)'(?=\s|$)/g, '$1<em>$2</em>');
  return text;
};

export default function DowryCard({ clearResponse, profession, dowry, response, name }) {
  const cardRef = useRef();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

 
  const downloadCard = async () => {
    const cardElement = cardRef.current;
    if (!cardElement) return;
  
    // Add a temporary class to clean up styles
    cardElement.classList.add('export-cleanup');
  
    try {
      const dataUrl = await toPng(cardElement, {
        backgroundColor: 'white',
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
      });
  
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'dowry-card.png';
      link.click();
    } catch (error) {
      console.error('Export failed', error);
    } finally {
      // Remove the cleanup class
      cardElement.classList.remove('export-cleanup');
    }
  };
  


  if (!response) return null;

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div ref={cardRef} className="w-full max-w-md p-4 rounded-2xl mx-auto">
        <div className="p-6 bg-white border-2 border-gray-300 shadow-md rounded-xl font-sans">
          {/* Profile section */}
          <div className="flex items-center gap-2 pb-2">
            <div className="w-16 h-16 bg-red-900 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-600">{profession}singh</p>
            </div>
          </div>

          <hr />

          {/* Dowry Info */}
          <div className="text-red-900 font-medium mb-2">
            <span className="font-bold text-lg text-black font-serif">Dowry:</span>
            <p>Rs {dowry}</p>
          </div>

          {/* Conditions */}
          <div className="text-black text-sm mb-2">
            <p>
              <span className="font-bold text-lg font-serif">Condition:</span>
              <ul className="list-disc pl-4">
                {Object.entries(response.recommended_dowry).map(([key, value]) => (
                  <li key={key} dangerouslySetInnerHTML={{ __html: formatText(value) }} />
                ))}
              </ul>
            </p>
            <p>
              <span className="font-bold text-lg font-serif">Random person:</span>
              <span
                className="block"
                dangerouslySetInnerHTML={{ __html: formatText(response.reasoning) }}
              />
            </p>
          </div>

          {/* Button & QR */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={clearResponse}
              className="bg-slate-400 text-white text-sm px-4 py-2 rounded-md font-serif transition hover:bg-slate-500"
            >
              Calculate your own Dowry
            </button>
            <QRCodeCanvas value="https://dowryai.netlify.app" size={48} />
          </div>

          {/* Footer */}
          <p className="text-xs text-red-600 text-center mt-3 italic">
            Do not accept or give dowry
          </p>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={downloadCard}
          className="bg-green-400 text-white px-6 py-3 text-base font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Download Card
        </button>
      </div>
    </div>
  );
}
