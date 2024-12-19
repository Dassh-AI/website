import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useMemo } from "react";


const HomeComponent = React.lazy(() => import("./home"));
const ATSComponent = React.lazy(() => import("./ats"));
const BehaviourComponent = React.lazy(() => import("./behaviour"));
const DemoComponent = React.lazy(() => import("./demo"));

const Router = () => {
  const commonRoutes = useMemo(
    () => [
      <Route key={"ats"} path='/ats' element={<ATSComponent />} />,
      <Route key={"behaviour"} path='/behaviour' element={<BehaviourComponent />} />,
      <Route key={"demo"} path='/demo' element={<DemoComponent />} />,
    ],
    []
  );

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        {commonRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
