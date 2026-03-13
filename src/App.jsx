import routes from '@/routes/routes';
import { Suspense } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from '@contexts/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SideBarProvider } from '@contexts/SideBarProvider';
import { FilterProvider } from './contexts/FilterProvider';

const queryClient = new QueryClient();

function App() {
    return (
        <SideBarProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <FilterProvider>
                        <BrowserRouter>
                            <Suspense fallback={<div>LOADING........</div>}>
                                <Routes>
                                    {routes.map((item, index) => {
                                        return (
                                            <Route
                                                path={item.path}
                                                element={<item.component />}
                                                key={index}
                                            />
                                        );
                                    })}
                                </Routes>
                            </Suspense>
                        </BrowserRouter>
                    </FilterProvider>
                </AuthProvider>
            </QueryClientProvider>
        </SideBarProvider>
    );
}

export default App;
