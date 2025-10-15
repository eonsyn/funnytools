'use client';
import { FaArrowLeft } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import DowryCard from './DowryCard';
import DowryCardSkeleton from './DowryCardSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { decrementTrial, addTrials, useTrialState } from '@/lib/redux/slices/trialSlice';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';
export default function QuestionForm() {
  const router = useRouter();
  // useEffect(() => {
  //   if (trial < 0 || trial===0) {
  //     router.push('/get-balance');
  //   }
  // }, [ router]);

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
      console.log(json) 
    } catch (error) {
      console.error('Error generating response:', error); 
    } finally {
      setLoading(false);

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

  if (loading) {
    return (
      <DowryCardSkeleton />
    )
  }

  return (
    <div className="max-w-5xl   mx-auto md:p-6 border border-pink-200 rounded-2xl pb-6 relative">

      {response && (
        <div className='relative'>
          <button
            onClick={handleResponse}
            className="flex absolute left-2 md:left-0 top-0 cursor-pointer items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-2.5 md:px-4 py-2 rounded-full md:rounded-lg mb-4"
          >
            <FaArrowLeft />
           <span className='hidden md:block '> Go Back</span>
          </button>
          <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
            {response ? 'Your Dowry' : 'Dowry Calculator'}
          </h2>
        </div>

      )}



      {/* Show generated result or form */}
      {response ? (
        <DowryCard clearResponse={handleResponse} name={formData.name} dowry={response?.dowry}
          condition={response?.condition} profession={formData.profession} response={response} />
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black px-4 pt-4 md:px-2">
          {/* Your Name */}
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Education */}
          <div className="flex space-x-6">
            {/* Education */}
            <div className="flex-1">
              <label className="block font-semibold mb-1">Education</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select</option>
                <option>High School</option>
                <option>Diploma</option>
                <option>Intermediate</option>
                <option>Bachelor’s</option>
                <option>Master’s</option>
                <option>PhD</option>
              </select>
            </div>

            {/* Marital Status */}
            <div className="flex-1">
              <label className="block font-semibold mb-1">Marital Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select</option>
                <option>Single</option>
                <option>Engaged</option>
                <option>Divorced</option>
              </select>
            </div>
          </div>


          {/* Profession */}
          <div>
            <label className="block font-semibold mb-1">Profession</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>



          {/* Monthly Salary */}
          <div className="flex space-x-6">
            {/* Monthly Salary */}
            <div className="flex-1">
              <label className="block font-semibold mb-1">Monthly Salary</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Skin Tone */}
            <div className="flex-1">
              <label className="block font-semibold mb-1">Skin Tone</label>
              <select
                name="skinTone"
                value={formData.skinTone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select</option>
                <option>Fair</option>
                <option>Wheatish</option>
                <option>Dusky</option>
                <option>Dark</option>
              </select>
            </div>
          </div>


          {/* Location */}
          <div className="bg-red-5">
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>



          {/* Car Ownership + Govt Job in Family */}
          <div className="flex items-center space-x-6">
            {/* Car Ownership */}
            <div className="flex-1">
              <label className="block font-semibold mb-2">Car Ownership</label>
              <div className="flex gap-4">
                {['Yes', 'No'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="carOwnership"
                      value={opt}
                      checked={formData.carOwnership === opt}
                      onChange={handleChange}
                      required
                      className="accent-pink-600"
                    />
                    <span className="text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Govt Job in Family */}
            <div className="flex-1">
              <label className="block font-semibold mb-2">Govt Job in Family?</label>
              <div className="flex gap-4">
                {['Yes', 'No'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="govtJobInFamily"
                      value={opt}
                      checked={formData.govtJobInFamily === opt}
                      onChange={handleChange}
                      required
                      className="accent-pink-600"
                    />
                    <span className="text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>


          {/* Expectations */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">What do you expect in Dowry? (Optional)</label>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className={`bg-pink-600 hover:bg-pink-700 text-white text-lg px-10 py-3 rounded-xl shadow-lg transition-all duration-300 ${loading || trial === 0 ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              disabled={loading}
            >
              {loading
                ? 'Calculating...'
                : trial > 0
                  ? 'Calculate Dowry'
                  : 'Insufficient Balance'}
            </button>
          </div>
        </form>



      )}

    </div>
  );
}
