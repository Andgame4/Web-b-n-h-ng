import Profile from 'pages/profile';
import { useRoutes } from 'react-router-dom';
import Login from './pages/login';
import ForgotPassword from './pages/user/forgotpassword';
import Register from './pages/user/register';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Categories, DashboardAdmin, OrdersAdmin, ProductsAdmin } from './components/admin/';
import Layout from './components/layout/layout';
const App =()=> {
     let element = useRoutes([
       {
         path: '/',
         element: <Layout />,
         children: [
           //Admin
           {
             path: '/',
             element: <DashboardAdmin />,
           },
           {
             path: '/Dashboard',
             element: <DashboardAdmin />,
           },
           {
             path: '/Categories',
             element: <Categories />,
           },
           {
             path: '/Products-admin',
             element: <ProductsAdmin />,
           },
           {
             path: '/orders-admin',
             element: <OrdersAdmin />,
           },

           //Admin
           {
             path: '/register',
             element: <Register />,
           },
           {
             path: '/login',
             element: <Login />,
           },
           {
             path: '/profile',
             element: <Profile />,
           },
           {
             path: '/forgotpassword',
             element: <ForgotPassword />,
           },
         ],
       },
       { path: 'auth', element: '' },
     ]);
     return element;
}
export default App;
