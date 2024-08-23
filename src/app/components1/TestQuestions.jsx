import React from 'react';
import Button from '@mui/material/Button';

const questionsData = [
  {
    tags: ['Communication', 'Influencing'],
    scenario: `[Scenario] You are the product manager for a tech startup that is launching a new mobile app designed to help small businesses manage their finances. The app is in the final stages of development, and the launch date is set for three weeks from now.
    Recently, the development team discovered a critical bug that could cause the app to crash under specific conditions. Fixing the bug would require delaying the launch by two weeks. However, the marketing team has already started a campaign that has generated significant buzz, and stakeholders are expecting the launch to happen as planned.`,
    question: `As the product manager, how would you approach this situation? Consider the potential impact on the product, the team, the customers, and the company's reputation. Outline the steps you would take and explain your decision-making process.`
  },
  {
    tags: ['Communication', 'Influencing'],
    scenario: `[Scenario] You are the product manager for a tech startup that is launching a new mobile app designed to help small businesses manage their finances. The app is in the final stages of development, and the launch date is set for three weeks from now.
    Recently, the development team discovered a critical bug that could cause the app to crash under specific conditions. Fixing the bug would require delaying the launch by two weeks. However, the marketing team has already started a campaign that has generated significant buzz, and stakeholders are expecting the launch to happen as planned.`,
    question: `As the product manager, how would you approach this situation? Consider the potential impact on the product, the team, the customers, and the company's reputation. Outline the steps you would take and explain your decision-making process.`
  },
  {
    tags: ['Communication', 'Influencing'],
    scenario: `[Scenario] You are the product manager for a tech startup that is launching a new mobile app designed to help small businesses manage their finances. The app is in the final stages of development, and the launch date is set for three weeks from now.
    Recently, the development team discovered a critical bug that could cause the app to crash under specific conditions. Fixing the bug would require delaying the launch by two weeks. However, the marketing team has already started a campaign that has generated significant buzz, and stakeholders are expecting the launch to happen as planned.`,
    question: `As the product manager, how would you approach this situation? Consider the potential impact on the product, the team, the customers, and the company's reputation. Outline the steps you would take and explain your decision-making process.`
  },
  {
    tags: ['Communication', 'Influencing'],
    scenario: `[Scenario] You are the product manager for a tech startup that is launching a new mobile app designed to help small businesses manage their finances. The app is in the final stages of development, and the launch date is set for three weeks from now.
    Recently, the development team discovered a critical bug that could cause the app to crash under specific conditions. Fixing the bug would require delaying the launch by two weeks. However, the marketing team has already started a campaign that has generated significant buzz, and stakeholders are expecting the launch to happen as planned.`,
    question: `As the product manager, how would you approach this situation? Consider the potential impact on the product, the team, the customers, and the company's reputation. Outline the steps you would take and explain your decision-making process.`
  },
  {
    tags: ['Communication', 'Influencing'],
    scenario: `[Scenario] You are the product manager for a tech startup that is launching a new mobile app designed to help small businesses manage their finances. The app is in the final stages of development, and the launch date is set for three weeks from now.
    Recently, the development team discovered a critical bug that could cause the app to crash under specific conditions. Fixing the bug would require delaying the launch by two weeks. However, the marketing team has already started a campaign that has generated significant buzz, and stakeholders are expecting the launch to happen as planned.`,
    question: `As the product manager, how would you approach this situation? Consider the potential impact on the product, the team, the customers, and the company's reputation. Outline the steps you would take and explain your decision-making process.`
  },
  
  // Add more question objects as needed
];

function TestQuestions() {
  return (
    <div>
        {/* Header */}
        <div className="flex justify-between items-center">
            <div style={{color:"#063A3A", fontWeight:700}} className="text-3xl">
                Test Questions
            </div>
            <Button 
                className='normal-case h-10 px-4' 
                style={{color:"#063A3A", backgroundColor:"#CBDCBD"}}
            >
                <div style={{fontWeight:500}}>
                    Give Demo
                </div>
            </Button>
        </div>

        {/* Divider */}
        <div style={{backgroundColor:"#063A3A", height:"1.5px"}} className='w-full mt-4'></div>

        {/* Questions Section */}
        <div className="mt-6 space-y-8 overflow-y-scroll" style={{height:"73vh"}}>
            {questionsData.map((questionData, index) => (
                <div key={index}>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                            {questionData.tags.map((tag, tagIndex) => (
                                <div key={tagIndex} className="bg-brand-green1 px-2 py-1 rounded">
                                    <span className="text-brand-green">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-2 pr-4 py-3 rounded-lg">
                        <p style={{fontWeight:500}} className='text-brand-green1 '>
                            {questionData.scenario}
                        </p>
                        <div className="mt-4 text-brand-green1">
                            <p style={{fontWeight:500}}>Question:</p>
                            <p>
                                {questionData.question}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default TestQuestions;
