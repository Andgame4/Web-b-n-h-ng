import axios from 'axios';
import React, { memo, useCallback, useEffect, useState } from 'react';
import '../../../assets/css/userManagement.scss';
import { FiEdit3 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button, Form, Modal } from 'react-bootstrap';
import { validateAddress, validateEmail, validateName, validatePhoneNumber } from 'utils/validate';
import EditUserAPI from 'api/editUserAPI';
import DeleteUserAPI from 'api/deleteUserAPI';
import { Row } from './row';
interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  address: string;
}

const baseURL = 'http://localhost:8000/user';

const UserManagement = () => {
  const [id, setId] = useState<number>(0);
  const [username, setUserName] = useState<string>('');
  const [errorName, setErrorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [errorAddress, setErrorAddress] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  const [borderNameInput, setborderNameInput] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = useCallback(
    (userData: User) => {
      setId(userData.id);
      setEmail(userData.email);
      setUserName(userData.username);
      setPhone(userData.phone);
      setAddress(userData.address);
      setShow(true);
    },
    [setId]
  );
  // call api
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(baseURL);
        console.log(response);
        setData(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [refreshKey]);

  // handle
  const handleUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setUserName(value);
    },
    [username]
  );
  const handleEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
    },
    [email]
  );
  const handlePhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPhone(value);
    },
    [phone]
  );
  const handleAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setAddress(value);
    },
    [address]
  );

  const handleDelete = useCallback(
    async (id: number) => {
      const msg = await DeleteUserAPI(id);
      setData(data?.filter((item) => item.id !== id));
      console.log('done' + id);
      setRefreshKey((oldKey) => oldKey + 1);
    },
    [id]
  );

  // validate
  const checkName = validateName(username);
  const checkEmail = validateEmail(email);
  const checkPhoneNumber = validatePhoneNumber(phone);
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

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateForm() && status === true) {
      const response = await EditUserAPI(id, username, email, phone, address);
      alert('Successfully');
      handleClose();
      setRefreshKey((oldKey) => oldKey + 1);
    }
  };

  return (
    <div>
      {loading && (
        <div className="d-flex justify-content-center loading">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div className="container-table">
          <div className="d-flex input-group">
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" placeholder="search" />
            </div>
            <button type="button" className="btn btn-primary">
              <AiOutlineSearch />
            </button>
          </div>
          {/* <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead> */}
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
              <tbody>
                {data.map((item, index) => (
                  <Row
                    data={item}
                    key={index}
                    handleShow={handleShow}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation" className="navigation">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link">Previous</button>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <>
        <Modal show={show} onHide={handleClose} id="modal-root">
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>UserName:</Form.Label>
                <Form.Control type="text" value={username} onChange={handleUserName} />
              </Form.Group>
              <p>{errorName}</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={email} onChange={handleEmail} />
              </Form.Group>
              <p>{errorEmail}</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={phone} onChange={handlePhone} />
              </Form.Group>
              <p>{errorPhoneNumber}</p>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={address} onChange={handleAddress} />
              </Form.Group>
              <p>{errorAddress}</p>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default UserManagement;
