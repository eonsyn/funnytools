'use client';
import { FaArrowLeft } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import DowryCard from './DowryCard';
import DowryCardSkeleton from './DowryCardSkeleton';
import { useDispatch, useSelector } from 'react-redux'; 
import { decrementTrial, addTrials, useTrialState } from '@/lib/redux/slices/trialSlice';
import { toast } from 'react-toastify';
export default function QuestionForm() {
  const dispatch = useDispatch();
  const trial = useSelector(useTrialState);
   
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    profession: '',
    maritalStatus: '',
    carOwnership: '',
    salary: '',
    location: '',
    skinTone: '',
    govtJobInFamily: '',
    expectations: '',
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const handleUseTrial = () => {
    if (trial > 0) {
      dispatch(decrementTrial());
       
    } else {
      toast.warn('Insufficient balance. Click button regain access.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const res = await fetch('/api/generate-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData }),
      });

      const json = await res.json();
      setResponse(json);
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Something went wrong! 😢');
    } finally {
      setLoading(false);
      handleUseTrial();
    }
  };

  const handleResponse = () => {
    setFormData({
      name: '',
      education: '',
      profession: '',
      maritalStatus: '',
      carOwnership: '',
      salary: '',
      location: '',
      skinTone: '',
      govtJobInFamily: '',
      expectations: '',
    });
    setResponse(null);
  };

  if(loading){
    return (
      <DowryCardSkeleton/>
    )
  }

  return (
    <div className="max-w-5xl mx-auto md:p-6 rounded-2xl shadow-2xl bg-white/40 backdrop-blur-2xl mb-6 relative">

      {/* Go Back Button */}
      {response && (
        <button
          onClick={handleResponse}
          className="flex cursor-pointer items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg mb-4"
        >
          <FaArrowLeft />
          Go Back
        </button>
      )}

      <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
        {response ? 'Your Dowry' : 'Dowry Calculator'}
      </h2>

      {/* Show generated result or form */}
      {response ? (
        <DowryCard clearResponse={handleResponse} name={formData.name} response={response} />
      ) : (
        <form onSubmit={handleSubmit} className="grid text-black px-1.5 grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'name', label: '  Your Name', type: 'text' },
            { name: 'education', label: '  Education', type: 'select', options: ['High School', 'Bachelor’s', 'Master’s', 'PhD'] },
            { name: 'profession', label: '  Profession', type: 'text' },
            { name: 'maritalStatus', label: '  Marital Status', type: 'select', options: ['Single', 'Engaged', 'Divorced'] },
            { name: 'carOwnership', label: '  Car Ownership', type: 'select', options: ['Yes', 'No'] },
            { name: 'salary', label: ' Monthly Salary', type: 'number' },
            { name: 'location', label: '  Location', type: 'text' },
            { name: 'skinTone', label: '  Skin Tone', type: 'select', options: ['Fair', 'Wheatish', 'Dusky', 'Dark'] },
            { name: 'govtJobInFamily', label: '  Govt Job in Family?', type: 'select', options: ['Yes', 'No'] },
          ].map(({ name, label, type, options }) => (
            <div key={name}>
              <label className="block font-semibold mb-1">{label}</label>
              {type === 'select' ? (
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              )}
            </div>
          ))}

          {/* Expectations (Optional) */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">
                What do you expect in Dowry? (Optional)
            </label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="3"
            />
          </div>

          <div className="md:col-span-2 text-center">
          <button
  type="submit"
  className={`bg-pink-600 hover:bg-pink-700 cursor-pointer text-white text-lg px-8 py-3 rounded-xl transition-all duration-300 ${
    loading || trial === 0 ? 'opacity-60 cursor-not-allowed' : ''
  }`}
  disabled={loading || trial === 0}
>
  {loading
    ? 'Calculating...'
    : trial > 0
    ? `—1 Trial${trial > 1 ? 's' : ''}    Calculate Dowry`
    : 'Insufficient Balance'}
</button>

          </div>
        </form>
      )}
    </div>
  );
}
