import { useRoutes } from 'react-router-dom';
import Login from './pages/user/login';
import Register from './pages/user/register';
import ForgotPassword from './pages/user/forgotpassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/layout';
import Profile from 'pages/profile';
import { Categories, DashboardAdmin } from 'components/admin';
import FormOderList from 'components/profile/formOderList';
import UserTable from 'components/admin/user/userTable';
import Users from 'components/admin/user';
import Products from 'components/admin/products';
import Orders from 'components/admin/orders';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        // ADMIN
        {
          path: '/DashboardAdmin',
          element: <DashboardAdmin />,
        },
        {
          path: '/Categories',
          element: <Categories />,
        },
        {
          path: '/Products',
          element: <Products />,
        },
        {
          path: '/register',
          element: <Orders />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        // END ADMIN
        {
          path: '/categories',
          element: <Categories />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/formOderList',
          element: <FormOderList />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    { path: 'auth', element: '' },
  ]);
  return element;
};

export default App;
