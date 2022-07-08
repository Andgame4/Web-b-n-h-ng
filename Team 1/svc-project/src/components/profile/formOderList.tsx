import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../assets/css/profileCss/formOderList.scss';
import OrderSideMenu from './orderSideMenu';

interface Products {}
const FormOderList = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const baseURL = 'http://localhost:8000/products';
  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(baseURL);
      console.log('hello', response);
      setDataProduct(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const listItems = dataProduct.map((number: Products) => (
  //   <tr key={number.id}>
  //     <td>{number.name}</td>
  //     <td>{number.email}</td>
  //     <td>{number.phone}</td>
  //     <td>{number.address}</td>
  //     <td></td>
  //   </tr>
  // ));
  return (
    <div className="row oderlist_management">
      <div className="col-lg-4 col-xl-auto">
        <OrderSideMenu />
      </div>
      <div className="col-lg-8 col-xl-account-content">
        <div className="order-block__title">
          <h2>QUẢN LÝ ĐƠN HÀNG</h2>
          <div className="form-group">
            <label> Trạng thái đơn hàng:</label>
            <select
              className="form-control rounded ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse"
              ng-model="status"
              ng-change="list()"
            >
              <option value="">Tất cả</option>
              <option value="dang_xu_ly">Đang xử lý</option>
              <option value="cho_giao_van">Chờ giao vận</option>
              <option value="dang_van_chuyen">Đã gửi</option>
              <option value="da_nhan_hang">Đã nhận hàng</option>
            </select>
          </div>
        </div>
        <div className="order-block">
          <table className="order-block__table">
            <thead>
              <tr>
                <th>MÃ ĐƠN HÀNG</th>
                <th>NGÀY</th>
                <th>TRẠNG THÁI</th>
                <th>SẢN PHẨM</th>
                <th>TỔNG TIỀN</th>
              </tr>
            </thead>
            <tbody className="scroll_body"></tbody>
          </table>
          <div className="product-rating__list-pagination">
            <ul className="list-inline-pagination"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOderList;
