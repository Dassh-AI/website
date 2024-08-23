
'use client';

import Image from 'next/image';
import React from 'react';
import arrow from '../../../Images/arrow.png';

const data = [
    { id: 1, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcscsd', date: '2024-08-20' },
    { id: 2, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdcd', date: '2024-08-21' },
    { id: 3, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdcd', date: '2024-08-22' },
    { id: 4, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdcd', date: '2024-08-23' },
    { id: 4, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdc', date: '2024-08-23' },
    { id: 4, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdc', date: '2024-08-23' },
    { id: 4, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdc', date: '2024-08-23' },
    { id: 4, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdcs', date: '2024-08-23' },
    { id: 4, title: 'Assessment Title Line 2', description: 'Assessment Description Lorem Ipsum Lorem Ipsum Line 4 Line 5sdcsdc', date: '2024-08-23' },
//   // Add more data here
];

const AssessmentCard = ({ title, description, date , onClick }) => {
    return (
        <div style={{backgroundColor:"#F4F5DC"}} className=" px-5 py-6 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className='flex justify-between'>
                <div style={{color:"#063A3A"}} className='w-3/5'>
                    <h2 style={{fontWeight:600}} className="text-lg font-bold">{title}</h2>
                    <p style={{fontWeight:400}} className="text-gray-700 mb-3 text-xs w-4/6">{description}</p>
                </div>
                <div onClick={onClick} style={{backgroundColor:"#063A3A"}} className='h-fit p-2 rounded-lg cursor-pointer mr-2'>
                    <Image
                        src={arrow}
                        width={13}
                        height={15}
                    />
                </div>
            </div>
            <div>
                <p className="flex text-gray-500 text-xs justify-end">Created At: {date}</p>
                <div style={{backgroundColor:"#063A3A",height:"1.5px"}} className='w-full mt-1'></div>
                <p className="flex text-gray-500 text-xs justify-end mt-1">Created At: {date}</p>
            </div>
        </div>
  );
};

const Myassessments = ({ onCardClick }) => {
    return (
        <div className="py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10">
      {data.map((assessment) => (
          <AssessmentCard
          key={assessment.id}
          title={assessment.title}
          description={assessment.description}
          date={assessment.date}
          onClick={() => onCardClick(assessment)}
          />
          ))}
    </div>
  );
};

export default Myassessments