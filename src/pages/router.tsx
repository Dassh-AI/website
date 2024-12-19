import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useMemo } from "react";

const HomeComponent = React.lazy(() => import("./home"));
const ATSComponent = React.lazy(() => import("./ats"));
const BehaviourComponent = React.lazy(() => import("./behaviour"));
const DemoComponent = React.lazy(() => import("./demo"));
const PricingComponent = React.lazy(() => import("./pricing"));
const AboutComponent = React.lazy(() => import("./about"));

const Router = () => {
  const commonRoutes = useMemo(
    () => [
      <Route key={"ats"} path="/ats" element={<ATSComponent />} />,
      <Route
        key={"behaviour"}
        path="/behaviour"
        element={<BehaviourComponent />}
      />,
      <Route key={"demo"} path="/demo" element={<DemoComponent />} />,
      <Route key={"pricing"} path="/pricing" element={<PricingComponent />} />,
      <Route key={"about"} path="/about" element={<AboutComponent />} />,
    ],
    []
  );

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        {commonRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
