import React from 'react';
import AssessmentsDetailtraits from './AssessmentsDetailtraits';

const AssessmentDetail = ({ assessment }) => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='mt-1'>
                    {/* Assessment Title and Description */}
                    <div style={{ fontWeight: 600 }} className='text-brand-green1 text-lg'>{assessment.title}</div>
                    <div style={{ fontWeight: 400 }} className='text-brand-green1 text-xs w-2/5'>{assessment.description}</div>
                </div>
                <div className='mt-1'>
                    <div style={{ fontWeight: 400 }} className='text-brand-green1 text-xs'>{assessment.date}</div>
                </div>
            </div>
            <AssessmentsDetailtraits/>
        </div>
    );
};

export default AssessmentDetail;
