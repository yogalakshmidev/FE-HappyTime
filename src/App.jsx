import React from "react";
import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <h1>HEllO</h1>,
  },
];

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
  return <RouterProvider
   router={router}
   future={{
    v7_startTransition: true,
   }} />;
};

export default App;
