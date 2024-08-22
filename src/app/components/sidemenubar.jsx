// 'use client'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from "react";
import Image from "next/image"
import image5 from "../../../Images/image5.png"
import image1 from "../../../Images/image1.png"
import image2 from "../../../Images/image2.png"
import image3 from "../../../Images/image3.png"
import image6 from "../../../Images/image6.png"
import image4 from "../../../Images/image4.png"

const Sidemenubar = ({setActiveComponent,setIsSidebarExpanded,activeComponent})=> {

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    setIsSidebarExpanded(!isExpanded);
  };

  return (
    <div style={{backgroundColor:"#EAEAEA",fontWeight:500}} 
    // className=" flex flex-col justify-between mx-10 mt-5 h-5/6 w-60 text-black fixed rounded-3xl"
    className={`flex flex-col justify-between mx-10 mt-5 h-5/6 ${
      isExpanded ? 'w-60' : 'w-16'
    } text-black fixed rounded-3xl`}
    >
     <div>
      <div className="flex items-center mx-4 h-16 space-x-2">
        <Image
          src={image6}
          width={30}
          height={30}
          />
        {/* <FontAwesomeIcon icon={faWindows} className="h-8 w-6"/> */}
        {isExpanded && <h1 className="text-lg font-bold">Microsoft</h1>}
      </div>
      <hr className={`bg-black h-0.5 w-5/6 mx-auto ${isExpanded? 'w-5/6': 'w-3/5'}`}/>
      <ul className="space-y-1 mt-3">
        <li
          className={`px-4 py-3 cursor-pointer flex gap-x-2
          ${isExpanded? 'm-0': 'justify-center'}
          ${activeComponent === 'Overview' ? 'bg-brand-green' : 'hover:bg-brand-green'}`}
          onClick={() => setActiveComponent('Overview')}
        >
          <Image
          src={image5}
          width={20}
          height={20}
          />
          {isExpanded && <span>Overview</span>}
        </li>
        <li
          className={`px-4 py-3 cursor-pointer flex gap-x-2
          ${isExpanded? 'm-0': 'justify-center'}
          ${activeComponent === 'Employees' ? 'bg-brand-green' : 'hover:bg-brand-green'}`}
          onClick={() => setActiveComponent('Employees')}
        >
          <Image
          src={image2}
          width={20}
          height={20}
          />
          {isExpanded && <span>Employees</span>}
        </li>
        <li
          className={`px-4 py-3 cursor-pointer flex gap-x-2
          ${isExpanded? 'm-0': 'justify-center'}
          ${activeComponent === 'Assessments' ? 'bg-brand-green' : 'hover:bg-brand-green'}`}
          onClick={() => setActiveComponent('Assessments')}
        >
          <Image
          src={image1}
          width={20}
          height={20}
          />
           {isExpanded && <span>Assessments</span>}
        </li>
        <li
         className={`px-4 py-3 cursor-pointer flex gap-x-2
         ${isExpanded? 'm-0': 'justify-center'}
         ${activeComponent === 'Analytics' ? 'bg-brand-green' : 'hover:bg-brand-green'}`}
          onClick={() => setActiveComponent('Analytics')}
        >
          <Image
          src={image3}
          width={20}
          height={20}
          />
          {isExpanded && <span>Analytics</span>}
        </li>
      </ul>
     </div>
      <div className="mb-5">
        <hr className={`bg-black h-0.5 w-5/6 mx-auto ${isExpanded? 'w-5/6': 'w-3/5'}`}/>
        <div
        //  className="flex justify-between mx-4 mt-2"
         className={ `flex ${isExpanded? 'justify-between': 'flex-col'}  mx-4 mt-2 `}
         >
          <div className="flex space-x-2 items-center">
            <Image
            src={image4}
            width={25}
            height={20}
            />
            {isExpanded && <h1 className="font-bold">Need Help</h1>}
          </div>
          <div>
          <button onClick={toggleSidebar} className={`focus:outline-none ${isExpanded? 'mt-0': 'mt-2'}`}>
            {isExpanded ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidemenubar