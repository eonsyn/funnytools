import React from 'react'

function HowItWork({ showquestion }) {
    return (
        <main className="p-6 md:p-12  bg-gradient-to-b from-pink-100 via-pink-50 to-white  text-gray-800">
            {/* Main Heading */}
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-extrabold text-pink-700 mb-4">
                    How <strong>Dowry Calculator AI</strong> Works
                </h1>
                <p className="text-lg text-gray-700">
                    Discover how our <strong>funny dowry calculator</strong> uses your quirky answers to parody the <strong>dowry system</strong> in India. It’s a <strong>marriage parody</strong> built to spread <strong>dowry awareness</strong> through humor!
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white/60 rounded-xl shadow-md p-6 flex flex-col justify-between border border-pink-200 hover:shadow-xl transition">
                    <h1 className="text-xl font-bold text-pink-600 mb-2">📝 Step 1: Enter Your Info</h1>
                    <p className="text-sm text-gray-700">
                        Fill out your fictional details for our <strong>dahej calculator</strong>:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                        <li>Name</li>
                        <li>Education</li>
                        <li>Profession</li>
                        <li>Marital Status</li>
                        <li>Car Ownership</li>
                        <li>Salary</li>
                        <li>Location</li>
                        <li>Skin Tone</li>
                        <li>Govt Job in Family</li>
                        <li>Expectations</li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white/60 rounded-xl shadow-md p-6 flex flex-col   border border-pink-200 hover:shadow-xl transition">
                    <h1 className="text-xl font-bold text-pink-600 mb-2"> Step 2: AI Generates Result</h1>
                    <p className="text-sm text-gray-700">
                        Once submitted, our <strong>Dowry Calculator AI</strong> crafts a humorous response mocking the outdated <strong>dowry system India</strong> still jokes about.
                    </p>
                    <p className="text-sm mt-1 ">
                        It's satire + awareness in one. Think of it as your personal <strong>dowry meme generator</strong> or <strong>funny quiz India</strong> for <strong>calculate fake dowry</strong> 😂
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/60 rounded-xl shadow-md p-6 flex flex-col  border border-pink-200 hover:shadow-xl transition">
                    <h1 className="text-xl font-bold text-pink-600 mb-2"> Step 3: Share & Spread Awareness</h1>
                    <p className="text-sm text-gray-700">
                        Share your result with friends! Start conversations about <strong>dahej pratha satire</strong> and say NO to dowry. Be part of the <strong>anti-dowry tool</strong> revolution.
                    </p>
                    <p className="text-sm mt-2 text-gray-600">
                        Use it as your <strong>dowry awareness</strong> campaign piece or just for <strong>wedding humor</strong>. 💒
                    </p>
                </div>
            </div>

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
