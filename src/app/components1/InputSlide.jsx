'use client';

export default function InputSlide({ question, answer, onInputChange }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{question}</h2>
      <textarea
        value={answer}
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full h-40 p-2 border border-gray-300 rounded"
        placeholder="Type your answer here..."
      />
    </div>
  );
}
