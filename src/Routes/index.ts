import React from 'react';
import { IRoute } from '~/Interfaces/Routes';

const Ressources = React.lazy(() => import('~/Pages/Ressources/Ressources'));
const Ressource = React.lazy(() => import('~/Pages/Ressources/Ressource'));
const Users = React.lazy(() => import('~/Pages/Users/Users'));
const User = React.lazy(() => import('~/Pages/Users/User'));

export const appRoutes: IRoute[] = [
  {
    path: `users`,
    name: 'Liste des utilisateurs',
    component: Users,
  },
  {
    path: `ressources`,
    name: 'Liste des ressources',
    component: Ressources,
  },
  {
    path: `detail-user/:id`,
    name: `Detail de l'utilisateurs `,
    component: User,
  },
  {
    path: `detail-ressource/:id`,
    name: `Detail du ressource `,
    component: Ressource,
  },
];
