import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../assets/css/header.scss';
import logo from '../../assets/images/ivy-moda.png';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { logoutSuccess } from '../../stores/slices/authSlice';

const mainNav = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Women',
    path: '/women',
  },
  {
    display: 'Men',
    path: '/men',
  },
  {
    display: 'Kid',
    path: '/kid',
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const isLogged = useAppSelector((state) => state.auth.login?.isLogged);
  const headerRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current?.classList.add('shrink');
      } else {
        headerRef.current?.classList.remove('shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
        //null here ///
      });
    };
  }, []);

  const menuLeft = useRef<HTMLInputElement>(null);
  const menuToggle = () => menuLeft.current?.classList.toggle('active');

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate('/');
  };

  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="header_logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header_menu">
            <div className="header_menu_mobile-toggle" onClick={menuToggle}>
              <i className="bx bx-menu-alt-left" />
            </div>
            <div className="header_menu_left" ref={menuLeft}>
              <div className="header_menu_left_close" onClick={menuToggle}>
                <i className="bx bx-chevron-left" />
              </div>
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className={`header_menu_item header_menu_left_item ${
                    index === activeNav ? 'active' : ''
                  }`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="header_menu_right">
              <div className="header_menu_item header_menu_right_item">
                <Link to="/cart">
                  <i className="bx bx-shopping-bag" />
                </Link>
              </div>
              <div className="header_menu_item header_menu_right_item">
                {isLogged ? (
                  <div className="dropdown">
                    <div className="profile bx bxs-user-detail">
                      <div className="dropdown-content ">
                        <ul>
                          <li>
                            <Link to="/profile">
                              <i className="bx bx-user">Profiles</i>
                            </Link>
                          </li>
                          <li>
                            <i className="bx bx-log-in-circle" onClick={handleLogout}>
                              Logout
                            </i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to="/login">
                    <i className="bx bx-user" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
