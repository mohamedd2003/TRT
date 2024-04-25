import React from 'react';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import Events from '../Events/Events'
import About from '../About/About';
import Contact from '../Contact/Contact';

let routes=createBrowserRouter(
    [{
        path:'/',element:<Layout/>,
        children:[
            {index:true,element:<Home/>},
            {path:'home',element:<Home/>},
            {path:'events',element:<Events/>},
            {path:'about',element:<About/>},
            {path:'contact',element:<Contact/>},
        ]
    }]
)
export default function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
