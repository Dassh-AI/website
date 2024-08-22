'use client';

export default function RadioSlide({ question, options, selectedOption, onOptionChange }) {
  return (
    <div>
        <div className="text-brand-green1 space-y-4">
            <h2 style={{fontWeight:500}} className=" text-md font-semibold">{question}</h2>
            <div className="space-y-3">
                {options.map((option, index) => (
                <div style={{fontWeight:400}} className="flex text-brand-green1 mb-3" key={index}>
                    <input
                    type="radio"
                    id={`${question}-${index}`}
                    name={question}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => onOptionChange(option)}
                    className="mr-2"
                    />
                    <label className="text-sm" htmlFor={`${question}-${index}`}>{option}</label>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}
