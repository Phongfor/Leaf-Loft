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
    },
    {
        path: '/contact-us',
        component: lazy(() => import('@pages/ContactUs/ContactUs'))
    }
];

export default routes;
