'use client';

import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { QRCodeCanvas } from 'qrcode.react';

const formatText = (text) => {
    if (!text) return null;
    text = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    text = text.replace(/(^|\s)'([^']+?)'(?=\s|$)/g, '$1<em>$2</em>');
    return text;
};

export default function DowryCard({ clearResponse,   profession, dowry,response, name }) {
    const cardRef = useRef();
    const [isMobile, setIsMobile] = useState(true);

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const downloadCard = async () => {
        const canvas = await html2canvas(cardRef.current, {
            useCORS: true,
            backgroundColor: null,
        });
        const link = document.createElement('a');
        link.download = 'dowry-card.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    if (!response) return null;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                 
                width: '100%',
                
            }}
        >
            <div
                ref={cardRef}
                style={{
                    width: '100%',
                     
                    margin: '0 auto',
                    
                    padding: '16px',
                    borderRadius: '20px',
                     
                }}
            >
                <div
  style={{
    maxWidth: '24rem',
    margin: '0 auto',
    padding: '1.5rem',
    fontFamily: 'var(--font-primary)',
    borderRadius: '1rem',
    backgroundColor: 'white',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    border: '2px solid #D1D5DB',
  }}
>
  {/* Profile image placeholder */}
  <div
    style={{
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      width: '100%',
    }}
  >
    <div
      style={{
        width: '4rem',
        height: '4rem',
        borderRadius: '9999px',
        backgroundColor: '#6b1e1e',
      }}
    />
    {/* Name and Profession */}
    <div>
      <h2
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#2e2e2e',
        }}
      >
        {name}
      </h2>
      <p
        style={{
          fontSize: '0.875rem',
          color: '#4B5563',
        }}
      >
        {profession}
      </p>
    </div>
  </div>

  <hr />

  {/* Dowry Info */}
  <div
    style={{
      color: '#6b1e1e',
      fontWeight: 500,
      marginBottom: '0.5rem',
    }}
  >
    <span
      style={{
        fontWeight: 600,
        fontSize:"1.4rem",
        fontFamily: 'var(--font-secondary)',
        color: 'black',
      }}
    >
      Dowry:
    </span>{' '}
    <p 
    style={{
        
    }}>
         Rs {dowry}
    </p>
   
  </div>

  {/* Conditions */}
  <div
    style={{
      fontSize: '0.875rem',
      color: 'black',
      marginBottom: '0.5rem',
    }}
  >
    <p>
      <span
        style={{
          fontWeight: 600,
          fontSize:"1.4rem",
          fontFamily: 'var(--font-secondary)',
        }}
      >
        Condition:
      </span>
      <span style={{ display: 'block' }}>
        {Object.entries(response.recommended_dowry).map(([key, value]) => (
          <li key={key} dangerouslySetInnerHTML={{ __html: formatText(value) }} />
        ))}
      </span>
    </p>
    <p>
      <span
        style={{
          fontWeight: 600,
          fontSize:"1.4rem",
          fontFamily: 'var(--font-secondary)',
        }}
      >
        Random person :
      </span>
      <span
        style={{ display: 'block' }}
        dangerouslySetInnerHTML={{ __html: formatText(response.reasoning) }}
      />
    </p>
  </div>

  {/* Button & QR */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1rem',
    }}
  >
    <button
      style={{
        backgroundColor: '#94a3b8',
        color: 'white',
        fontSize: '0.875rem',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        textAlign:'center',
        fontFamily: 'var(--font-secondary)',
        transition: 'background-color 0.2s',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Calculate your own Dowry
    </button>
    <QRCodeCanvas value="https://dowryai.netlify.app" size={48} />
  </div>

  {/* Footer note */}
  <p
    style={{
      fontSize: '0.75rem',
      color: '#dc2626',
      textAlign: 'center',
      marginTop: '0.75rem',
      fontStyle: 'italic',
    }}
  >
    Do not accept or give dowry
  </p>
</div>

            </div>

            {/* Download Button */}
            <div
                style={{
                    marginTop: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <button
                    onClick={downloadCard}
className='bg-green-400'
                    style={{
                        
                        color: 'white',
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: '600',
                        borderRadius: '14px',
                        boxShadow: '0 6px 16px rgba(16,185,129,0.3)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                      Download  Card
                </button>
            </div>
        </div>
    );
}
