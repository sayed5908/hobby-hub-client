import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './component/Home.jsx';
import CreateGroups from './component/CreateGroups.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Context/PrivateRoute.jsx';
import Profile from './component/Profile.jsx';
import Groups from './component/Groups.jsx';
import GroupDetails from './component/GroupDetails.jsx';
import UpdateGroup from './component/UpdateGroup.jsx';
import MyGroups from './component/MyGroups.jsx';
import Error from './component/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
      path: '/',
      loader: () => fetch('https://hobby-hub-server-with-auth.vercel.app/groups'),
      Component: Home
      },
      {
        path: 'creategroup',
        element: <PrivateRoute>
          <CreateGroups></CreateGroups>
        </PrivateRoute>
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'profile',
        loader: () => fetch('https://hobby-hub-server-with-auth.vercel.app/users'),
        Component: Profile
      },
      {
        path: 'allGroups',
        loader: () => fetch('https://hobby-hub-server-with-auth.vercel.app/groups'),
        Component: Groups
      },
      {
        path: 'groupDetails/:id',
        loader: ({params}) => fetch(`https://hobby-hub-server-with-auth.vercel.app/groups/${params.id}`),
        element: <PrivateRoute>
          <GroupDetails></GroupDetails>
        </PrivateRoute>
      },
      {
        path: 'updateGroup/:id',
        loader: ({params}) => fetch(`https://hobby-hub-server-with-auth.vercel.app/groups/${params.id}`),
        Component: UpdateGroup
      },
      {
        path: 'myGroups',
        loader: () => fetch('https://hobby-hub-server-with-auth.vercel.app/groups'),
        element: <PrivateRoute>
          <MyGroups></MyGroups>
        </PrivateRoute>
      }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
