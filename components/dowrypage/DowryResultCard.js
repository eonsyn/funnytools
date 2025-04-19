'use client';

import { QRCodeCanvas } from 'qrcode.react';

const DowryResultCard = ({ name, profession, dowry, condition, randomPersonCondition,response }) => {

    if (!response) return null;
     
    const formatText = (text) => {
        if (!text) return null;
        text = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
        text = text.replace(/(^|\s)'([^']+?)'(?=\s|$)/g, '$1<em>$2</em>');
        return text;
    };
    return (
        <div className="max-w-sm mx-auto p-6 font-primary rounded-xl bg-white shadow-lg border-2 border-gray-300">
            {/* Profile image placeholder */}
            <div className="headaer py-1 flex w-full items-center gap-2 ">
                <div className="w-16 h-16 rounded-full bg-[#6b1e1e]    " />

                {/* Name and Profession */}
                <div className="name ">
                    <h2 className="   text-xl font-semibold text-[#2e2e2e]">{name}</h2>
                    <p className="  text-sm text-gray-600  ">{profession}</p>
                </div>

            </div>

<hr />
            {/* Dowry Info */}
            <div className="text-[#6b1e1e] font-medium mb-2">
                <span className="font-semibold text-black   font-secondary">Dowry:</span> Rs
                 {dowry}
            </div>

            {/* Conditions */}
            <div className="text-sm text-black mb-2 space-y-2">
                <p>
                    <span className="font-semibold font-secondary">Condition:</span> 
                    <span className='block '>
                    {Object.entries(response.recommended_dowry).map(([key, value]) => (
            <li key={key} dangerouslySetInnerHTML={{ __html: formatText(value) }} />
        ))}

                    </span>
                </p>
                <p>
                    <span className="font-semibold font-secondary">Random person :</span>  
                    <span className='block ' dangerouslySetInnerHTML={{ __html: formatText(response.reasoning) }}/> 
                </p>
            </div>

            {/* Button & QR */}
            <div className="flex items-center justify-between mt-4">
                <button className="bg-slate-400  font-secondary text-white text-sm px-4 py-2 rounded-md  transition">
                   Calculate your own Dowry
                </button>
                <QRCodeCanvas value="https://dowryai.netlify.app" size={48} />

            </div>

            {/* Footer note */}
            <p className="text-xs text-red-600 text-center mt-3 italic">
                Do not accept or give dowry
            </p>
        </div>
    );
};

export default DowryResultCard;
