import { useRoutes } from 'react-router-dom';
import Login from './pages/user/login';
import Register from './pages/user/register';
import ForgotPassword from './pages/user/forgotpassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/layout';
import Profile from 'pages/profile';
import { Categories, DashboardAdmin, Orders, Products } from 'components/admin';
import FormOderList from 'components/profile/formOderList';
import UserTable from 'components/admin/user/userTable';
import Users from 'components/admin/user';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <DashboardAdmin />,
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
      ],
    },
    { path: 'auth', element: '' },
  ]);
  return element;
};

export default App;
