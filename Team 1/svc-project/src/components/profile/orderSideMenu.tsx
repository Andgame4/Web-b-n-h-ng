import React from 'react';
import Avatar from './avatar';
import { AiOutlineUser } from 'react-icons/ai';
import { IoReloadOutline } from 'react-icons/io5';
import '../../assets/css/profileCss/orderSideMenu.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'stores/hook';
import { FaUserEdit } from 'react-icons/fa';

const OrderSideMenu = () => {
  const profile = useAppSelector((state) => state.profile.profileInfor);
  return (
    <div className="order-sidemenu block-border">
      <div className="order-sidemenu__user">
        <div className="order-sidemenu__user-name">
          <div className="oder-sidemenu_editInfo">
            <FaUserEdit className="image_editInfo" /> {profile.userName}
          </div>
        </div>
      </div>
      <div className="order-sidemenu__menu">
        <ul>
          <li className="active">
            <Link to={`/profile`}>
              <span className="order-sidemenu__menu_icon">
                <AiOutlineUser className="user_menu_icon" />
              </span>
              Account information
            </Link>
          </li>
          <li className="active">
            <Link to={`/formOderList`}>
              <span className="order-sidemenu__menu_icon">
                <IoReloadOutline className="user_menu_icon" />
              </span>
              Order Management
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSideMenu;
