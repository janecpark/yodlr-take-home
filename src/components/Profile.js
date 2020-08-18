import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import UserApi from '../UserApi';
import Alert from './Alert';

/**
 * Form to register and send data to API 
 */

 const Profile = () => {
  const history = useHistory();
  const INITIAL_STATE = {
    email: '',
    firstName: '',
    lastName: '',
    errors: [],
  };
  const [form, setForm] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
    };
    try {
      await UserApi.signUp(user);
    } catch (err) {
      return setForm((f) => ({ ...f, err }));
    }
    setForm(INITIAL_STATE);
    history.push('/admin');
  }

  return (
    <div className="Profile m-3">
      <h1>Yodlr Registration Portal</h1>
      <form onSubmit={handleSubmit} className="form mt-5">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="form-control"
            name="firstName"
            value={form.firstName}
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="form-control"
            name="lastName"
            value={form.lastName}
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>
        {form.errors.length ? (
          <Alert type="danger" messages={form.errors} />
        ) : null}

        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
