import React from 'react';

import { Route, Navigate, Routes } from 'react-router-dom';

import modulesRoutes from 'base/constants/routesModules';
import { getMainModuleRoutes } from 'mainModule/routes';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const BaseRouter = () => {
  return (
    <Routes>
      {getMainModuleRoutes()}
      <Route path="*" element={<Navigate to={modulesRoutes.root} />} />
    </Routes>
  );
};

export default null;
