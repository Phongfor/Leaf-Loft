import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('@pages/client/HomePage/HomePage'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/client/OurShop/OurShop'))
    },
    {
        path: '/detailproduct',
        component: lazy(
            () => import('@pages/client/ProductDetail/ProductDetail')
        )
    },
    {
        path: '/contact-us',
        component: lazy(() => import('@pages/client/ContactUs/ContactUs'))
    },
    {
        path: '/about-us',
        component: lazy(() => import('@pages/client/AboutUs/AboutUs'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/client/CartPage/CartPage'))
    },
    {
        path: '/my-orders',
        component: lazy(() => import('@pages/client/MyOrdersPage/MyOrdersPage'))
    },
    {
        path: '/search',
        component: lazy(() => import('@pages/client/SearchPage/SearchPage'))
    }
];

export const adminRoutes = [
    {
        path: '/admin',
        component: lazy(() => import('@pages/admin/AdminPanel')),
        role: 'admin'
    }
];

export default routes;
