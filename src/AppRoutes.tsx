import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from './Routes';
import { mapRoutes } from './Utils/mapRoutes';

const AppLayout = lazy(() => import('./Components/Layout/AppLayout/AppLayout'));

function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<>loading layout ...</>}>
          <AppLayout />
        </Suspense>
      ),
      children: mapRoutes(appRoutes),
    },
  ]);
}

export default AppRoutes;
