import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import ToastProvider from "./components/ToastProvider"
import Login from "./pages/Login";
import MainLayout from "./wrappers/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


const routes =([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
    ]
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/login',
    element:<Login />
  },
])


const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return <>
  <ToastProvider />
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </>
};

export default App;
