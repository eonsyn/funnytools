'use client';

import React from 'react';

// Converts *text* → <strong>text</strong> and 'text' → <em>text</em>
function formatText(text) {
  if (!text) return null;

  const elements = [];
  let remaining = text;

  const regex = /(\*[^*]+\*)|('[^']+')/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const start = match.index;
    const end = regex.lastIndex;

    // Push any plain text before the match
    if (start > lastIndex) {
      elements.push(remaining.slice(lastIndex, start));
    }

    const matchedText = match[0];

    if (matchedText.startsWith('*')) {
      elements.push(<strong key={start}>{matchedText.slice(1, -1)}</strong>);
    } else if (matchedText.startsWith("'")) {
      elements.push(<em key={start}>
        
        {matchedText.slice(1, -1)}</em>);
    }

    lastIndex = end;
  }

  // Push the rest of the remaining string
  if (lastIndex < text.length) {
    elements.push(remaining.slice(lastIndex));
  }

  return elements;
}

function Response({ response }) {
  if (!response?.recommended_dowry) return null;

  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-700 mb-4">📦 Recommended Dowry:</h2>
      <ul className="list-disc list-inside mb-4">
        {Object.entries(response.recommended_dowry).map(([key, value]) => (
          <li key={key}>{formatText(value)}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-blue-700 mb-2">😂 Reasoning:</h3>
      <p className="mb-4">{formatText(response.reasoning)}</p>

      <h3 className="text-xl font-bold text-red-600">⚠️ Moral Message:</h3>
      <p>{formatText(response.moral_message)}</p>
    </div>
  );
}

export default Response;
