import React from 'react';

const AssessmentDetail = ({ assessment }) => {
    return (
        <div>
            <h1>{assessment.title}</h1>
            <p>{assessment.description}</p>
            <p>{assessment.date}</p>
            {/* Add more details or functionalities as needed */}
        </div>
    );
};

export default AssessmentDetail;
