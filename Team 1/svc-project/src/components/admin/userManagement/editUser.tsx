import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'stores';
import { useCallback, useState } from 'react';
import { userUpdated } from 'stores/slices/userAdminSlice';

export function EditUser() {
  const { pathname } = useLocation();
  const userId = pathname.replace('/edit-user/', '');

  const user = useAppSelector((state) => state.users.find((user) => user.id === userId));

  const dispatch = useDispatch();
  const history = useNavigate();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [error, setError] = useState('');

  console.log(name);

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

  const handleClick = () => {
    if (name && email && phoneNumber && address) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
          phoneNumber,
          address,
        })
      );

      setError('');
      history('/');
    } else {
      setError('Fill in all fields');
    }

    setName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="emailInput">PhoneNumber</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="phone number"
            id="emailInput"
            onChange={handlePhone}
            value={phoneNumber}
          />
          <label htmlFor="emailInput">Address</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="phone number"
            id="emailInput"
            onChange={handleAddress}
            value={address}
          />
          {error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
