
'use client';

import { useState } from 'react';
import RadioSlide from './RadioSlide';
import InputSlide from './InputSlide';
import barrow from '../../../Images/barrow.png'
import Image from 'next/image';
import { FaChevronLeft} from 'react-icons/fa';

const Newtest=({SetNewAssessment})=> {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [answers, setAnswers] = useState({
    radioAnswers: Array(8).fill(''),
    inputAnswers: Array(2).fill(''),
  });

  const slides = [
    {
      type: 'radio',
      question: 'Based on the companys hierarchical structure, please select the job level for this position:',
      options: ['L1: Entry-level position with basic tasks and responsibilities.', 'L2: Junior level, requires some experience and the ability to perform tasks with limited supervision.', 'L3: Intermediate level, responsible for more complex tasks and may supervise others.', 'L4: Senior professional, requires extensive experience and expertise, often leading projects or teams.', 'L5: First-line manager, oversees a department or a team of professionals.', 'L6: Middle manager, responsible for multiple departments or a larger team, significant strategic input.', 'L7: Senior manager, oversees significant portions of the organization, involved in high-level strategy.', 'L8: Executive level, part of the senior leadership team, responsible for overall strategic direction and major decisions.', 'L8: Executive level, part of the senior leadership team, responsible for overall strategic direction and major decisions.', 'L8: Executive level, part of the senior leadership team, responsible for overall strategic direction and major decisions.', 'L8: Executive level, part of the senior leadership team, responsible for overall strategic direction and major decisions.', 'L8: Executive level, part of the senior leadership team, responsible for overall strategic direction and major decisions.'],
    },
    {
        type: 'radio',
        question: 'Based on the companys hierarchical structure, please select the job level for this position:',
        options: ['L1: Entry-level position with basic tasks and responsibilities.', 'L2: Junior level, requires some experience and the ability to perform tasks with limited supervision.', 'L3: Intermediate level, responsible for more complex tasks and may supervise others.', 'L4: Senior professional, requires extensive experience and expertise, often leading projects or teams.', 'L5: First-line manager, oversees a department or a team of professionals.', 'L6: Middle manager, responsible for multiple departments or a larger team, significant strategic input.', 'L7: Senior manager, oversees significant portions of the organization, involved in high-level strategy.', 'L8: Executive level, part of the senior leadership team, responsible for overall strategic direction and major decisions.'],
    },
    {
      type: 'radio',
      question: 'Question 2?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    {
      type: 'radio',
      question: 'Question 2?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    {
      type: 'radio',
      question: 'Questsaion 2?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    {
      type: 'radio',
      question: 'Questiosan 2?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    // Add more slides here
    {
      type: 'input',
      question: 'Please provide additional comments:',
    },
    {
      type: 'input',
      question: 'What did you learn from this assessment?',
    },
  ];

  const handleOptionChange = (index, value) => {
    const updatedAnswers = [...answers.radioAnswers];
    updatedAnswers[index] = value;
    setAnswers({ ...answers, radioAnswers: updatedAnswers });
  };

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers.inputAnswers];
    updatedAnswers[index] = value;
    setAnswers({ ...answers, inputAnswers: updatedAnswers });
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const handletraits = () => {
    SetNewAssessment(true)
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const progressPercentage = ((currentSlide+1) / slides.length) * 100;

  return (
    <div style={{width:"500px"}} className="h-full mx-10 my-2 bg-white rounded-lg flex flex-col justify-between">
        <div>
            <div className="text-brand-green1 text-xl mb-8 mt-5" style={{fontWeight:700}}>
                Create New Test
            </div>
            {/* <div className='bg-black h-0.5'></div> */}
            <div className="mb-6">
                <div className="h-1 bg-brand-green1 rounded-full">
                    <div
                        className="h-1 bg-brand-green rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
            
            <div style={{height:"68vh"}} className='mt-8 overflow-y-scroll'>
                {slides[currentSlide].type === 'radio' ? (
                <RadioSlide
                    question={slides[currentSlide].question}
                    options={slides[currentSlide].options}
                    selectedOption={answers.radioAnswers[currentSlide]}
                    onOptionChange={(value) => handleOptionChange(currentSlide, value)}
                />
                ) : (
                <InputSlide
                    question={slides[currentSlide].question}
                    answer={answers.inputAnswers[currentSlide - 8]}
                    onInputChange={(value) => handleInputChange(currentSlide - 8, value)}
                />
                )}
            </div>
        </div>

      <div className="flex items-end mb-3 w-full ">
        <button
          onClick={handlePrevious}
          disabled={currentSlide === 0}
          className={` p-2 bg-brand-green1 mb-1 rounded-full ${
            currentSlide === 0 ? 'opacity-50 cursor-not-allowed hidden' : 'hover:bg-brand-green1 hover:opacity-70'
          }`}
        >
            <FaChevronLeft size={15} className='text-white' />
        </button>
        <div className={`flex flex-col items-center justify-center w-full ${currentSlide === 0? 'mx-0':'mr-8'}`}>
            <span>
            Step {currentSlide + 1}/{slides.length}
            </span>
            <div>
                {currentSlide === slides.length - 1 ? (
                  <div>
                    <button
                    onClick={handletraits}
                    // disabled={currentSlide === slides.length - 1}
                    className={`px-12 py-2 bg-brand-green text-brand-green1 rounded ${
                        currentSlide === slides.length - 1 ? 'opacity-100' : 'hover:bg-brand-green hover:opacity-70'
                    }`}
                    >
                    Show Traits
                    </button>
                  </div>
                  ) : (
                    <button
                    onClick={handleNext}
                    disabled={currentSlide === slides.length - 1}
                    className={`px-12 py-2 bg-brand-green text-brand-green1 rounded ${
                        currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-green hover:opacity-70'
                    }`}
                    >
                    Next
                    </button>
                )}
              </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Newtest