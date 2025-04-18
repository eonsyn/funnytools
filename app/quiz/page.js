'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GifQuestion from '@/components/GifQuestion';

const questions = [
  {
    gif: '/gifs/flex.gif',
    question: 'Huzoor roz kitni selfies lete hain?',
    options: ['10+', 'Only on Sundays', 'Never'],
  },
  {
    gif: '/gifs/chai.gif',
    question: 'Kya kabhi chai banayi hai?',
    options: ['Kabhi nahi', 'Ek baar', 'Roz'],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (index, answer) => {
    const updated = [...answers];
    updated[index] = answer;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    const location = await fetch('/api/generate-response', {
      method: 'POST',
      body: JSON.stringify({ answers }),
    }).then(res => res.json());

    localStorage.setItem('dowry-result', JSON.stringify(location));
    router.push('/result');
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-amber-50">
      <h1 className="text-2xl font-bold mb-4">Dowry Calculator 3000</h1>
      {questions.map((q, i) => (
        <GifQuestion
          key={i}
          index={i}
          gif={q.gif}
          question={q.question}
          options={q.options}
          onAnswer={handleAnswer}
        />
      ))}
      <button
        onClick={handleSubmit}
        className="bg-pink-500 text-white px-4 py-2 mt-4 rounded"
      >
        Submit
      </button>
    </div>
  );
}
