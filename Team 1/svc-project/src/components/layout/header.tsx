import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../assets/css/header.scss';
import logo from '../../assets/images/ivy-moda.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { logoutSuccess } from '../../stores/slices/authSlice';


const mainNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Nữ',
    path: '/',
  },
  {
    display: 'Nam',
    path: '/accessories',
  },
  {
    display: 'Bộ Sưu Tập',
    path: '/',
  },
];

const Header = () => {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex(e => e.path === pathname);
    const isLogged = useAppSelector(state => state.auth.login?.isLogged);
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
  
    //hover user; login, profile
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };
  
    const handleLogout = () => {
      dispatch(logoutSuccess());
      navigate('/');
    };
  
    return (
      <header>
        <div className="header">
          <div className="container">
            <div className="header__logo">
              <Link to="/">
                {/* LOGO here */}
                <img
                  src="https://dienanhtrongtamtay.com/wp-content/uploads/2021/04/Icon-la-gi.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="header__menu">
              <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                <i className="bx bx-menu-alt-left" />
              </div>
              <div className="header__menu__left" ref={menuLeft}>
                <div className="header__menu__left__close" onClick={menuToggle}>
                  <i className="bx bx-chevron-left" />
                </div>
                {mainNav.map((item, index) => (
                  <div
                    key={index}
                    className={`header__menu__item header__menu__left__item ${
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
              <div className="header__menu__right">
                <div className="header__menu__item header__menu__right__item">
                  <i className="bx bx-search" />
                </div>
                <div className="header__menu__item header__menu__right__item">
                  <Link to="/cart">
                    <i className="bx bx-shopping-bag" />
                  </Link>
                </div>
                <div className="header__menu__item header__menu__right__item">
                  {isLogged ? (
                    <i
                      className="bx bx-log-out"
                      onClick={handleLogout}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    />
                  ) : (
                    <Link to="/login">
                      <i
                        className="bx bx-user"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      >
                        {/* {isHovering && (
                      <div className="header_menu_user ">
                        <Link to="/login">Login</Link>
                        <br />
                        <Link to="/profile">Profile</Link>
                      </div>
                    )} */}
                      </i>
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
  