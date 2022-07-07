import React, { useEffect, useState } from 'react';
import '../../../assets/css/adminCss/userTable.scss';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}
const UserTable = () => {
  const [dataUser, setDataUser] = useState([]);
  const baseURL = 'http://10.22.4.62:8762/user';
  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(baseURL);
      console.log('hello', response);
      setDataUser(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listItems = dataUser.map((number: User) => (
    <tr key={number.id}>
      <td>{number.name}</td>
      <td>{number.email}</td>
      <td>{number.phone}</td>
      <td>{number.address}</td>
      <td>
        <a className="edit" title="Edit" data-toggle="tooltip">
          <i className="material-icons">
            <AiFillEdit />
          </i>
        </a>
        <a className="delete" title="Delete" data-toggle="tooltip">
          <i className="material-icons">
            <AiFillDelete />
          </i>
        </a>
      </td>
    </tr>
  ));
  return (
    <div className="container-lg">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-8">
                <h2>
                  Employee <b>Details</b>
                </h2>
              </div>
              <div className="col-sm-4">
                <button type="button" className="btn btn-info add-new">
                  <i className="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{listItems}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
