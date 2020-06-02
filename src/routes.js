
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import Dashboard from './views/Dashboard';
// import DoctorCategory from './views/DoctorCategory/DoctorCategory';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard
      },
      {
        path: '/dashboard/:id',
        exact: true,
        component: lazy(() => import('./views/DashboardLiveList'))
      },
      {
        path: '/patient_list',
        exact: true,
        component: lazy(() => import('./views/PatientList/PatientList2'))
      },
      {
        path: '/patient_list/:id',
        exact: true,
        component: lazy(() => import('./views/PatientListDetail/PatientListDetail'))
      },
      {
        path: '/notification',
        exact: true,
        component: lazy(() => import('./views/Notification'))
      },
      {
        path: '/notification/:id',
        exact: true,
        component: lazy(() => import('./views/Notification'))
      },
      {
        path: '/profile',
        exact: true,
        component: lazy(() => import('./views/UserProfile/UserProfile'))
      },
     
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
