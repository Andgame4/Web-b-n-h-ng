import { useCallback, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAdded } from 'stores/slices/userAdminSlice';
import { useAppSelector } from 'stores';
export function AddUser() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');

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
  const usersAmount = useAppSelector((state) => state.users.length);
  const handleClick = () => {
    if (name && email && phoneNumber && address) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
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
        <h1>Add user</h1>
      </div>
      {/* <div classNameName="row">
        <div classNameName="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            classNameName="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            classNameName="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="emailInput">Phone</label>
          <input
            classNameName="u-full-width"
            type="email"
            placeholder="phoneNumber"
            id="emailInput"
            onChange={handlePhone}
            value={phoneNumber}
          />
          <label htmlFor="emailInput">Address</label>
          <input
            classNameName="u-full-width"
            type="email"
            placeholder="address"
            id="emailInput"
            onChange={handleAddress}
            value={address}
          />
          {error}
          <button onClick={handleClick} classNameName="button-primary">
            Add user
          </button>
        </div>
      </div> */}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            className="u-full-width"
            type="email"
            placeholder="phoneNumber"
            id="emailInput"
            onChange={handlePhone}
            value={phoneNumber}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <input
            className="u-full-width"
            type="email"
            placeholder="address"
            id="emailInput"
            onChange={handleAddress}
            value={address}
          />
        </div>
        {error}
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
