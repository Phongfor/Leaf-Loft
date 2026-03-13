import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('@pages/HomePage/HomePage'))
    },
     {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    } 
];

export default routes;
