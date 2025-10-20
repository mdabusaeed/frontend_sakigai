import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Shop from '../pages/Shop';



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