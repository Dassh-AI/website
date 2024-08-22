'use client'

import Analytics from "./components/Analytics";
import Assessments from "./components1/Assessments";
import Employees from "./components/Employees";
import Overview from "./components/Overview";
import Header from "./components/header";
import Main from "./components/main";
import Sidemenubar from "./components/sidemenubar";
import { useState } from "react";

export default function Home() {

  const [activeComponent, setActiveComponent] = useState('Assessments');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Overview':
        return <Overview />;
      case 'Employees':
        return <Employees />;
      case 'Assessments':
        return <Assessments />;
      case 'Analytics':
        return <Analytics />;
      default:
        return <Employees />;
    }
  };

  return (
    <>
      <Header/>
      {/* <Main/> */}
      <div className="flex ">
        <Sidemenubar setActiveComponent={setActiveComponent} setIsSidebarExpanded={setIsSidebarExpanded} activeComponent={activeComponent} />
        <div 
        className={`transition-all duration-300 flex-grow p-6 w-3/5  ${
          isSidebarExpanded ? 'ml-64' : 'ml-24'
        }`}
        >
          {renderComponent()}
        </div>
    </div>
    </>
  ); 
}
