import React from 'react'

function HowItWork({ showquestion }) {
    return (
        <main className="p-6 md:p-12  bg-gradient-to-b from-pink-100 via-pink-50 to-white  text-gray-800">
            {/* Main Heading */}
           

            {/* CTA Card */}
            <div
                className="mt-12 bg-pink-100 p-8 rounded-xl text-center max-w-3xl mx-auto shadow-inner"
                style={{
                    boxShadow: 'inset 0 4px 10px rgba(0, 0, 0, 0.1), inset 0 -4px 10px rgba(0, 0, 0, 0.05)'
                }}
            >
                <h2 className="text-2xl font-semibold text-pink-700 mb-3">🎉 Ready to Calculate?</h2>
                <p className="mb-4 text-gray-700">
                    Click below to use the <strong>Dowry Calculator AI</strong> and get your own hilarious <strong>dowry system parody</strong> result!
                </p>
                <button
                    onClick={showquestion}
                    className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow-inner"
                    style={{
                        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(255,255,255,0.1)'
                    }}
                >
                    Calculate My Dahej
                </button>
            </div>

        </main>
    )
}

export default HowItWork
