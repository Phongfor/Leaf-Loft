import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('@pages/HomePage/HomePage'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {
        path: '/detailproduct',
        component: lazy(() => import('@pages/ProductDetail/ProductDetail'))
    }
];

export default routes;
