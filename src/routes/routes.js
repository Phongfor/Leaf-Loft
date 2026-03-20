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
    },
    {
        path: '/about-us',
        component: lazy(() => import('@pages/AboutUs/AboutUs'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/CartPage/CartPage'))
    },
    {
        path: '/my-orders',
        component: lazy(() => import('@pages/MyOrdersPage/MyOrdersPage'))
    }
];

export default routes;
