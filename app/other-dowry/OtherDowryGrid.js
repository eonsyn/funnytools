"use client";
import React, { useState } from "react";
import { FaLaughSquint, FaUserAlt, FaRupeeSign } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

// Function to parse **bold** and 'italic' text
function formatText(text) {
  const elements = [];
  let lastIndex = 0;

  const regex = /(\*\*(.*?)\*\*)|('([^']*?)')/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, bold, boldText, italic, italicText] = match;

    // Add preceding normal text
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }

    // Add bold or italic
    if (boldText) {
      elements.push(<strong key={match.index}>{boldText}</strong>);
    } else if (italicText) {
      elements.push(<em key={match.index}>{italicText}</em>);
    }

    lastIndex = match.index + fullMatch.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
}

export default function OtherDowryGrid({ initialData, initialPage }) {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/dowry/history?page=${page + 1}`);
      const json = await res.json();
      if (json.data.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...json.data]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Error fetching more data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
        <FaLaughSquint className="text-rose-600 text-4xl" />
        See What Other Cards Are Laughing At 😆
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="border rounded-xl p-5 bg-white/80 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {/* Name & Dowry */}
            <div className="flex justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaUserAlt className="text-rose-500" />
                <span className="capitalize">{item.formData?.name || "Anonymous"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaRupeeSign className="text-green-600" />
                <span>{item.generatedResponse.dowry}</span>
              </div>
            </div>

            {/* Reasoning */}
            <p className="text-gray-800 md:line-clamp-6 mb-3 leading-relaxed">
              {formatText(item.generatedResponse.reasoning)}
            </p>

            {/* Details using <details> */}
            <details className="mt-3 bg-rose-50 p-3 rounded-md text-sm text-gray-700">
              <summary className="cursor-pointer font-medium hover:text-rose-600">
                Show Recommended Dowry Details
              </summary>
              <p className="mt-2">{formatText(item.generatedResponse.recommended_dowry.item_1)}</p>
              <p className="mt-1">{formatText(item.generatedResponse.recommended_dowry.item_2)}</p>
            </details>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MdExpandMore className="text-xl" />
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </main>
  );
}
