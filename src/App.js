//React router
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
// Pages & Components
import Home from "./Pages/Home/Home";




export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />} />
    )
  );


  
  return <RouterProvider router={router} />;
}