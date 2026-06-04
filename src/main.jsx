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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
      path: '/',
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
        loader: () => fetch('http://localhost:3000/users'),
        Component: Profile
      },
      {
        path: 'allGroups',
        loader: () => fetch('http://localhost:3000/groups'),
        Component: Groups
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
