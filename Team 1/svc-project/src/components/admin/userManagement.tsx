import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../assets/css/userManagement.scss';
import { FiEdit3 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
}

const baseURL = 'http://localhost:8000/user';
const UserManagement = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(baseURL);
        setData(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const listItems = data.map((item: User) => (
    <tr>
      <th scope="row" key={item.id}>
        {item.id}
      </th>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>
        <a href="" title="Edit">
          <FiEdit3 />
        </a>
        <a href="" title="Delete">
          <AiFillDelete />
        </a>
      </td>
    </tr>
  ));

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
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{listItems}</tbody>
          </table>
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
    </div>
  );
};

export default UserManagement;
