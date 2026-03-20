import routes, { adminRoutes } from '@/routes/routes';
import PrivateRoute from '@/routes/PrivateRoute';
import { Suspense } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from '@contexts/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SideBarProvider } from '@contexts/SideBarProvider';
import { OurShopProvider } from '@contexts/OurShopProvider';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <Toaster position='top-right' richColors />
            <SideBarProvider>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <OurShopProvider>
                            <BrowserRouter>
                                <Suspense fallback={<div>LOADING........</div>}>
                                    <Routes>
                                        {/* Client routes */}
                                        {routes.map((item, index) => (
                                            <Route
                                                key={index}
                                                path={item.path}
                                                element={<item.component />}
                                            />
                                        ))}

                                        {/* Admin routes */}
                                        {adminRoutes.map((item, index) => (
                                            <Route
                                                key={`admin-${index}`}
                                                path={item.path}
                                                element={
                                                    <PrivateRoute
                                                        role={item.role}
                                                    >
                                                        <item.component />
                                                    </PrivateRoute>
                                                }
                                            />
                                        ))}
                                    </Routes>
                                </Suspense>
                            </BrowserRouter>
                        </OurShopProvider>
                    </AuthProvider>
                </QueryClientProvider>
            </SideBarProvider>
        </>
    );
}

export default App;
