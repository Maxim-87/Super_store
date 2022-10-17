import React from "react";
import {Route} from "react-router-dom";
import {Home} from "../pages/Home";
import mainModuleRoutes from "../../base/constants/routes/mainModuleRoutes";
import {MainModuleLayout} from "../layouts/MainModuleLayouts";
import {AddProduct} from "../pages/AddProduct";
import {Product} from "../../base/components/Product";
import {EditProduct} from "../pages/EditProduct";

export const getMainModuleRoutes = () => (
  <>
    <Route
      path={mainModuleRoutes.root}
      element={(
        <MainModuleLayout>
          <Home/>
        </MainModuleLayout>
      )}
    />
    <Route
      path={mainModuleRoutes.create.root}
      element={(
        <MainModuleLayout>
          <AddProduct/>
        </MainModuleLayout>
      )}
    />
    <Route
      path={mainModuleRoutes.product.root}
      element={(
        <MainModuleLayout>
          <Product/>
        </MainModuleLayout>
      )}
    />
    <Route
      path={mainModuleRoutes.edit.rootParam}
      element={(
        <MainModuleLayout>
          <EditProduct/>
        </MainModuleLayout>
      )}
    />
  </>
)

export default null;