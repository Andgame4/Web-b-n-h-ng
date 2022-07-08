import React, { useCallback, useEffect, useState } from 'react';
import '../../../assets/css/adminCss/userTable.scss';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Input from 'components/input/input';
import { validateAddress, validateEmail, validateName, validatePhoneNumber } from 'utils/validate';
import EditUserAPI from 'api/adminAPI/editUserAPI';
import DeleteUserAPI from 'api/adminAPI/deleteUserAPI';
import { AiOutlineSearch } from 'react-icons/ai';
interface User {
  id: number;
  name: string;
  username: string; //email
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
  const [searchName, setSearchName] = useState<string>('');
  const [dataUser, setDataUser] = useState([]);
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState<string>('');
  // call api
  useEffect(() => {
    const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
    const baseURL = 'http://10.22.4.62:8762/user?name=' + searchName;
    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseURL, config);
        setDataUser(response.data.content);
        console.log(response.data.content);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [searchName, refresh]);

  // modalshow
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (data: User) => {
    setId(data.id);
    setName(data.name);
    setEmail(data.username);
    setPhoneNumber(data.phone);
    setAddress(data.address);
    setShow(true);
  };
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
  const handleSearchName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchName(value);
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
      const responseEdit = await EditUserAPI(id, name, email, address, phoneNumber);
      handleClose();
    }
    setRefresh('' + 1);
  };

  // delete
  const handleDelete = async (id: number) => {
    const responseDelete = await DeleteUserAPI(id);
    alert('Xác nhận xóa !!');
    setRefresh('+1');
  };

  // fetchData
  const listItems = dataUser.map((number: User) => (
    <tr key={number.id}>
      <td>{number.id}</td>
      <td>{number.name}</td>
      <td>{number.username}</td>
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
              <div className="col-sm-9">
                <h2>
                  Quản lí <b>User</b>
                </h2>
              </div>
              <div className="col-sm-3">
                <div className="input-group">
                  <div className="form-outline">
                    <Input
                      type="text"
                      id="name"
                      className={`form-control form-control-lg-name`}
                      placeholder="Seacrch"
                      value={searchName}
                      onChange={handleSearchName}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr className="row-user">
                <th className="colum-index">STT</th>
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
                className={`form-control form-control-lg-name`}
                placeholder=""
                value={name}
                onChange={handleName}
              />
              <p className="validate_input">{errorName}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <Input
                type="text"
                id="email"
                className={`form-control form-control-lg-email`}
                placeholder=""
                value={email}
                onChange={handleEmail}
              />
              <p className="validate_input">{errorEmail}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Số điện thoại
              </label>
              <Input
                type="text"
                id="phoneNumber"
                className={`form-control form-control-lg-phone`}
                placeholder=""
                value={phoneNumber}
                onChange={handlePhone}
              />
              <p className="validate_input">{errorPhoneNumber}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Địa chỉ
              </label>
              <Input
                type="text"
                id="address"
                className={`form-control form-control-lg-address`}
                placeholder=""
                value={address}
                onChange={handleAddress}
              />
              <p className="validate_input">{errorAddress}</p>
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
