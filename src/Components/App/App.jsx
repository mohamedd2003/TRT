import React from 'react';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import Events from '../Events/Events'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';

let routes=createBrowserRouter(
    [{
        path:'/',element:<Layout/>,
        children:[
            {index:true,element:<Home/>},
            {path:'home',element:<Home/>},
            {path:'events',element:<Events/>},
            {path:'contact',element:<Contact/>},
            {path:'gallery',element:<Gallery/>},
        ]
    }]
)
export default function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
