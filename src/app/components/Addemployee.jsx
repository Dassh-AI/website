import { InputBase } from "@mui/material"

const Addemployee=()=> {
  return (
    <div style={{width:"450px"}} className="mx-10 my-3">
        <div className="text-xl mb-5" style={{fontWeight:700}}>
            Add New Employee
        </div>
        <div className="flex justify-center mb-4 ">
            <button className="p-2 rounded-md w-44" style={{backgroundColor:"#CBDCBD",fontWeight:700}}>Upload CSV</button>
        </div>
        <hr></hr>
        <div className="mt-6">
            <div className="mb-3">
                <div className="text-sm">Employee ID</div>
                <div style={{border:"solid",borderColor:"#063A3A",borderWidth:"2px"}} className="rounded-lg mt-2">
                    <InputBase
                    className="h-8"
                    sx={{ ml: 1, flex: 1 }}
                    // placeholder="Search"
                    />  
                </div>
            </div>
            <div className="mb-3">
                <div className="text-sm">Employee Name</div>
                <div style={{border:"solid",borderColor:"#063A3A",borderWidth:"2px"}} className="rounded-lg mt-2">
                    <InputBase
                    className="h-8"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Harshit"
                    />  
                </div>
            </div>
            <div className="mb-3">
                <div className="text-sm">Email ID</div>
                <div style={{border:"solid",borderColor:"#063A3A",borderWidth:"2px"}} className="rounded-lg mt-2">
                    <InputBase
                    className="h-8"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="harshit.modi@example.com"
                    />  
                </div>
            </div>
            <div className="mb-3">
                <div className="text-sm">Designation</div>
                <div style={{border:"solid",borderColor:"#063A3A",borderWidth:"2px"}} className="rounded-lg mt-2">
                    <InputBase
                    className="h-8"
                    sx={{ ml: 1, flex: 1 }}
                    // placeholder="Search"
                    />  
                </div>
            </div>
            <div className="mb-3">
                <div className="text-sm">Team</div>
                <div style={{border:"solid",borderColor:"#063A3A",borderWidth:"2px"}} className="rounded-lg mt-2">
                    <InputBase
                    className="h-8"
                    sx={{ ml: 1, flex: 1 }}
                    // placeholder="Search"
                    />  
                </div>
            </div>
            <div className="mb-3">
                <div className="text-sm">Department</div>
                <div style={{border:"solid",borderColor:"#063A3A",borderWidth:"2px"}} className="rounded-lg mt-2">
                    <InputBase
                    className="h-8"
                    sx={{ ml: 1, flex: 1 }}
                    // placeholder="Search"
                    />  
                </div>
            </div>
            <div className="mb-3">
                <div className="text-sm">Office</div>
                <div style={{border:"solid",borderColor:"#063A3A",borderWidth:"2px"}} className="rounded-lg mt-2">
                    <InputBase
                    className="h-8"
                    sx={{ ml: 1, flex: 1 }}
                    // placeholder="Search"
                    />  
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-5 ">
            <button className="p-2 rounded-md w-44" style={{backgroundColor:"#CBDCBD",fontWeight:700}}>Save</button>
        </div>
    </div>
  )
}

export default Addemployee