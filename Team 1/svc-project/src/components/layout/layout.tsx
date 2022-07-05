import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

 const Layout = () => {
  return (
    <main className="App">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

 export default Layout