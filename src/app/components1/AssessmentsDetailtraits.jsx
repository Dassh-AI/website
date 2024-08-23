import React, { useState } from 'react';
import { IconButton, InputBase, Paper, Button, Drawer, TextField, Checkbox, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmployeeAssessment from './EmployeeAssessment';

const initialTraitsData = [
    {
        traits: [
            { name: "Communication", selected: true },
            { name: "Influencing", selected: true },
            { name: "Conflict Resolution", selected: true },
            { name: "Cultural Sensitivity", selected: true },
            { name: "Empathy", selected: false },
            { name: "Listening Skills", selected: false },
        ],
        category: "Interpersonal Skills",
        description: ["Description of this skill", "Line 2", "Line 3"],
    },
    {
        traits: [
            { name: "Communication", selected: true },
            { name: "Influencing", selected: true },
            { name: "Conflict Resolution", selected: true },
            { name: "Cultural Sensitivity", selected: true },
            { name: "Empathy", selected: false },
            { name: "Listening Skills", selected: false },
        ],
        category: "Self-Management",
        description: ["Description of this skill", "Line 2", "Line 3"],
    },
    {
        traits: [
            { name: "Communication", selected: true },
            { name: "Influencing", selected: true },
            { name: "Conflict Resolution", selected: true },
            { name: "Cultural Sensitivity", selected: true },
            { name: "Empathy", selected: false },
            { name: "Listening Skills", selected: false },
        ],
        category: "Cognitive Skills",
        description: ["Description of this skill", "Line 2", "Line 3"],
    },
    {
        traits: [
            { name: "Communication", selected: true },
            { name: "Influencing", selected: true },
            { name: "Conflict Resolution", selected: true },
            { name: "Cultural Sensitivity", selected: true },
            { name: "Empathy", selected: false },
            { name: "Listening Skills", selected: false },
        ],
        category: "Professionalism",
        description: ["Description of this skill", "Line 2", "Line 3"],
    },
    {
        traits: [
            { name: "Communication", selected: true },
            { name: "Influencing", selected: true },
            { name: "Conflict Resolution", selected: true },
            { name: "Cultural Sensitivity", selected: true },
            { name: "Empathy", selected: false },
            { name: "Listening Skills", selected: false },
        ],
        category: "Innovation",
        description: ["Description of this skill", "Line 2", "Line 3"],
    },
];

const AssessmentsDetailtraits = () => {
    const [traitsData, setTraitsData] = useState(initialTraitsData);
    const [isEditing, setIsEditing] = useState(false);


    return (
        <div>
            <div className='mt-8'>
                <div className='grid grid-cols-2 gap-8 mb-3'>
                    <div className='flex items-end'>Traits Recommended for the Job</div>
                    <div className='flex justify-between items-end'>
                        <div>Category</div>
                    </div>
                </div>
                <hr className='border-brand-green1 mb-3' />

                {traitsData.map((data, index) => (
                    <div key={index} className={`flex ${isEditing ? 'ml-2' : 'm-0'} justify-between border-b py-4`}>
                        {/* Traits */}
                        <div className="flex flex-wrap gap-x-7 gap-y-2 w-1/2">
                            {data.traits.filter(trait => trait.selected).map((trait, traitIdx) => (
                                <div key={traitIdx} className="relative inline-block">
                                    <span
                                        className="h-fit inline-block bg-brand-green1 text-brand-green px-3 py-1 rounded-lg"
                                    >
                                        {trait.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Category and Description */}
                        <div className="w-1/2 ml-10">
                            <h3 style={{ fontWeight: 600 }} className="text-lg font-bold text-brand-green1">{data.category}</h3>
                            {data.description.map((line, idx) => (
                                <p key={idx} style={{ fontWeight: 400 }} className="text-brand-green1 text-sm">{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-14'>
                <div className='flex justify-between items-end mb-8'>
                    <div style={{ fontWeight: 700 }} className='text-brand-green1 text-xl'>Select Employees for Assessment</div>
                    <div>
                        <Paper
                            style={{ backgroundColor: "#EAEAEA", boxShadow: "none" }}
                            className='rounded-lg'
                            component="form"
                            sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                        >
                            <IconButton type="button" sx={{ p: '8px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                            />
                        </Paper>
                    </div>
                </div>
                <EmployeeAssessment />
            </div>

        </div>
    );
};

export default AssessmentsDetailtraits;