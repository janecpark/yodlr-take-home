import React from 'react';
import './User.css';

/**
 * User component that displays card 
 * Delete and active buttons for users
 */

const User = ({
  email,
  firstName,
  id,
  lastName,
  state,
  deleteUser,
  setActive,
}) => {
  return (
    <div className="User">
      <div
        className="card-transparent card-custom mb-3"
        style={{ maxWidth: '18rem' }}
      >
        <div className="card-header">{state}</div>
        <div className="card-body">
          <h5 className="card-title">
            {firstName} {lastName}
          </h5>
          <p className="card-text">{email}</p>
          <button
            className="btn btn-outline-secondary"
            onClick={() => deleteUser(id)}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-primary  ml-2"
            onClick={() => setActive(id)}
          >
            Set Active
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
