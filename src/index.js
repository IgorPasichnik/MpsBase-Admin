import React, { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Paths } from "./paths";
import { ProductsPage } from "./pages/products-page";
import { ProductionsPage } from "./pages/productions-page";
import { AboutCompanyPage } from "./pages/about-company-page";
import { ErrorPage } from "./pages/error-page";
import { Login } from "./pages/login";
import { Auth } from "./features/auth/auth";
import { Products } from "./pages/products";
import { AddProducts } from "./pages/add-products";
import { Status } from "./pages/status";
import { Product } from "./pages/product";
import { EditProducts } from "./pages/edit-products";
import { Productions } from "./pages/productions";
import { Production } from "./pages/production";
import { AddProductions } from "./pages/add-productions";
import { EditProductions } from "./pages/edit-productions";

const router = createBrowserRouter([
  {
    path: Paths.aboutCompany,
    element: <AboutCompanyPage />,
  },
  {
    path: Paths.productsBase,
    element: <ProductsPage />,
  },
  {
    path: Paths.productionsBase,
    element: <ProductionsPage />,
  },
  {
    path: Paths.error,
    element: <ErrorPage />,
  },
  {
    path: Paths.products,
    element: <Products />,
  },
  {
    path: Paths.productions,
    element: <Productions />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.productsAdd,
    element: <AddProducts />,
  },
  {
    path: Paths.productionsAdd,
    element: <AddProductions />,
  },
  {
    path: `${Paths.status}/:status`,
    element: <Status />,
  },
  {
    path: `${Paths.product}/:id`,
    element: <Product />,
  },
  {
    path: `${Paths.production}/:id`,
    element: <Production />,
  },
  {
    path: `${Paths.productsEdit}/:id`,
    element: <EditProducts />,
  },
  {
    path: `${Paths.productionsEdit}/:id`,
    element: <EditProductions />,
  },
]);

const App = () => {
  const location = useLocation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const darkThemePaths = [
      Paths.products,
      Paths.productions,
      Paths.login,
      Paths.productsAdd,
      Paths.productionsAdd,
      `${Paths.status}/:status`,
      `${Paths.product}/:id`,
      `${Paths.production}/:id`,
      `${Paths.productsEdit}/:id`,
      `${Paths.productionsEdit}/:id`,
    ];
    setIsDarkTheme(darkThemePaths.includes(location.pathname));
  }, [location]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.darkAlgorithm,
      }}
    >
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </ConfigProvider>
  );
};

const Root = () => (
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
