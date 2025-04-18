'use client';

import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

const formatText = (text) => {
    if (!text) return null;
    text = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    text = text.replace(/(^|\s)'([^']+?)'(?=\s|$)/g, '$1<em>$2</em>');
    return text;
};

export default function DowryCard({ clearResponse, response, name }) {
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
                    background: 'linear-gradient(135deg, #fef3c7, #fbbf24)',
                    padding: '16px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '20px',
                        padding: '24px',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '24px',
                        }}
                    >
                        <img
                            src="/profile-placeholder.png"
                            alt="Profile"
                            width={72}
                            height={72}
                            style={{
                                borderRadius: '50%',
                                border: '4px solid #ec4899',
                                marginRight: '16px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        />
                        <h2
                            style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                color: '#ec4899',
                                letterSpacing: '1px',
                                margin: 0,
                            }}
                        >
                            {name}
                        </h2>
                    </div>

                    {/* Main Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: '24px',
                        }}
                    >
                        {/* Reasoning */}
                        <div style={{ flex: 1 }}>
                            <h3 style={{ color: '#3B82F6', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                                Description:
                            </h3>
                            <p
                                style={{
                                    color: '#374151',
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    marginBottom: '16px',
                                }}
                                dangerouslySetInnerHTML={{ __html: formatText(response.reasoning) }}
                            />
                        </div>

                        {/* Dowry */}
                        <div style={{ flex: 1 }}>
                            <h3 style={{ color: '#16A34A', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                                Dowry:
                            </h3>
                            <ol
        style={{
            paddingLeft: '20px',
            color: '#374151',
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '16px',
            listStyleType: 'decimal',
        }}
    >
        {Object.entries(response.recommended_dowry).map(([key, value]) => (
            <li key={key} dangerouslySetInnerHTML={{ __html: formatText(value) }} />
        ))}
    </ol>
                        </div>
                    </div>

                    {/* Footer */}
                    <p
                        style={{
                            fontSize: '14px',
                            textAlign: 'center',
                            color: '#EF4444',
                            fontWeight: 'bold',
                            borderTop: '1px solid #E5E7EB',
                            paddingTop: '16px',
                            marginTop: '24px',
                        }}
                    >
                        🚫 Do not accept or give dowry
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
