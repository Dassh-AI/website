// import React from 'react';
// import { Drawer, List, ListItem, Checkbox, ListItemText } from '@mui/material';

// const DrawerComponent = ({ open, onClose, traitsData, handleTraitToggle }) => {
//     return (
//         <Drawer anchor="right" open={open} onClose={onClose}>
//             <div className='my-2' style={{ width: '550px' }}>
//             <div className="text-brand-green1 text-xl mb-8 mt-5 mx-10" style={{fontWeight:700}}>
//                 Add New Trait
//             </div>
//                 {traitsData.map((data, index) => (
//                     <div key={index} style={{ marginBottom: 20 }}>
//                         <h4 style={{fontWeight:500}} className='text-brand-green1 mx-10'>{data.category}</h4>
//                         <List>
//                             {data.traits.map((trait, traitIdx) => (
//                                 <ListItem className='flex justify-between h-12 p-0 mx-7' key={traitIdx} button>
//                                     <Checkbox
//                                         size='small'
//                                         checked={trait.selected}
                                        
//                                         onChange={() => handleTraitToggle(index, traitIdx)}
//                                     />
//                                     <ListItemText primary={trait.name} />
//                                 </ListItem>
//                             ))}
//                         </List>
//                     </div>
//                 ))}
//             </div>
//         </Drawer>
//     );
// };

// export default DrawerComponent;

// import React from 'react';
// import { Drawer, List, ListItem, Checkbox, ListItemText } from '@mui/material';

// const DrawerComponent = ({ open, onClose, traitsData, handleTraitToggle }) => {
//     return (
//         <Drawer anchor="right" open={open} onClose={onClose}>
//             <div className='my-2' style={{ width: '550px' }}>
//                 <div 
//                     className="text-brand-green1 mb-8 mt-5 mx-10 text-xl" 
//                     style={{ fontWeight: 700}}
//                 >
//                     Add New Trait
//                 </div>
//                 {traitsData.map((data, index) => (
//                     <div key={index} style={{ marginBottom: 20 }}>
//                         <h4 
//                             style={{ fontWeight: 500, fontSize: '16px', marginBottom: '0px' }} 
//                             className='text-brand-green1 text-lg mx-10'
//                         >
//                             {data.category}
//                         </h4>
//                         <List>
//                             {data.traits.map((trait, traitIdx) => (
//                                 <ListItem 
//                                     className='flex justify-between h-12 p-0 mx-7' 
//                                     key={traitIdx} 
//                                     button
//                                     style={{ padding: '', marginBottom: '0px' }}
//                                 >
//                                     <Checkbox
//                                         size='small'
//                                         checked={trait.selected}
//                                         onChange={() => handleTraitToggle(index, traitIdx)}
//                                     />
//                                     <ListItemText 
//                                         primary={trait.name} 
//                                         style={{ fontSize: '10px' }} 
//                                     />
//                                 </ListItem>
//                             ))}
//                         </List>
//                     </div>
//                 ))}
//             </div>
//         </Drawer>
//     );
// };

// export default DrawerComponent;

import React from 'react';
import { Drawer, Checkbox } from '@mui/material';

const DrawerComponent = ({ open, onClose, traitsData, handleTraitToggle }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div className='mx-10 my-2' style={{ width: '500px'}}>
                <div className="text-brand-green1 text-xl mb-8 mt-5" style={{fontWeight:700}}>
                    Add New Trait
                </div>
                {traitsData.map((data, index) => (
                    <div key={index} className='mb-5'>
                        <div className='text-lg text-brand-green1 mb-2' style={{ fontWeight: 500 }}>
                            {data.category}
                        </div>
                        <div>
                            {data.traits.map((trait, traitIdx) => (
                                <div 
                                    key={traitIdx} 
                                    style={{ display: 'flex', alignItems: 'center'}}
                                >
                                    <Checkbox
                                        size='xsmall'
                                        checked={trait.selected}
                                        onChange={() => handleTraitToggle(index, traitIdx)}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                color: trait.selected ? '#063A3A' : undefined,
                                            },
                                            '& .Mui-checked': {
                                                color: '#063A3A',
                                            }
                                        }}
                                    />
                                    <span style={{fontWeight:400}} className='text-sm text-brand-green1'>{trait.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Drawer>
    );
};

export default DrawerComponent;
