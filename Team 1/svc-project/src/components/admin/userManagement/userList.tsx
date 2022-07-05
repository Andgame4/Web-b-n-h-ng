import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../stores/index';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import '../../../assets/css/useList.scss';
export function UserList() {
  const users = useAppSelector((state) => state.users);
  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <table className="table align-middle mb-0 bg-white">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, email, phoneNumber, address }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{address}</td>
                <td>
                  <Link to={`/edit-user/${id}`}>
                    <button className="btn btn-primary btn-edit">
                      <FiEdit3 />
                    </button>
                  </Link>
                  <Link to={`/add-user`}>
                    <button className="btn btn-primary btn-add">
                      <AiOutlineUserAdd />
                    </button>
                  </Link>
                  <button className="btn btn-danger btn-remove">
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
