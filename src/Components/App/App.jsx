import React from 'react';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import Events from '../Events/Events'
import AboutPage from '../AboutPage/AboutPage';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import NotFound from '../NotFound/NotFound';
import AutovroomEvent from '../AutovroomEvent/AutovroomEvent';
import QatarEvent from '../QatarEvent/QatarEvent';

let routes=createBrowserRouter(
    [{
        path:'/',element:<Layout/>,
        children:[
            {index:true,element:<Home/>},
            {path:'aboutPage',element:<AboutPage/>},
            {path:'events',element:<Events/>},
            {path:'contact',element:<Contact/>},
            {path:'gallery',element:<Gallery/>},
            {path:'autovroomEvent',element:<AutovroomEvent/>},
            {path:'QatarEvent',element:<QatarEvent/>},
            {path:'*',element:<NotFound/>},
        ]
    }]
)
export default function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
