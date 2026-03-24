import { useState } from 'react';
import DashboardPage from './pages/DashboardPage/Dashboardpage';
import InventoryPage from './pages/InventoryPage/Inventorypage';
import OrdersPage from './pages/OrdersPage/Orderspage';
import CustomersPage from './pages/CustomersPage/Customerspage';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

const pageConfig = {
    dashboard: {
        title: 'Dashboard Overview',
        subtitle: "Welcome back, Chief! Here's the buzz today.",
        component: <DashboardPage />
    },
    inventory: {
        title: 'Product Inventory',
        subtitle: 'Manage your products and stock levels.',
        component: <InventoryPage />
    },
    orders: {
        title: 'Orders Management',
        subtitle: 'Track and fulfill customer orders.',
        component: <OrdersPage />
    },
    customers: {
        title: 'Customer Directory',
        subtitle: 'Manage your loyal customer base.',
        component: <CustomersPage/>
    }
};

function AdminPanel() {
    const [activePage, setActivePage] = useState('dashboard');

    const page = pageConfig[activePage] ?? pageConfig.dashboard;

    return (
        <div className='flex h-screen bg-[#f4f6f3] overflow-hidden font-sans'>
            <AdminSidebar activePage={activePage} onNavigate={setActivePage} />

            <div className='flex-1 flex flex-col overflow-hidden'>
                <AdminHeader title={page.title} subtitle={page.subtitle} />
                <main className='flex-1 overflow-y-auto'>{page.component}</main>
            </div>
        </div>
    );
}

export default AdminPanel;
