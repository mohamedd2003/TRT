import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "../Layout/Layout";
import Lazy from "../LazyLoading/LazyLoading";
import Footer from '../Footer/Footer';
import NewAlalmein from '../NewAlalmein/NewAlalmein';
import Register from '../Register/Register';
import Voting from '../Voting/Voting';
import { UserContextProvider } from '../../Context/Users/UsersContext';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
const Home = lazy(() => import('../Home/Home'));
const Events = lazy(() => import('../Events/Events'));
const AboutPage = lazy(() => import('../AboutPage/AboutPage'));
const Contact = lazy(() => import('../Contact/Contact'));
const Gallery = lazy(() => import('../Gallery/Gallery'));
const NotFound = lazy(() => import('../NotFound/NotFound'));
const AutovroomEvent = lazy(() => import('../AutovroomEvent/AutovroomEvent'));
const QatarEvent = lazy(() => import('../QatarEvent/QatarEvent'));
const ElshroukEvent = lazy(() => import('../ElshroukEvent/ElshroukEvent'));
const CiuEvent = lazy(() => import('../CiuEvent/CiuEvent'));

let routes = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'aboutPage', element: <AboutPage /> },
            { path: 'events', element: <Events /> },
            { path: 'contact', element: <Contact /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'autovroomEvent', element: <AutovroomEvent /> },
            { path: 'QatarEvent', element: <QatarEvent /> },
            { path: 'ElshroukEvent', element: <ElshroukEvent /> },
            { path: 'CiuEvent', element: <CiuEvent /> },
            { path: 'newAlalmein', element: <NewAlalmein /> },
            { path: 'Footer', element: <Footer /> },
            { path: 'register', element: <Register /> },
            { path: '/voting', element: <ProtectedRoute><Voting /></ProtectedRoute>  },
            { path: '/login', element: <Login /> },
            { path: '*', element: <NotFound /> },
        ]
    }
]);

export default function App() {
    return (
        <Suspense fallback={<Lazy />}>
            <UserContextProvider>

                <RouterProvider router={routes} />

            </UserContextProvider>

        </Suspense>
    );
}
