import React, { useCallback, useEffect, useState } from 'react';
import '../../../assets/css/adminCss/userTable.scss';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Input from 'components/input/input';
import { set } from 'immer/dist/internal';
import { validateAddress, validateEmail, validateName, validatePhoneNumber } from 'utils/validate';
import EditUserAPI from 'api/adminAPI/editUserAPI';
import DeleteUserAPI from 'api/adminAPI/deleteUserAPI';
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}
const UserTable = () => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const [errorName, setErrorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [errorAddress, setErrorAddress] = useState<string>('');
  const [dataUser, setDataUser] = useState([]);
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const handleClose = () => setShow(false);
  const [refresh, setRefresh] = useState<string>('');
  const handleShowAdd = () => {
    setShowAdd(true);
  };
  const handleShow = (data: User) => {
    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setPhoneNumber(data.phone);
    setAddress(data.address);
    setShow(true);
  };
  // call api
  const baseURL = 'http://localhost:8000/users';
  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(baseURL);
      setDataUser(response);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [refresh]);

  // handle
  const handleName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  }, []);
  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  }, []);

  const handlePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  }, []);
  const handleAddress = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
  }, []);
  // validare
  const checkName = validateName(name);
  const checkEmail = validateEmail(email);
  const checkPhoneNumber = validatePhoneNumber(phoneNumber);
  const checkAddress = validateAddress(address);
  const status = !!(
    checkName.status &&
    checkEmail.status &&
    checkPhoneNumber.status &&
    checkAddress.status
  );

  const validateForm = () => {
    setErrorName(checkName.message);
    setErrorEmail(checkEmail.message);
    setErrorPhoneNumber(checkPhoneNumber.message);
    setErrorAddress(checkAddress.message);
    return true;
  };

  // edit
  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm() && status === true) {
      const response = await EditUserAPI(id, name, email, phoneNumber, address);
      console.log(response);
      setRefresh('+1');
      handleClose();
    }
  };

  // delete
  const handleDelete = async (id: number) => {
    const response = await DeleteUserAPI(id);
    console.log(response);
    setRefresh('+2');
  };

  // fetchData
  const listItems = dataUser.map((number: User) => (
    <tr key={number.id}>
      <td>{number.id}</td>
      <td>{number.name}</td>
      <td>{number.email}</td>
      <td>{number.phone}</td>
      <td>{number.address}</td>
      <td className="list-item-user">
        <Button
          variant="warning"
          className="edit"
          title="Edit"
          data-toggle="tooltip"
          onClick={() => handleShow(number)}
        >
          <i className="material-icons">
            <AiFillEdit />
          </i>
        </Button>

        <Button
          variant="danger"
          className="edit"
          title="Edit"
          data-toggle="tooltip"
          onClick={() => handleDelete(number.id)}
        >
          <i className="material-icons">
            <AiFillDelete />
          </i>
        </Button>
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
                  Quản lí <b>User</b>
                </h2>
              </div>
              <div className="col-sm-4">
                <button type="button" className="btn btn-info add-new" onClick={handleShowAdd}>
                  <i className="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên đăng nhập</th>
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
      {/* Edit modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Tên đăng nhập
              </label>
              <Input
                type="text"
                id="name"
                className={`form-control form-control-lg`}
                placeholder=""
                value={name}
                onChange={handleName}
                errorText={errorName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <Input
                type="text"
                id="email"
                className={`form-control form-control-lg`}
                placeholder=""
                value={email}
                onChange={handleEmail}
                errorText={errorEmail}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Số điện thoại
              </label>
              <Input
                type="text"
                id="phoneNumber"
                className={`form-control form-control-lg`}
                placeholder=""
                value={phoneNumber}
                onChange={handlePhone}
                errorText={errorPhoneNumber}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Địa chỉ
              </label>
              <Input
                type="text"
                id="address"
                className={`form-control form-control-lg`}
                placeholder=""
                value={address}
                onChange={handleAddress}
                errorText={errorAddress}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Add modal */}
      <Modal show={showAdd} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Tên đăng nhập
              </label>
              <Input
                type="text"
                id="name"
                className={`form-control form-control-lg`}
                placeholder=""
                value={name}
                onChange={handleName}
                errorText={errorName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <Input
                type="text"
                id="email"
                className={`form-control form-control-lg`}
                placeholder=""
                value={email}
                onChange={handleEmail}
                errorText={errorEmail}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Số điện thoại
              </label>
              <Input
                type="text"
                id="phoneNumber"
                className={`form-control form-control-lg`}
                placeholder=""
                value={phoneNumber}
                onChange={handlePhone}
                errorText={errorPhoneNumber}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Địa chỉ
              </label>
              <Input
                type="text"
                id="address"
                className={`form-control form-control-lg`}
                placeholder=""
                value={address}
                onChange={handleAddress}
                errorText={errorAddress}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserTable;
