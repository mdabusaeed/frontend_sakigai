import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;