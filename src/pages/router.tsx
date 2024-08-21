import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useMemo, useCallback } from "react";


const HomeComponent = React.lazy(() => import("./home"));

const Router = () => {
  const commonRoutes = useMemo(
    () => [
      // <Route key={"atmiv"} path='/atmiv' element={<IVScreenerComponent />} />,
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
