
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Addemployee from './Addemployee';
import Employeesdetails from './Employeesdetails';
import Emp from './Emp';



const Employees=() =>{
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    
    <div>
      <div className="mx-10 mr-20">
       <div className="flex justify-between">
         <div style={{color:"#063A3A",fontWeight:700}} className="text-3xl">Employees</div>
         <div className="flex gap-x-4">
           <div>
           <Paper
              style={{backgroundColor:"#EAEAEA", boxShadow:"none"}}
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
                // inputProps={{ 'aria-label': 'search google maps' }}
              />
            </Paper>
           </div>
           <div>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button className='normal-case h-10' style={{color:"#063A3A",backgroundColor:"#CBDCBD"}} onClick={toggleDrawer("right", true)}>
                  <div className='text-3xl mr-2 ml-2'>
                    +
                  </div>
                  <div className='pr-2'>
                    Add Employee
                  </div>
                </Button>
                <Drawer
                  className='bg-brand-green1 bg-opacity-60'
                  anchor={"right"}
                  open={state[anchor]}
                  onClose={toggleDrawer("right", false)}
                >
                  <Addemployee/>
                  {/* {list(anchor)} */}
                </Drawer>
              </React.Fragment>
            ))}</div>
         </div>
       </div>
       <div className='mt-6'>
            {/* <Employeesdetails/> */}
            <Emp/>
       </div>
     </div>
      
    </div>
  );
}

export default Employees