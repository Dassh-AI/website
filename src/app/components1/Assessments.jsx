
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Addemployee from '../components/Addemployee';
import Myassessments from './Myassessments';
import Newtest from './Newtest';
import Newassessment from './Newassessment';
import Image from 'next/image';
import eye from '../../../Images/eye.png'
import AssessmentDetail from './AssessmentDetail';




const Assessments=() =>{
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

  const [NewAssessment,SetNewAssessment] = React.useState(false)
  const [selectedAssessment, setSelectedAssessment] = React.useState(null);

  const handleCardClick = (assessment) => {
    setSelectedAssessment(assessment);
  };

  return (
    
    <div>
      <div className="mx-10 mr-20 ">
          {NewAssessment?(
            <div>
              <div className="flex justify-between">
                <div style={{color:"#063A3A",fontWeight:700}} className="text-3xl">New Assessments</div>
                <div>
                  <Button className='normal-case h-10 mr-5 rounded-lg' style={{color:"#063A3A",border:"solid"}}>
                    <div className='px-5'>
                      Save Draft
                    </div>
                  </Button>
                  <Button className='normal-case h-10 rounded-lg' style={{color:"#063A3A",backgroundColor:"#CBDCBD"}}>
                    <div className='px-8'>
                      Publish
                    </div>
                  </Button>
                </div>
            </div>
            <div style={{backgroundColor:"#063A3A",height:"1.5px"}} className='w-full mt-4'></div>
          </div>
            ) : (
              selectedAssessment? (
              <div>
                <div className="flex justify-between">
                  <div style={{color:"#063A3A",fontWeight:700}} className="text-3xl">Assessments Details</div>
                  <Button className='normal-case h-10 px-4' style={{color:"#063A3A",backgroundColor:"#CBDCBD"}}>
                            <Image
                            src={eye}
                            height={15}
                            width={15}
                            />
                            <div className='ml-2'>
                              View Test
                            </div>
                  </Button>
                </div>
                <div style={{backgroundColor:"#063A3A",height:"1.5px"}} className='w-full mt-4'></div>
              </div>):(<div>
                <div className="flex justify-between">
                  <div style={{color:"#063A3A",fontWeight:700}} className="text-3xl">Assessments</div>
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
                              Create New
                            </div>
                          </Button>
                          <Drawer
                              className='bg-brand-green1 bg-opacity-60'
                            anchor={"right"}
                            open={state[anchor]}
                            onClose={toggleDrawer("right", false)}
                          >
                              <Newtest SetNewAssessment={SetNewAssessment} />
                            {/* <Addemployee/> */}
                            {/* {list(anchor)} */}
                          </Drawer>
                        </React.Fragment>
                      ))}</div>
                  </div>
                </div>
              </div>
              )
          )}
       
       {NewAssessment?(
          <div style={{height:"73vh"}} className='mt-6 overflow-y-scroll'>
            <Newassessment/>
          </div>
       ):(
        selectedAssessment? (
          <div>
            <AssessmentDetail assessment={selectedAssessment} />
          </div>
        ):(
          <div style={{height:"75vh"}} className='mt-6 overflow-y-scroll'>
            <Myassessments onCardClick={handleCardClick} />
          </div>
        )
          
       )}
       
     </div>
      
    </div>
  );
}

export default Assessments